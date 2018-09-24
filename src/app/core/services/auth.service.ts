import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../../shared/models/user.model';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: Observable<User>;

  constructor(
    private af: AngularFireAuth,
    private userService: UserService
  ) {
    this.user$ = this.af.authState.pipe(switchMap(user => {
      if (user) {
        return this.userService.get(user.uid);
      }

      return of(null);
    }));
  }

  async registerUser(email: string, password: string) {
    const cred = await this.af.auth.createUserWithEmailAndPassword(email, password);
    const data: User = {
      uid: cred.user.uid,
      email: cred.user.email,
      isAdmin: false
    };
    return this.userService.save(data);

  }

  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.af.auth.signOut();
  }
}
