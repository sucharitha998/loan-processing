import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HomeModule,
HeaderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
