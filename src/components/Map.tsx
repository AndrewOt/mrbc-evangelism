import { useEffect, useRef } from "react";

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      new window.google.maps.Map(mapRef.current, {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 4,
      });
    }
  }, []);

  return <div ref={mapRef} id="map" />;
}
