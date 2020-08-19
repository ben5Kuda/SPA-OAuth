import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from '../components/messages/messages.component';
import { AdminComponent } from '../components/admin/admin.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'messages', component: MessagesComponent},
    { path: 'admin', component: AdminComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }