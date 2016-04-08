import {bootstrap} from 'angular2/platform/browser';
import {App} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

bootstrap(App, [HTTP_PROVIDERS]);
