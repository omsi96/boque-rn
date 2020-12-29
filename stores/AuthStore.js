import axios from "axios";
import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
const authAxios = axios.create({
  baseURL: "http://53bfd7c48401.ngrok.io/",
});
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  signUp = async (user) => {
    console.log("Requesting:", user);
    const response = await authAxios.post("signup", user);
    console.log("user signwd up", response);
  };
  signIn = async (userCredentials) => {
    try {
      console.log("Signing in with credentials:", userCredentials);
      const encodedPayload = await authAxios.post("signin", userCredentials);
      console.log("Signed in ");
      this.user = decode(encodedPayload.data.token);
      console.log("User signed in:", this.user);
      return true;
    } catch (error) {
      console.log("couldn't get the token", error);
      return false;
    }
  };
}

const authStore = new AuthStore();
export default authStore;
