import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, MenubarModule, DataGridModule, PanelModule } from 'primeng/primeng';
import { routing } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza/ts/components/pizzalist.component';
import { PizzaDetailComponent } from './pizza/ts/components/pizzadetail.component';

//Servises
import { PizzaListService } from './pizza/ts/services/pizzalist.service';
import { PizzaDetailService } from './pizza/ts/services/pizzadetail.service';


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
        PizzaListComponent,
        PizzaDetailComponent
    ],
    providers: [
        PizzaListService,
        PizzaDetailService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}