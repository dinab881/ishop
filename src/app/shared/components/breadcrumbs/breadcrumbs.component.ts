import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {filter, map, distinctUntilChanged} from 'rxjs/operators';

interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$: Observable<BreadCrumb[]>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(event =>  this.buildBreadCrumb(this.route.root)));
  }


  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<BreadCrumb> = []
  ): Array<BreadCrumb> {

    console.log(route.routeConfig);
    // If no routeConfig is avalailable we are on the root path
    const path = route.routeConfig ? route.routeConfig.path : '';
    const label = route.routeConfig && route.routeConfig.data[ 'breadcrumb' ] ? route.routeConfig.data[ 'breadcrumb' ] : path;

    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
    console.log(route.firstChild);
    if (route.firstChild) {
      // If we are not on our current path yet,
      // there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
