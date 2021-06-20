import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SearchComponent,
    ResultsComponent
  ],
  bootstrap: [AppComponent],
  providers: [GithubService]
})
export class AppModule {}
