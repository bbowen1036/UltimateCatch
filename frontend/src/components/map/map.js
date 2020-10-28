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

const myLatLng = { lat: 39.09423597068579, lng: -120.02614425979569 };

export default function Map(props){
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    const [markers, placeMarkers] = React.useState([]);
    console.log(markers)
    const [selected, setSelected] = React.useState(null);
    // new google.maps.Marker({
    //     position: myLatLng,
    //     map,
    //     title: "Hello World!",
    // });
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
    // placeMarker( () => {
    //     {
    //         lat: 39.09423597068579,
    //         lng: -120.02614425979569
    //     }
    // })
    placeMarkers((current) => [
        ...current,
        {
            lat: 39.09423597068579,
            lng: -120.02614425979569 ,
            time: new Date(),
        },
    ]);
    const getWeather= (latitude, longitude)=>{
        // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ff73536f48ae4d3c3b9179833e630eaf`
        props.fetchWeather(latitude, longitude)
            // .then((weather)=>{
            //     if(weatherBool === false){
            //         console.log("HEORTSODFO!!!")
            //         console.log(weather.weather.data.weather[0].description)
            //         setWeatherBool(true)
            //         console.log("weatherBool" + weatherBool)
            //         if(props.weather.data){

            //             console.log(props.weather.data.weather[0].description)
            //         }
            //         return (<div>{weather.weather.data.weather[0].description}</div>)
            //     }
            // })
    }
    if(loadError){
        return "Error Loading Maps"
    }   
    if (!isLoaded) {
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
                                <p>{selected.lat} {selected.lng}</p>
                                {/* <p>{props.weather.bool.weather[0].description ? <div>{props.weather.data.weather[0].description}</div> : getWeather(selected.lat,selected.lng)}</p> */}
                                
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