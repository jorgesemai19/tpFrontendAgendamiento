// import { Routes } from '@angular/router';
//
// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers/providers.component';
import { ProductsComponent } from './products/products.component';
import { ReceptionCagesComponent } from './reception-cages/reception-cages.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReceptionExecutionComponent } from './reception-execution/reception-execution.component';

export const routes: Routes = [
  { path: 'providers', component: ProvidersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'reception-cages', component: ReceptionCagesComponent },
  { path: 'scheduling', component: SchedulingComponent },
  { path: 'reception-execution', component: ReceptionExecutionComponent },
  { path: '', redirectTo: '/providers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
