import React, { useReducer, useEffect } from "react";
import topStoriesReducer from "../reducers/top-stories-reducer";
import { getTopStoriesFailure, getTopStoriesSuccess } from "../actions/index";

const initialState = {
  isLoaded: false,
  topStories: [],
  error: null
};

function TopStories() {
const [state, dispatch] = useReducer(topStoriesReducer, initialState);

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
      const action = getTopStoriesSuccess(jsonifiedResponse.results)
      dispatch(action);
    })
    .catch((error) => {
      const action = getTopStoriesFailure(error.message)
      dispatch(action);
    });
  }, [])

  const { error, isLoaded, topStories } = state;


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