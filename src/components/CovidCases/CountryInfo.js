import classes from "./Info.module.css";

function CountryInfo(props) {
  console.log();
  return (
    <div
      style={{
        zindex: 1,
        position: "absolute",
        width: 200,
        height: 280,
        right: 20,
        borderRadius: 6,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        padding: "2px",
        opacity: 1,
      }}
    >
      <div className={classes.content}>
        {Object.keys(props.selectedCountry).length != 0 ? (
          <>
            <h3>{props.selectedCountry.Country}</h3>
            <p
              style={{
                color: "black",
                fontSize: "12px",
                marginTop: "0.5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {props.selectedCountry.Date.slice(0, 10)}
            </p>
            <p
              style={{
                color: "black",
                fontSize: "12px",
                margin: "2px",
                textAlign: "left",
              }}
            >
              Confirmed
            </p>
            <span
              style={{
                color: "black",
                fontSize: "20px",
              }}
            >
              {props.selectedCountry.TotalConfirmed}
            </span>
            <span
              style={{ color: "black", fontSize: "12px", marginLeft: "15px" }}
            >
              +{props.selectedCountry.NewConfirmed}
            </span>
            <p
              style={{
                color: "black",
                fontSize: "12px",
                margin: "2px",
                textAlign: "left",
              }}
            >
              Deaths
            </p>
            <span
              style={{
                color: "black",
                fontSize: "20px",
              }}
            >
              {props.selectedCountry.TotalDeaths}
            </span>
            <span
              style={{ color: "red", fontSize: "12px", marginLeft: "15px" }}
            >
              +{props.selectedCountry.NewDeaths}
            </span>
            <p
              style={{
                color: "black",
                fontSize: "12px",
                margin: "2px",
                textAlign: "left",
              }}
            >
              Recovered
            </p>
            <span
              style={{
                color: "green",
                fontSize: "20px",
              }}
            >
              {props.selectedCountry.TotalRecovered}
            </span>
            <span
              style={{ color: "green", fontSize: "12px", marginLeft: "15px" }}
            >
              +{props.selectedCountry.NewRecovered}
            </span>{" "}
          </>
        ) : (
          <p
            style={{
              color: "black",
              fontSize: "12px",
              margin: "2px",
              textAlign: "left",
            }}
          >
            Select a country to see it's info
          </p>
        )}
      </div>
    </div>
  );
}

export default CountryInfo;
