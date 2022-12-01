import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './quiz/quiz.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './toast-container/toast-container.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
