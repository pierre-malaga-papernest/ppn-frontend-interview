import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from '@components/user.component';
import { HomeComponent } from '@pages/home/home.component';
import { HomeRoutingModule } from '@pages/home/home.routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    UserComponent
  ],
  declarations: [HomeComponent],
  exports: []
})
export class HomeModule { }
