import React, {useState, useEffect} from 'react'
import axios from 'axios';

function User() {
const [data, setData] = useState([]);


useEffect(() => {
  axios.get("http://localhost:9000/users")
    .then(response => {
      // Assuming response.data is an array of objects with avatarImg property
      // Update this based on your actual response structure
      if (response.data && response.data.length > 2) {
        setData(response.data[2].avatarImg);
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}, []); 

  return (
    <div>
      <img src={`http://localhost:9000/uploads/${data}`} />
    </div>
  )
}

export default User