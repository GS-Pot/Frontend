import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URI } from "../../Constants/apiUrl";
import toast from "react-hot-toast";

const Locationcomponent = () => {
    const [location, setLocation] = useState({});


    useEffect(() => {
        const getLocation = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        setLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        });
                    },
                    () => console.error("Error: Geolocation service failed.")
                );
            } else {
                console.error("Error: Your browser does not support geolocation.");
            }
        };

        getLocation();
        axios.get(`${API_URI}/crops/fatchall`).then((res) => {
            console.log(res.data);

        });
        const data = {
            lat: location.lat,
            lng: location.lng
        };

        axios
            .post(`${API_URI}/crops/`, data)
            .then((res) => {
                console.log(res.data);
                // setUser(res.data.data)
                toast.success(`Login Successful`);
                // navigate('/')
            })
            .catch((err) => {
                console.log(err);
                toast.error(`Login Failed`);
            });
    }, []);

    return (
        <div>
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lng}</p>
        </div>
    );
};

export default Locationcomponent;

// import React, { useState, useEffect } from "react";

// const Locationcomponent = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch("https://services.india.gov.in/feed/rss?cat_id=12&ln=en");
//             const text = await response.text();
//             const parser = new DOMParser();
//             const xml = parser.parseFromString(text, "text/xml");
//             setData(xml);
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             {data ? (
//                 <ul>
//                     {Array.from(data.getElementsByTagName("item")).map((item, index) => (
//                         <li key={index}>
//                             <h2>{item.getElementsByTagName("title")[0].textContent}</h2>
//                             <p>{item.getElementsByTagName("description")[0].textContent}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading data...</p>
//             )}
//         </div>
//     );
// };

// export default Locationcomponent;
