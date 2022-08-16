import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: AuthComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
