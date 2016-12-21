import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { routing } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        routing
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {

}