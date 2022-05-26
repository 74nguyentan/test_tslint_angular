import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestLComponent } from './test-l/test-l.component';
import { ViDuComponent } from './vi-du/vi-du.component';

@NgModule({
  declarations: [AppComponent, TestLComponent, ViDuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
