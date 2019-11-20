import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderAfterLoginComponent } from './header-after-login/header-after-login.component';
import { HeaderBeforeLoginComponent } from './header-before-login/header-before-login.component';
import { FooterComponent } from './footer/footer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DeviceComponent } from './device/device.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { VendorComponent } from './vendor/vendor.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderAfterLoginComponent,
    HeaderBeforeLoginComponent,
    FooterComponent,
    VehicleComponent,
    DeviceComponent,
    CompanyComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DriverComponent,
    VendorComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
