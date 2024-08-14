import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { RouterModule } from '@angular/router';

import { appConfig } from './app.config';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
