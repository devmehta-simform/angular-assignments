import { Injectable } from '@angular/core';
import { NavigationEnd, type Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}
  getRoutes() {
    return this.router.config;
  }
  getCurrentRoute() {
    return this.router.events;
  }
}
