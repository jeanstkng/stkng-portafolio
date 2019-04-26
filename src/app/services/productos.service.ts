import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { ProdDescInterface } from '../interfaces/prod-desc.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  cargandoItem = true;

  productos: Producto[] = [];

  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

   }

   private cargarProductos() {

    return new Promise ( (resolve, reject) => {

      this.http.get('https://angular-stkng.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) =>  {

        this.productos = resp;

        this.cargando = false;

        resolve();

      }
      );

    });

   }

   getProductos( id: string ) {

    this.cargandoItem = false;

    return this.http.get(`https://angular-stkng.firebaseio.com/productos/${ id }.json`);

   }

   buscarProductos( termino: string )  {
     if (this.productos.length === 0) {
       this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
       });
     } else {
      this.filtrarProductos(termino);
     }
   }

   private filtrarProductos( termino: string ) {

    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase()

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productoFiltrado.push( prod );
      }
    });

  }
}
