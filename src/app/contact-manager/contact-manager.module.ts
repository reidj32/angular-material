import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { ContactManagerComponent } from './contact-manager.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserService } from './user.service';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContactManagerRoutingModule
  ],
  declarations: [
    ContactManagerComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
    NotesComponent
  ],
  providers: [UserService]
})
export class ContactManagerModule {}
