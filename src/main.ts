import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) //Boots the angular application and console the error if any error occur during the process
  .catch(err => console.error(err));
