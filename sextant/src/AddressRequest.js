import React, { useState, useEffect } from 'react';

const AddressRequest = ({ protocol }) => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.ipify.org?format=${protocol}`);
        const data = await response.text();
        setAddress(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [protocol]);

  return (
    <div>
      {address ? (
        <p>My public {protocol} address is: {address}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AddressRequest;
