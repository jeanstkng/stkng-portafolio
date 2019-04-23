import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { FirstComponent } from './pages/items/first/first.component';

// tslint:disable-next-line: variable-name
const app_routes: Routes = [

  {path: '', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'first', component: FirstComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
