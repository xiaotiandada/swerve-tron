import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapComponent } from './pages/swap/swap.component';
import { PoolComponent } from './pages/pool/pool.component';
import { NavTabsComponent } from './shared/nav-tabs/nav-tabs.component';
import { HeaderComponent } from './shared/header/header.component';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [
    AppComponent,
    SwapComponent,
    PoolComponent,
    NavTabsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: StateService) => () => service.initialize(),
      deps: [StateService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
