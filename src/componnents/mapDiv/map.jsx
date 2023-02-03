import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';

const Map = () => {
    const InitializeMap = (mapContainer) => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFyaXMiLCJhIjoiY2xkb3R1ZTluMHd0djNyb2wyMW40Zm9jaCJ9.9mszJ_0xO1-QQwcjvB_fCg';
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11', 
            center: [-74.5, 40],
            zoom: 9
        });
    };

    return (
        <div ref={InitializeMap} style={{height: '100%', width: '100%'}} />
    );
}

export default Map