/**
 * Created by Nacho on 15/4/16.
 */

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';

bootstrap(<any>AppComponent, [HTTP_PROVIDERS]);