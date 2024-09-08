import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    // importProvidersFrom(AngularFireModule.initializeApp(environment.firebaseConfig),)
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule)
    // AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
};
