import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//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