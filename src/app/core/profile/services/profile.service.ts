import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../model/user';

const API = 'http://loaclhost:3000'
@Injectable()
export class ProgileService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<User>(API + '/profile');
  }

  edit(user: User) {
    return this.http.patch<User>(`${API}/profile`, user);
  }
}
