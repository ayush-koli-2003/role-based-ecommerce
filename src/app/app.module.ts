import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelRoutingModule } from './admin-panel/admin-panel-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    TempComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
