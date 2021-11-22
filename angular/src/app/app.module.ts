import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const dbConfig: DBConfig = {
  name: 'boPlanner',
  version: 1,
  objectStoresMeta: [{
    store: 'orders',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'itemName', keypath: 'itemName', options: { unique: true } },
      { name: 'imgUrl', keypath: 'imgUrl', options: { unique: true } },
      { name: 'price', keypath: 'price', options: { unique: false } },
      { name: 'amount', keypath: 'amount', options: { unique: false } },
      { name: 'created', keypath: 'created', options: { unique: false } },
      { name: 'updated', keypath: 'updated', options: { unique: false } },
    ]
  }]
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxIndexedDBModule.forRoot(dbConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
