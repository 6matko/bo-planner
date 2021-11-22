import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './pages/options/options.component';

@NgModule({
  imports: [CommonModule, OptionsRoutingModule],
  declarations: [OptionsComponent],
})
export class OptionsModule { }
