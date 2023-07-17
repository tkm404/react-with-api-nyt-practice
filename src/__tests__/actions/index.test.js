import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('top stories reducer actions', () => {
  it('getTopStoriesSuccess should create GET_TOP_STORIES_SUCCESS action', () => {
    const topStories = "An article";
    expect(actions.getTopStoriesSuccess(topStories)).toEqual({
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    });
  });

  it('getTopStoriesFailure should create GET_TOP_STORIES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getTopStoriesFailure(error)).toEqual({
      type: c.GET_TOP_STORIES_FAILURE,
      error
    });
  });
});