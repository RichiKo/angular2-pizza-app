import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/ts/components/home.component';
import { PizzaListComponent } from './pizza/ts/components/pizzalist.component';
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
    declarations: [
        AppComponent,
        HomeComponent,
        PizzaListComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}