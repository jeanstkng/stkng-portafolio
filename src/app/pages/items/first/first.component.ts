import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProdDescInterface } from '../../../interfaces/prod-desc.interface';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  producto: ProdDescInterface;

  id: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros => {

        this.productoService.getProductos( parametros['id'] )
          .subscribe( (producto: ProdDescInterface) => {
            this.id = parametros['id'];
            this.producto = producto;
          });

      });

  }


}
