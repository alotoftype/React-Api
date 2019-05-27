# REACT-API

**Tools Used**  
[JSON Seed Data](https://next.json-generator.com/E1k5AHM6L)  
[JSON FEED](https://next.json-generator.com/api/json/get/E1k5AHM6L)

**Instructions:**  
Finish writing the **ProfileHome component** and write a **FavoriteShows component** that will display a simple list of shows, but only with the category *“broadway”*. You will need to seed the API return or create a fake API. Style however you like.

```Javascript  
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
```
Information about about Favorite Shows

```javascript
// getFavoriteShowsByUserId takes in a userId 
//and returns a promise
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
```

TODO: Parsing Data
I have changed the format from `{ [ {}, {}, {} ..]}` to `[ {},{},{} ]`  
I will come back to this to figure out why I was unable to get the array as I expected. 
