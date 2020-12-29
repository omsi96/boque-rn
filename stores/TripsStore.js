import instance from "./instance";
import { makeAutoObservable } from "mobx";
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
