import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    IntegrationsComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: 'integrations', component: IntegrationsComponent },
            { path: 'contact', component: ContactComponent },
            { path: '**', redirectTo: 'home' }
        ])
  ],
  providers: [
    { provide: 'BASE_URL', useValue: 'localhost:4200' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
