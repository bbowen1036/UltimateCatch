import { connect } from 'react-redux';
import Map from './map'
import {fetchWeather} from '../../actions/weather_actions'
import { fetchPosts, fetchPostsByRegion} from '../../actions/post_actions'
const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        weather: state.entities.weather,
        posts: Object.values(state.entities.posts.all),

        // weatherBool: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (lat,lng) => dispatch(fetchWeather(lat,lng)),
        fetchPostsByRegion: (regionId) => dispatch(fetchPostsByRegion(regionId)),
        fetchPosts: () => dispatch(fetchPosts())

        //fetchRegions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);