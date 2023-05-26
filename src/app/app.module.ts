import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormHtmlComponent } from './components/form-html/form-html.component';
import { FormJsComponent } from './components/form-js/form-js.component';
import { FormNgModelComponent } from './components/form-ng-model/form-ng-model.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormHtmlComponent,
    FormJsComponent,
    FormNgModelComponent,
    ReactiveFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
