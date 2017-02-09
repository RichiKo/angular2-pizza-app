import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DatePipe} from './date.pipe';
import {CurrencyPipe} from './currency.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [DatePipe, CurrencyPipe],
  exports: [DatePipe, CurrencyPipe]
})

export class PipesModule { }