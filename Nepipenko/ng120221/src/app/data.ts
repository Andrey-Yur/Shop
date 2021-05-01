import {Observable, of} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

export interface IProduct {
  id: number;
  name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  isFavorite: boolean;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Shelton',
    last_name: 'Epine',
    email: 'sepine0@chronoengine.com',
    gender: 'Male',
    ip_address: '51.134.143.244',
    isFavorite : false
  },
  {
    id: 2,
    name: 'Fee',
    last_name: 'McBay',
    email: 'fmcbay1@e-recht24.de',
    gender: 'Male',
    ip_address: '97.90.139.44',
    isFavorite : false
  },
  {
    id: 3,
    name: 'Zaccaria',
    last_name: 'Freed',
    email: 'zfreed2@va.gov',
    gender: 'Male',
    ip_address: '146.122.234.218',
    isFavorite : false
  },
  {
    id: 4,
    name: 'Hillary',
    last_name: 'Igonet',
    email: 'higonet3@reference.com',
    gender: 'Male',
    ip_address: '25.57.227.238',
    isFavorite : true
  },
  {
    id: 5,
    name: 'Mae',
    last_name: 'Boddington',
    email: 'mboddington4@parallels.com',
    gender: 'Female',
    ip_address: '12.247.128.189',
    isFavorite : false
  },
  {
    id: 6,
    name: 'Natasha',
    last_name: 'Castan',
    email: 'ncastan5@bbc.co.uk',
    gender: 'Female',
    ip_address: '82.75.131.78',
    isFavorite : true
  },
  {
    id: 7,
    name: 'Irwin',
    last_name: 'Grigorescu',
    email: 'igrigorescu6@tripadvisor.com',
    gender: 'Male',
    ip_address: '86.27.115.217',
    isFavorite : false
  }
    ];

export interface IProductRes { products: IProduct[]; serviceError: boolean | null; }

export const products$: Observable<IProductRes> = of({products, serviceError: null})
  .pipe(delay(3000), catchError(() => {
     return [];
  }));
