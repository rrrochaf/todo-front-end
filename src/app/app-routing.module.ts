import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvenioComponent } from './convenio/convenio.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'welcome/:name' , component : WelcomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'todos' , component : ListTodosComponent},
  {path : 'logout' , component : LogoutComponent},
  {path : 'todo/:id' , component : TodoComponent},
  {path : 'convenio' , component : ConvenioComponent},
  {path : '**' , component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
