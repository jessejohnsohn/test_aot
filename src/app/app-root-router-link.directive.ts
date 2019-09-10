import {
  Input,
  Attribute,
  Renderer2,
  ElementRef,
  Directive
} from "@angular/core";

import {
  RouterLink,
  Router,
  ActivatedRoute,
  RouterLinkWithHref
} from "@angular/router";

import { LocationStrategy } from "@angular/common";

export const DOCROOT = "DOCROOT";

@Directive({
  selector: ":not(a)[appRootRouterLink]"
})
export class RootRouterLinkDirective extends RouterLink {
  @Input()
  set appRootRouterLink(routerLink: any[] | string) {
    this.routerLink = routerLink;
  }
  constructor(
    router: Router,
    route: ActivatedRoute,
    @Attribute("tabindex") tabIndex: string,
    renderer: Renderer2,
    el: ElementRef
  ) {
    super(router, route, tabIndex, renderer, el);
    this.fragment = DOCROOT;
  }
}
@Directive({
  selector: "a[appRootRouterLink]"
})
export class RootRouterLinkWithHrefDirective extends RouterLinkWithHref {
  @Input()
  set appRootRouterLink(routerLink: any[] | string) {
    this.routerLink = routerLink;
  }
  constructor(
    router: Router,
    route: ActivatedRoute,
    locationStrategy: LocationStrategy
  ) {
    super(router, route, locationStrategy);
    this.fragment = DOCROOT;
  }
}
