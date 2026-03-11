import { Injectable } from '@angular/core';
import { navItem } from '../models/nav-item';
import { dbMock } from '../mocks/dbMock';

@Injectable({
  providedIn: 'root',
})
export class Navigation {
  getNavItems(): navItem[] {
    return dbMock.navigation;
  }
}
