import { useEffect, useState } from "react";
import classes from "./Map.module.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// topojson
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// function for giving color to be used in heat map
const colorScale = scaleLinear()
  .domain([0, 10000000])
  .range(["#33FF92", "#FF3333"]);

function Map(props) {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  // store the state of selected country
  const [selectedCountry, setSelectedCountry] = useState({
    Country: "",
    Slug: "",
    ISO2: "",
  });

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function onSelectHandler(country, countryInfo) {
    // if selected country is clicked again , deselect it.
    if (selectedCountry.Slug == country.Slug) {
      setSelectedCountry({ Country: "", Slug: "", ISO2: "" });
    } else {
      setSelectedCountry(country);
      props.onCountrySelect(country, countryInfo);
    }
  }
  return (
    <div style={{ width: "95vw", height: "90vh" }}>
      <ComposableMap
        width={900}
        height={400}
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, index) => {
                // make an object {"Country:","Slug:","ISO2"} to get Slug for each country when selected
                const country = props.countries.find(
                  (s) => s.ISO2 === geo.properties.ISO_A2
                );
                // get the country info from the summary
                const countryInfo = props.countriesSummary.find(
                  (s) => s.CountryCode === geo.properties.ISO_A2
                );
                //console.log(countryInfo);
                //console.log(geo);
                return (
                  <Geography
                    key={index}
                    geography={geo}
                    stroke={"#333"}
                    strokeWidth={0.75}
                    onClick={() => {
                      onSelectHandler(country, countryInfo);
                    }}
                    style={{
                      default: {
                        fill:
                          geo.properties.ISO_A2 === selectedCountry.ISO2
                            ? "#1E90FF"
                            : colorScale(
                                countryInfo === undefined
                                  ? "#000000"
                                  : countryInfo.TotalConfirmed
                              ),
                        outline: "none",
                      },
                      hover: {
                        fill: "#1E90FF",
                        outline: "none",
                        transition: "all 250ms",
                      },
                    }}
                  ></Geography>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default Map;
