/* global google */
import React, { useEffect, useState } from 'react'
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
import { Link, withRouter } from 'react-router-dom';

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
    height: "720px",
    width: "600px",
};
let bool = false;
const myLatLng = { lat: 39.09423597068579, lng: -120.02614425979569 };


export default function Map(props){
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    const [markers, placeMarkers] = React.useState([{ lat: 39.09423597068579, lng: -120.02614425979569, time: new Date() },
    { lat: 37.64794739271973, lng: -122.2829815703125, time: new Date() },
    { lat: 39.05225234813503, lng: -122.8322979765625, time: new Date() }]);
    console.log(markers)
    useEffect(() => {
        if(!bool){

            props.fetchPosts();
        }
        bool = true;
    });
    // markers.push({ lat: 39.09423597068579, lng: -120.02614425979569, time: new Date() })
    // markers.push({ lat: 37.64794739271973, lng: -122.2829815703125, time: new Date() })
    // markers.push({ lat: 39.05225234813503, lng: -122.8322979765625, time: new Date() })
    const [selected, setSelected] = React.useState(null);
    const getWeather = (latitude, longitude) => {
        props.fetchWeather(latitude, longitude)
    }

    // const onMapClick = React.useCallback((e) => {
    //     placeMarkers((current) => [
    //         ...current,
    //         {
    //             lat: e.latLng.lat(),
    //             lng: e.latLng.lng(),
    //             time: new Date(),
    //         },
    //     ]);
    // }, []);
    // console.log(props.posts)
    

    let region1 = {
        lat: 39.09423597068579,
        lng: -120.02614425979569,
        time: new Date(),
        // weather: getWeather(39.09423597068579, -120.02614425979569)
    }
    const locations = [
        { lat: 39.09423597068579, lng: -120.02614425979569 },
        { lat: 37.64794739271973, lng: -122.2829815703125 },
        { lat: 39.05225234813503, lng: -122.8322979765625 },
    ];

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
            // onClick={onMapClick}
            >
                {markers.map((marker) => (
                    <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                            // getWeather(marker.lat, marker.lng)
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
                    // setWeatherBool(true);
                    }}
                    >
                        <div>
                            <h2>
                                We will put post modal here?
                                <p>{selected.lat} {selected.lng}</p>
                                <p>{props.posts[0]._id} </p>
                                <p>{props.posts[0].text} </p>
                                <p>{props.posts[0].date} </p>
                                <Link to={`/api/posts/${props.posts[0]._id}`}> Go to Post </Link>
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