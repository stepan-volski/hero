
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { rootRoutes } from './app/routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(rootRoutes),
    provideHttpClient(),
  ]
})
.catch(e => console.error(e));


//WHAT WAS DONE
// 1. update all components with standalone: true and imports sections
// 2. add required imports to each component, add routing inports to components (RouterLink)
// 3. remove routing module, export routes as a const
// 4. add bootstrap function to main.ts
// 5. add providers to bootsrtap fn: for routes, for httpClient


// TODO
// 1. Move HttpClientInMemoryWebApiModule from app.module to hero service?
// 2. Use new control flow
// 3. use signals for stuff
// 4. use signals for state
// 5. use css variables
