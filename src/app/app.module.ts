import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sites/footer/footer.component';
import { MenuHomePageComponent } from './sites/menu-home-page/menu-home-page.component';
import { NavMenuComponent } from './sites/nav-menu/nav-menu.component';
import { NavSideMenuComponent } from './sites/nav-side-menu/nav-side-menu.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginMasterComponent } from './page/B2B/login-master/login-master.component';
import { LoginAgentComponent } from './page/B2B/login-agent/login-agent.component';
import { LoginNeptuneComponent } from './page/Neptune/login-neptune/login-neptune.component';
import { LoginMasterNeptuneComponent } from './page/Neptune/login-master-neptune/login-master-neptune.component';
import { LoginSupplierNeptuneComponent } from './page/Neptune/login-supplier-neptune/login-supplier-neptune.component';
import { ArmDetailComponent } from './page/ARM/arm-detail/arm-detail.component';
import { LoginArmComponent } from './page/ARM/login-arm/login-arm.component';
import { LoginHotelArmComponent } from './page/ARM/login-hotel-arm/login-hotel-arm.component';
import { LoginSupplierArmComponent } from './page/ARM/login-supplier-arm/login-supplier-arm.component';
import { LoginExtranetHotelComponent } from './page/Extranet/login-extranet-hotel/login-extranet-hotel.component';
import { LoginExtranetSupplierComponent } from './page/Extranet/login-extranet-supplier/login-extranet-supplier.component';
import { LoginExtranetTransportComponent } from './page/Extranet/login-extranet-transport/login-extranet-transport.component';
import { LoginExtranetPlaceComponent } from './page/Extranet/login-extranet-place/login-extranet-place.component';
import { LoginExtranetFerryComponent } from './page/Extranet/login-extranet-ferry/login-extranet-ferry.component';
import { LoginExtranetGolfComponent } from './page/Extranet/login-extranet-golf/login-extranet-golf.component';
import { AgentListingComponent } from './page/B2B/agentListing/agent-listing/agent-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuHomePageComponent,
    NavMenuComponent,
    NavSideMenuComponent,
    HomePageComponent,
    LoginMasterComponent,
    LoginAgentComponent,
    LoginNeptuneComponent,
    LoginMasterNeptuneComponent,
    LoginSupplierNeptuneComponent,
    ArmDetailComponent,
    LoginArmComponent,
    LoginHotelArmComponent,
    LoginSupplierArmComponent,
    LoginExtranetHotelComponent,
    LoginExtranetSupplierComponent,
    LoginExtranetTransportComponent,
    LoginExtranetPlaceComponent,
    LoginExtranetFerryComponent,
    LoginExtranetGolfComponent,
    AgentListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
