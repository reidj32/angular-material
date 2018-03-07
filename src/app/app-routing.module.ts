import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contactmanager',
    loadChildren:
      './contact-manager/contact-manager.module#ContactManagerModule'
  },
  {
    path: 'demo',
    loadChildren: './demo/demo.module#DemoModule'
  },
  {
    path: '**',
    redirectTo: 'contactmanager'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
