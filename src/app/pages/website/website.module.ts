import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { WebsiteComponent } from './website.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StatsWidget1Component } from './details/stats-widget1/stats-widget1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    WebsiteComponent,
    GeneralInfoComponent,
    DetailsComponent,
    StatsWidget1Component,
    NewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebsiteComponent,
        //children: Routing
      }
    ]),
    SweetAlert2Module.forChild(),
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    NgbTooltipModule,

  ]
})
export class WebsiteModule { }
