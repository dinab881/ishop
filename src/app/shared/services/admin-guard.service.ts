import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {tap, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

 /* I think the rationale is that, logically, the router must make a single decision in response to a navigation event.
    In the case of an async value, the guard must wait for a single value and then make its decision. Consider a user clicking a link to navigate somewhere:
    The guard either says "yes, this is ok to go forward" or "no, cancel the navigation".
     If a new value appears for the observable after it has made its decision,
    the router can't re-evaluate the navigation. It has already responded to the user. Therefore, it doesn't really make sense to have the guard try to respond
    to more than one value from the Observable.

     So, the purpose of the .take(1) operator is to say "give me the first value out of this Observable. I don't care about the rest."
     That way, each invocation of the guard will get a single value to use to make their decision and then move on.
     */


      return this.authService.user$.pipe(
        take(1),
        map(user => !!(user && user.isAdmin)));
  }
}
