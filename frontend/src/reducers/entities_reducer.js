import { combineReducers } from 'redux';

import weather from './weather_reducer';
import posts from './posts_reducer';

export default combineReducers({
    weather,
    posts
});
