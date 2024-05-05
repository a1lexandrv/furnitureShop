import { makeAutoObservable } from "mobx";

class UserStore {
  user = {};
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  login(name, phone) {
    (this.user = {
      name: name,
      phone: phone,
    }),
      (this.isAuth = true);

    const data = JSON.stringify({ ...this.user });

    localStorage.setItem("user", data);
    localStorage.setItem("isAuth", this.isAuth);
  }

  logout() {
    (this.user = {}), (this.isAuth = false);

    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
  }
}

export default new UserStore();
