import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactManagerComponent } from './contact-manager.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    component: ContactManagerComponent,
    children: [{ path: '', component: MainContentComponent }]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManagerRoutingModule {}
