import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
// } from "use-places-autocomplete";
import mapStyles from './mapStyles'
import { formatRelative } from "date-fns";


/// make sure to npm i -S @react-google-maps/api
// npm install --save use-places-autocomplete

const libraries = ["places"]
const styles = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const sanFran = {
    lat: 37.773972,
    lng: -122.431297
} // San Francisco coords
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
export default function Map(props){
    // console.log(props.weather == {})
    console.log(props.weather)
    // console.log(process.env.WEATHER_API_KEY)
    // if(props.weather !== {}){
    //     console.log(props.weather.data.weather)
    // }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    const [markers, placeMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const [weatherBool, setWeatherBool] = React.useState(false)
    const onMapClick = React.useCallback((e) => {
        placeMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);
    const getWeather= (latitude, longitude)=>{
        // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`
        // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ff73536f48ae4d3c3b9179833e630eaf`
        // let weather = props.fetchWeather(url).then((weather)=>{
        props.fetchWeather(latitude, longitude).then((weather)=>{
            if(weatherBool === false){
                console.log("HEORTSODFO!!!")
                console.log(weather.weather.data.weather[0].description)
                // console.log(props.data.weather[0].description)
                return (<div>{weather.weather.data.weather[0].description}</div>)
            }else{
                return 
                <div>not working dude</div>
            }
            
        })
        setWeatherBool(true)

    }
    if(loadError){
        console.log("not loading maps")
        return "Error Loading Maps"
    }
    if (!isLoaded) {
        console.log("loadng map")
        return <div>"Loading Map!"</div>
    }

    return(
        // <div>Map?</div>
        <div>
            <GoogleMap id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={sanFran}
            options= {styles}
            onClick={onMapClick}
            >
                {markers.map((marker) => (
                    <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                        // icon={{
                        //     origin: new window.google.maps.Point(0, 0),
                        //     anchor: new window.google.maps.Point(15, 15),
                        //     scaledSize: new window.google.maps.Size(30, 30),
                        // }}
                    />
                ))}

                {selected ? (
                    <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    // weatherBool = {weatherBool}
                    onCloseClick={() => {
                    setSelected(null);
                    setWeatherBool(true);
                    }}
                    >
                        <div>
                            <h2>
                                We will put post modal here?
                                <p>{!weatherBool ? getWeather(selected.lat, selected.lng): ""}</p>
                                
                                {/* <Post fetchpost={props.fetchPost} lat={selected.lat} lng={selected.lng}/> */}
                            </h2>
                            <p>{formatRelative(selected.time, new Date())}</p>
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </div>
    )
}

// export default Map