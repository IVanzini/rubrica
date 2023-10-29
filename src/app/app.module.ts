import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';
import { RubricaPreviewComponent } from './components/rubrica-preview/rubrica-preview.component';
import { RubricaAddComponent } from './components/rubrica-add/rubrica-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RubricaComponent,
    RubricaPreviewComponent,
    RubricaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
