import {environment} from '../environments/environment';
import {InjectionToken} from '@angular/core';

export const baseUrl = environment.baseUrl;
export  const BASE_URL_TOKEN = new InjectionToken('BASE_URL_TOKEN');
