import React, { Component } from 'react';
import Axios from 'axios';
import FavoriteShows from './favoriteShows';
import './profileHome.scss';

export default class ProfileHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  }
  componentDidMount() {
    Axios.get('https://next.json-generator.com/api/json/get/E1k5AHM6L').then(({ data }) => {
      const shows = data
      console.log('this is from componentDidMount', shows);
      this.setState({ shows });
    });
  }

  render() {
    const { shows: data } = this.state;
    console.log('this from the class render:', data);

    return (
      <>
        <section>
          <h1>Listing of Shows</h1>
        </section>
        <section className='shows'>
          <FavoriteShows shows={data} />
        </section>
      </>
    );
  }
}
