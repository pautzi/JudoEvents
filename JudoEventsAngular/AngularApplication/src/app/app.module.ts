import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './app-components/navbar/navbar.component';
import {MainpageComponent} from "./app-components/mainpage/mainpage.component";
import { FooterComponent } from './app-components/footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { TournamentComponent } from './app-components/tournament/tournament.component';
import { TrainingscampComponent } from './app-components/trainingscamp/trainingscamp.component';
import { LandmapComponent } from './app-components/landmap/landmap.component';
import { CreateComponent } from './app-components/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    FooterComponent,
    TournamentComponent,
    TrainingscampComponent,
    LandmapComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
