import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import colorCalculator from "../utils/colorCalculator";
import { interestData } from "../utils/interestData";

const geoUrl = "/features.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <div id="map">
      <ComposableMap
        projection="geoMercator"
        data-tip=""
        onMouseDown={(e) => e.preventDefault()}
        projectionConfig={{
          scale: 100,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // Find the corresponding country data in interestData
              const countryData = interestData?.find(
                (data) => data.name === geo.properties.name
              );

              // Use the interest from interestData or default to 0%
              const interest = countryData ? countryData.interest : "0%";

              // Calculate the color based on the interest
              const fill = colorCalculator(interest);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name} - ${interest}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    hover: {
                      stroke: "#3374B9",
                      outline: "none",
                    },
                    pressed: {
                      stroke: "#3374B9", //"#62c8f0",
                      outline: "none",
                    },
                    default: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
