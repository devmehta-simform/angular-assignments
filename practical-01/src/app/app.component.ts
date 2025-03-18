import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouterOutlet, type Route } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexWrapperComponent } from './shared-components/flex-wrapper/flex-wrapper.component';
import { RouteService } from './services/route-service/route.service';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    FlexWrapperComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practical-01';
  currentRoute: string = '/';
  routes: Route[] = [];
  constructor(private routeService: RouteService) {
    this.routeService.getCurrentRoute().subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
    this.routes = this.routeService.getRoutes();
  }
}
