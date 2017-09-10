import { HostListener, Component } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'page-title',
  template: '{{ (route.data | async).title }}'
})
export class PageTitleComponent {
  constructor(public route: ActivatedRoute) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  menuActive = true;
  mobileMenuActive = false;
  popup = {
    visible: false,
    width: null,
    height: null,
    title: null
  };

  constructor (public router: Router, private route: ActivatedRoute, private location: Location) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = this.route.children.find(route => route.outlet == 'popup');

        if (route) {
          this.popup.width = route.snapshot.queryParams.width || 600;
          this.popup.height = route.snapshot.queryParams.height || null;
          this.popup.title = route.snapshot.data.title;
          setTimeout(() => this.popup.visible = true);
        } else {
          this.popup.visible = false;
        }
      }
    });
  }

  onToggleMenuClick(event) {
    event.preventDefault();

    if(this.isDesktop()) {
      this.menuActive = !this.menuActive;
    } else {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
  }

  onPopupHide() {
    this.router.navigate([ { outlets: { popup: null } } ]);
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }
}
