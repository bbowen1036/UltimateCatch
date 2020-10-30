import { connect } from 'react-redux';
import Map from './map'
import {fetchWeather} from '../../actions/weather_actions'
const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        weather: state.entities.weather,
        // weatherBool: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (lat,lng) => dispatch(fetchWeather(lat,lng))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);