import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannedOrdersComponent } from './planned-orders.component';

const routes: Routes = [
    {
        path: '',
        component: PlannedOrdersComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlannedOrdersRoutingModule { }
