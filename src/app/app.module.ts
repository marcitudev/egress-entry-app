import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StatisticComponent } from './egress-entry/statistic/statistic.component';
import { DetailsComponent } from './egress-entry/details/details.component';
import { EgressEntryComponent } from './egress-entry/egress-entry.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      StatisticComponent,
      DetailsComponent,
      EgressEntryComponent,
      RegisterComponent,
      FooterComponent,
      NavbarComponent,
      SidebarComponent,
      DashboardComponent,
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppRoutingModule
    ]
})
export class AppModule { }
