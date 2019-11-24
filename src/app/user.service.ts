import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: string;

  constructor() { }

  getUserProfile() {
    return this.user;
  }

  setUserProfile(profile: string) {
    this.user = profile;
  }


}
