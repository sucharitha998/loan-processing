import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { OverviewComponent } from './homeextensionloan/overview/overview.component';
import { EligibilityComponent } from './homeextensionloan/eligibility/eligibility.component';
import { ApplicationComponent } from './homeextensionloan/application/application.component';
import { HomeextensionloanModule } from './homeextensionloan/homeextensionloan.module';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'overview',component:OverviewComponent},
  {path:'eligbility',component:EligibilityComponent},
  {path:'application',component:ApplicationComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HomeModule,
HeaderModule,
HomeextensionloanModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
