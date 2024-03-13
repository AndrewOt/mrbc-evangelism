import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "",
  version: "weekly",
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 4,
};

export function Map() {
  const mapAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapAreaRef.current) {
      loader
        .importLibrary("maps")
        .then(({ Map }) => {
          new Map(mapAreaRef.current!, mapOptions);
        })
        .catch((e) => console.log("uh oh", e));
    }
  }, [mapAreaRef]);

  return <Box ref={mapAreaRef} sx={{ height: "100%" }}></Box>;
}
