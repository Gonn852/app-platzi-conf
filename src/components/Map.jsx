import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map = ({point}) => {
    const mapContainerStyle = {
        height: "50vh",
        width: "100%"
    }

    return(
        <LoadScript googleMapsApiKey='AIzaSyAa1-VmZb02XOWbxL4eZaDrU9BrV6qddeA'>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={9} center={point} >
                <Marker position={point}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;