import React, { useState, useEffect } from "react";

function TopStories() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState([]);


  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      setTopStories(jsonifiedResponse.results)
      setIsLoaded(true)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoaded(true)
    });
  }, [])


  if (error) {
    return <h1>Error: {error}</h1>

  } else if (!isLoaded) {
    return <h1>...Loading...</h1>

  } else {
    return (
      <React.Fragment>
        <h1>Top Stories</h1>
        <ul>
          {topStories.map((article, index) =>
          <li key={index}>
          <h3>{article.title}</h3>
          <p>{article.abstract}</p>
          </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default TopStories;