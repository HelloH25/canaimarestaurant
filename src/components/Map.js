import GoogleMaps from "simple-react-google-maps"
import React from 'react'
import env from "react-dotenv"
    
export const Map = () => {
    
    return (
        <div style={Style}>
            <GoogleMaps
              apiKey={env.KEY_MAP}
              style={{height: "400px", width: "100%"}}
              zoom={15}
              center={{lat: 4.8520797138768526, lng: -72.89097594547577}}
              markers={{lat: 4.8520797138768526, lng: -72.89097594547577}}
              />
        </div>
    )
}

const Style = {
    position:"inherit",
    border: "solid",
}
export default Map 