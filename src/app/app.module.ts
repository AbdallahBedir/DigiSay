import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule ,MdButtonModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { ChartsComponent } from './charts/charts.component';

// services 
import { JsonFileService } from './services/json-file.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdButtonModule,
    ChartsModule
  ],
  providers: [ JsonFileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
