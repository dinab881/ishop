import {Injectable} from '@angular/core';
import {CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanLoad, CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canLoad(route: Route): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!(user && user.isAdmin)),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/products']);
        }
      }));
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!(user && user.isAdmin)),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/products']);
        }
      })
    );
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(next, state);
  }

}
