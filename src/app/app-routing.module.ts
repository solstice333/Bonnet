import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { ItemsComponent } from './items.component';
import { HomeComponent } from './home.component';
import { ItemDetailComponent } from './item-detail.component';

const routes: Routes = [
  {
    path: 'products',
    component: ItemsComponent
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