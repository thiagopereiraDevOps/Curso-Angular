import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { AppRoutingModule } from "./app.routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        FirstComponentComponent,
        ParentDataComponent,
        DirectivesComponent,
        IfRenderComponent,
        EventosComponent,
        EmitterComponent,
        ChangeNumberComponent,
        ListRenderComponent,
        PipesComponent,
        TwoWayBindingComponent
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }