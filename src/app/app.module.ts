import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app/app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    IntegrationsComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
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
