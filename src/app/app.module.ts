import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { IterableObjectPipe } from './auth/pipes/iterable-object.pipe';
import { RegistrationComponent } from './auth/registration/registration.component';
import { GroupModule } from './group/group.module';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { MainComponent } from './pages/main/main.component';
import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';
import { PersonDialogComponent } from './pages/person-dialog/person-dialog.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MainComponent,
    PageNoFoundComponent,
    UserProfileComponent,
    PersonDialogComponent,
    IterableObjectPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GroupModule,
    UsersModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
