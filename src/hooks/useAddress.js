import { useState, useEffect } from "react";
import axios from "axios";

const useAddress = (address) => {
    const [map,setMap] = useState({})
    const API = `http://api.positionstack.com/v1/forward?access_key=34aac0cf2475977b516a3a159b573955&query=${address}`;

    useEffect(async () => {
        const response = await axios.get(API);
        console.log(response.data.data[0])
        setMap({
            "lat": response.data.data[0].latitude,
            "lng": response.data.data[0].longitude
        })
        console.log(map)
    }, [])

    return map;
}

export default useAddress;