import axios from "axios";
import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
const instance = axios.create({
  baseURL: "http://53bfd7c48401.ngrok.io/",
});
class TripsStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];

  getAllTrips = async () => {
    try {
      this.trips = (await instance.get("trips/")).data;
    } catch (error) {
      console.log("COULDN'T FETCH TRIPS WITH ERROR: ", error.message);
    }
  };
}

const tripsStore = new TripsStore();
tripsStore.getAllTrips();
export default tripsStore;
