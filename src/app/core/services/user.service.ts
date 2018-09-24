import { Injectable } from '@angular/core';

import { User } from '../../shared/models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  get(uid: string) {
    return this.db.object('/users/' + uid).valueChanges();
  }

  save(user: User) {
    return this.db.object('/users/' + user.uid).set(user);
  }
}
