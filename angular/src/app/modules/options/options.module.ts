import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './pages/options/options.component';
import { SubMenuComponent } from './pages/options/sub-menu/sub-menu.component';

@NgModule({
  imports: [CommonModule, OptionsRoutingModule],
  declarations: [OptionsComponent, SubMenuComponent],
})
export class OptionsModule { }
