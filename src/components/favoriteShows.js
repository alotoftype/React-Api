import React from "react";

export const FavoriteShows = ({shows}) => {
  console.log('from inside favoriteshows',shows)
  return (  
    <>
    {shows.map(show =>(
      <div key={show.id}>

      <h3>{show.title}</h3>
      <img src={show.picture} alt=""/>
      <p>{show.excerpt}</p>
      </div>
    ))}
    </>
  )
};

export default FavoriteShows;
