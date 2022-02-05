# Know(Nostalgia) - React Portfolio Project

## Kurt Reynolds

Portfolio project that was initially made with Bootstrap, now converted to a React app.

The Bootstrap version of the page can be found here: https://knownostalgia.netlify.app/index.html

Both the React & Bootstrap sites feature an API to search for movies and tv series that were released between 1990 and 2009.

My portfolio can be found here: https://kurtreyn.netlify.app

---

---

## Highlights

- Reusable components:
  - RenderHeader
    - on MainComponent, line 24, the abra function declaration takes in two paramaters, item & matchThis. In the return, item is set to equal the returned value of the filtered array of objects in the state variable, topPageCont.
      Then, using the map method, item is set equal to, for example, 'home-about-page'. The RenderHeader component takes in item as a prop and sets the header image and title image accordingly.
  - RenderPage
    - on MainComponent, line 33, the cadabra function declaration works in the same fashion as the abra function declaration, only for the RenderPage component.
  - SearchPage
    - on MainComponent, line 42, the alakazam function declaration works as the prevously mentioned function declarations, only for the SearchPage component.

---

- RESTful API for searching Movies & TV Shows
  - On SearchComponents.js the OMDb API is used to search for movies & TV Shows.
  - The input form has an onKeyUp event listener which fires the findEm function.
    - The key aspects of the findEm function are to determine what is being searched for, a movie or a TV show. If the searchType is a movie then the findEm function calls the loadMovies function. Otherwise the loadTVShows function is called.
  - The loadMovies & loadTVShows both function in the same way.
    - They are asynchronous functions which take in a parameter, searchTitle.
    - searchTitle is then inserted as an argument in the const url, which holds the API url.
    - If a response is received then these functions call either the displayMovieList or displayTVList functions. Both of those functions use the parameter of data.Search as a parameter.
  - Both the displayMovieList & displayTVList functions work the same way.
    - The functions take in the parameter, things. This parameter is an array of search results returned from the API.
    - The results are looped over and for each result a div is created and held in a variable, movieListItem/tvListItem.
    - If a poster image is available then the a previously declared variable, poster, is set equal to that poster image. Otherwise it is set to a locally stored image_not_found image.
    - Two other variables are then declared, movieYear/tvYear & movieType/tvType. Those variables are set equal to the year and type returned from the API results.
    - If the years of the result are between 1990 & 2009 and the type is equal to either movie or series, then the results are displayed dynamically in the innerHTML of the variable movieListItem/tvListItem and the variable is appended to the static searchList div.
    - These functions then call another set of functions, loadMovieDetails/loadTVDetails.
  - Again, both the loadMovieDetails & loadTVDetails functions work the same.
    - An event listener is placed on each item appended to the searchList, which is stored in a variable called searchListItems.
    - Those items are looped over and when an item is clicked it runs an asynchronous callback function from the API that fetches the details of that particular item and stored in a variable movieDetails/tvShowDetails.
    - If the year in the details is between 1990 - 2009 then then another function is called, displayDetails which takes in movieDetails/tvShowDetails as a argument.
  - The final function, displayDetails takes in details as a parameter.
    - A variable resultGrid is set equal to the static div with an id of result-grid.
    - The innerHTML of the resultGrid variable is then set to generate a poster image, title, year and plot of the dynamic HTML.
