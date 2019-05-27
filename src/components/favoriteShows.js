import React from "react";
import './favoriteShows.scss';

export const FavoriteShows = ({shows}) => {
  console.log('from inside favoriteshows',shows)
  return (  
    <>
    {shows.map(show =>(
      <div key={show.id} className='show-item'>

      <h3>{show.title}</h3>
      <img src={show.picture} alt=""/>
      <p>{show.excerpt}</p>
      <span className="more-details"> Find out more</span>
      <p>{show.description}</p>
      </div>
    ))}
    </>
  )
};

export default FavoriteShows;
