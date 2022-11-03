import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoLoadingModule, PoModule, PoNotificationModule, PoTableModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoNotificationModule,
    PoLoadingModule,
    PoTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
