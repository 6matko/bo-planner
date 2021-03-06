import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@ngneat/dialog';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const dbConfig: DBConfig = {
  name: 'boPlanner',
  version: 2,
  objectStoresMeta: [{
    store: 'orders',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'itemName', keypath: 'itemName', options: { unique: true } },
      { name: 'appId', keypath: 'appId', options: { unique: false } },
      { name: 'currencyId', keypath: 'currencyId', options: { unique: false } },
      { name: 'price', keypath: 'price', options: { unique: false } },
      { name: 'amount', keypath: 'amount', options: { unique: false } },
      { name: 'created', keypath: 'created', options: { unique: false } },
      { name: 'updated', keypath: 'updated', options: { unique: false } },
    ]
  }]
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxIndexedDBModule.forRoot(dbConfig), DialogModule.forRoot({
    sizes: {
      sm: {
        width: 500,
      },
    }
  })],
  bootstrap: [AppComponent]
})
export class AppModule { }
