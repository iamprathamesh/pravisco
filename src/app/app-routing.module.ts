import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './components/careers/career.component';
import { BodyComponent } from './components/landing-page/body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'careers', component: CareersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
