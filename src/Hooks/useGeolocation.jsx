import { useState, useEffect } from 'react';

function useGeolocation() {
  const [place, setPlace] = useState('Bangladesh');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLocation() {
      try {
        const position = await new Promise((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => resolve(position.coords),
              error => reject(error)
            );
          } else {
            reject(new Error('Geolocation is not supported'));
          }
        });

        const placeName = await getPlaceName(position.latitude, position.longitude);
        setPlace(placeName);
      } catch (error) {
        setError(error.message);
      }
    }

    getLocation();
  }, []);

  async function getPlaceName(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return { place, error };
}

export default useGeolocation;
