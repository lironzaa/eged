import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { HeaderComponent } from "./components/layout/header/header.component";
import { appReducer } from "./store/app.reducer";
import { UsersEffects } from "../features/users/store/users.effects";
import { CustomHeaderInterceptor } from "../features/users/interceptors/custom-header.interceptor";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ UsersEffects ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHeaderInterceptor,
      multi: true
    }
  ],
})
export class CoreModule {
}
