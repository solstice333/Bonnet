import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { ItemDetailComponent } from './item-detail.component'
import { ItemsComponent } from './items.component'
import { HomeComponent } from './home.component';
import { ItemSearchComponent } from './item-search.component';
import { UnlessDirective } from './unless.directive'
import { CapitalizePipe } from './capitalize.pipe';

import { ItemService } from './item.service';
import { LoggerService } from './logger.service';
import { BackendService } from './backend.service';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [ // make public view directives from imported modules
             // visible to component templates of this module
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ // components, directives, pipes go here i.e. view directives
    AppComponent, 
    UnlessDirective, 
    ItemDetailComponent, 
    ItemsComponent,
    HomeComponent,
    CapitalizePipe,
    ItemSearchComponent
  ],
  bootstrap: [ // root component that ang creates and inserts 
               // into the index.html host web page
    AppComponent 
  ],
  providers: [ // provide a service here for components to use
    ItemService,
    LoggerService,
    BackendService
  ]
})
export class AppModule {}
