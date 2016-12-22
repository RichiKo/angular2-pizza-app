import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/ts/components/home.component';
import { PizzaListComponent } from './pizza/ts/components/pizzalist.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, MenubarModule, DataGridModule, PanelModule } from 'primeng/primeng';
import { routing } from './app.routes';

//Servises
import { PizzaListService } from './pizza/ts/services/pizzalist.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        MenubarModule,
        routing,
        HttpModule,
        DataGridModule,
        PanelModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PizzaListComponent
    ],
    providers: [
        PizzaListService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}