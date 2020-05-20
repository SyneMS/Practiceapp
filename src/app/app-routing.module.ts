import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'menu', component: NavigationComponent
  // },
  {
    path: 'menu', component: NavigationComponent,
    children: [{ path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
    { path: 'employee', component: EmployeeComponent }],
    canActivate: [AuthGuardGuard],
    runGuardsAndResolvers: "always"
  },

  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
