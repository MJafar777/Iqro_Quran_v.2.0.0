import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Comp = () => {
  const apiUrl = 'http://192.168.0.42/ISAPI/AccessControl/AcsEvent?format=json';
  const username = 'admin';
  const password = 'Rua.1996';
  const [data, setData] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const postData = {
    AcsEventCond: {
      searchID: '2',
      searchResultPosition: 20,
      maxResults: 10,
      major: 5,
      minor: 75,
      startTime: '2023-09-13T00:00:00+11:00',
      endTime: '2023-12-13T16:18:47+11:00',
      thermometryUnit: 'celcius',
      currTemperature: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const response = await axios.post(apiUrl, postData, {
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username,
            password,
          },
        });

        setData(response.data);
        console.log('Response:', response.data);
        // Handle the response data as needed
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }
    };

    fetchData(); // Call the function when the component mounts or whenever you want to make the request
  }, [postData]); // Empty dependency array means this effect runs once after the initial render

  return <div>{data}</div>;
};
