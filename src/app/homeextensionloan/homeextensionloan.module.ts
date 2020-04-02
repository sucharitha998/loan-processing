import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { ApplicationComponent } from './application/application.component';



@NgModule({
  declarations: [OverviewComponent, EligibilityComponent, ApplicationComponent],
  imports: [
    CommonModule
  ]
})
export class HomeextensionloanModule { }
