import { Content, List, ListItem } from "native-base";

import React from "react";
import TripRow from "./TripRow";
import { observer } from "mobx-react";

const TripsList = ({ navigation, trips }) => (
  <Content>
    <List>
      {trips.map((trip) => (
        <ListItem onPress={() => navigation.navigate("TripDetails", trip)}>
          <TripRow trip={trip} />
        </ListItem>
      ))}
    </List>
  </Content>
);

export default observer(TripsList);
