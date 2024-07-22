// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// we have to add this if want to use standalone components...

bootstrapApplication(AppComponent)
.catch(err => console.error(err));
