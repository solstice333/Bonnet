import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { ItemsComponent } from '../components/items.component';
import { HomeComponent } from '../components/home.component';
import { ItemDetailComponent } from '../components/item-detail.component';

const routes: Routes = [
  {
    path: 'products/:term',
    component: ItemsComponent
  },
  {
    path: 'products',
    redirectTo: '/products/all'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: ItemDetailComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}