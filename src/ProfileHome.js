import React, { Component } from "react";
// this will be your API endpoint
import { getFavoriteShowsByUserId } from "BAPI";

// How ProfileHome will be used
const App = () => (
  <ProfileHome userId="broadwaycom">
    {data =>
      data === null ? (
        <div>Loading Shows....</div>
      ) : (
        // You will need to create this component
        <FavoriteShows shows={data} />
      )
    }
  </ProfileHome>
);

class ProfileHome extends Component {
  // finish this
}

// getFavoriteShowsByUserId takes in a userId and returns a promise
// with a response in the format of:
/* {
  shows: [
    { 
      title: `show1`, 
      category: 'broadway', 
      url: '/show1',
    },
    {
      title: `show2`,
      category: 'off-broadway',
      url: '/show2',
    },
    {
      title: `show3`,
      category: 'broadway',
      url: '/show3',
    },
    // ...etc
  ]
}
*/
