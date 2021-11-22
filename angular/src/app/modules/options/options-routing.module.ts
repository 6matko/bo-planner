import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './pages/options/options.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planned',
    pathMatch: 'full',
  },
  {
    path: '',
    component: OptionsComponent,
    children: [
      {
        path: 'planned',
        loadChildren: () => import('./pages/options/planned-orders/planned-orders.module').then(m => m.PlannedOrdersModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
