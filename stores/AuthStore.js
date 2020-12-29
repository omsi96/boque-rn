import AsyncStorage from "@react-native-async-storage/async-storage";
import decode from "jwt-decode";
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  signUp = async (user) => {
    console.log("Requesting:", user);
    const response = await instance.post("signup", user);
    this.setUser(response);
    console.log("user signed up", response);
  };

  signIn = async (userCredentials) => {
    console.log("Signing in with credentials:", userCredentials);
    const response = await instance.post("signin", userCredentials);
    this.setUser(response.data.token);
    console.log("Signed in ");
    return true;
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };
}

const authStore = new AuthStore();
export default authStore;
