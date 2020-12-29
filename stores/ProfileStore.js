import instance from "./instance";
import { makeAutoObservable } from "mobx";
class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }

  getProfile = async (profileId) => {
    try {
      return (await instance.get(`profile/${profileId}`)).data;
    } catch (error) {
      console.log("COULDN'T FETCH TRIPS WITH ERROR: ", error.message);
    }
  };

  updateProfile = async (profile) => {
    try {
      await instance.put(`profile/${profile.id}`, profile);
    } catch (error) {
      console.log("Error:", error);
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
