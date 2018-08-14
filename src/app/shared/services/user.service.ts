import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';

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
