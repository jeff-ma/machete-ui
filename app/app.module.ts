import {NgModule}      from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {InputTextModule, DataTableModule, ButtonModule, DialogModule} from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InputTextModule, DataTableModule, ButtonModule, DialogModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
