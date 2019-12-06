import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyFormatsDirective } from './apply-formats.directive';
import { AddErrorDirective } from './add-error.directive';
import { ReactFormComponent } from './react-form/react-form.component';
import {MaterialModule} from './material-module';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@NgModule({
  declarations: [
    AppComponent,
    ApplyFormatsDirective,
    AddErrorDirective,
    ReactFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
