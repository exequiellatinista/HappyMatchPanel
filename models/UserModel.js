export class UserModel {
  constructor(userDate) {
    this.name = userDate.displayName
    this.email = userDate.email
  }
}