import React, { Component } from "react";
import Axios from "axios";
import FavoriteShows from "./favoriteShows";

const data = Axios.get(`./data.json`);

export default class ProfileHome extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Welcome to the Shows </h1>
        </section>
        <section>
          <FavoriteShows shows={data} />
        </section>
      </>
    );
  }
}
