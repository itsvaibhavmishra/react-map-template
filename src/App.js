import { useState } from "react";
import { Tooltip } from "react-tooltip";

import MapChart from "./components/Map";
import Legend from "./components/Legend";
import { interestData } from "./utils/interestData";

function App() {
  const [content, setContent] = useState("");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FEFEFE",
      }}
    >
      {/* main container */}
      <div
        style={{
          border: "5px solid #EBF1F8",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {/* map container */}
        <div
          style={{
            width: "50em",
            height: "30em",
          }}
        >
          <MapChart setTooltipContent={setContent} />
          <Tooltip anchorId="map" content={content} float />
        </div>

        {/* legend container */}
        <div>
          <Legend countries={interestData} />
        </div>
      </div>
      <p>
        Developed by{" "}
        <a
          href="https://vaibhaw.netlify.app/"
          target="_blank"
          rel="noreferrer"
          style={{
            transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
            cursor: "pointer",
            textDecoration: "none",
            color: "#000",
            fontWeight: "600",
          }}
          onMouseOver={(e) => (e.target.style.color = "#3498db")}
          onMouseOut={(e) => (e.target.style.color = "")}
        >
          Vaibhaw Mishra
        </a>
      </p>
    </div>
  );
}

export default App;
