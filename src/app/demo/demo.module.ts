import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { DemoRoutingModule } from './demo-routing.module';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    DemoRoutingModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule {}
