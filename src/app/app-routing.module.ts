import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubricaComponent } from './components/rubrica/rubrica.component';
import { RubricaAddComponent } from './components/rubrica-add/rubrica-add.component';

const routes: Routes = [
  {
    path:"", 
    redirectTo:"/rubrica", pathMatch:"full"
  },
  {
    path:"rubrica", component: RubricaComponent
  },
  {
    path:"rubrica/nuovo", component: RubricaAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
