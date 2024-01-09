import colorCalculator from "../utils/colorCalculator";

const Legend = ({ countries }) => {
  // Set to keep track of unique country names
  const uniqueNames = new Set();

  return (
    <div style={{ padding: "1em", display: "flex", flexDirection: "column" }}>
      {countries.map((country) => {
        // Check if the country name is already processed
        if (!uniqueNames.has(country.name)) {
          // Add the country name to the set
          uniqueNames.add(country.name);

          return (
            <div
              key={country.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #EBF1F8",
                marginBottom: "0.5em",
              }}
            >
              {/* Country Name */}
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#15314E",
                  marginRight: "5em",
                }}
              >
                {country.name}
              </p>

              {/* Interest Bar and % */}
              <div
                style={{
                  width: "30em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                {/* Bar container */}
                <div
                  style={{
                    width: "300px",
                    height: "12px",
                    backgroundColor: "#F6F6F6",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginRight: "-3em",
                  }}
                >
                  {/* Bar progress */}
                  <div
                    style={{
                      backgroundColor: colorCalculator(country.interest),
                      width: country.interest,
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#15314E",
                  }}
                >
                  {country.interest}
                </p>
              </div>
            </div>
          );
        }

        return null; // Return null for duplicate country names
      })}
    </div>
  );
};

export default Legend;
