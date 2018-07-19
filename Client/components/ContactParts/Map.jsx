import React from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker,} from "react-google-maps";

export const Map = withScriptjs(withGoogleMap(props => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: 40.7942, lng: 43.84528}}
        >
            <Marker
                position={{lat: 40.7942, lng: 43.84528}}
            />
        </GoogleMap>
    );
}));