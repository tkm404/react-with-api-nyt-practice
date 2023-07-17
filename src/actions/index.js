import * as c from './ActionTypes';

export const getTopStoriesSuccess = (topStories) => ({
  type: c.GET_TOP_STORIES_SUCCESS,
  topStories
});

export const getTopStoriesFailure = (error) => ({
  type: c.GET_TOP_STORIES_FAILURE,
  error
});