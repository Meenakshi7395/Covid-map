import classes from "./Info.module.css";
function GlobalInfo(props) {
  return (
    <div
      style={{
        zindex: 1,
        position: "absolute",
        width: 200,
        height: 280,
        left: 20,
        borderRadius: 6,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        padding: "2px",
        opacity: 1,
      }}
    >
      <div className={classes.content}>
        <h3>Global Info</h3>
        <p
          style={{
            color: "black",
            fontSize: "12px",
            marginTop: "0.5px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {props.global.Date.slice(0, 10)}
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
          {props.global.TotalConfirmed}
        </span>
        <span style={{ color: "black", fontSize: "12px", marginLeft: "15px" }}>
          +{props.global.NewConfirmed}
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
          {props.global.TotalDeaths}
        </span>
        <span style={{ color: "red", fontSize: "12px", marginLeft: "15px" }}>
          +{props.global.NewDeaths}
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
          {props.global.TotalRecovered}
        </span>
        <span style={{ color: "green", fontSize: "12px", marginLeft: "15px" }}>
          +{props.global.NewRecovered}
        </span>

        {/*  <Row>
        <Col width="50">
          <label>New Confirmed</label>
        </Col>
        <Col width="50">
          <label>{props.global.NewConfirmed}</label>
        </Col>
      </Row>
      <Row>
        <Col width="50">
          <label>Total Confirmed</label>
        </Col>
        <Col width="50">
          <label>{props.global.TotalConfirmed}</label>
        </Col>
      </Row>
      <Row>
        <Col width="50">
          <label>New Deaths</label>
        </Col>
        <Col width="50">
          <label>{props.global.NewDeaths}</label>
        </Col>
      </Row>
      <Row>
        <Col width="50">
          <label>Total Deaths</label>
        </Col>
        <Col width="50">
          <label>{props.global.TotalDeaths}</label>
        </Col>
      </Row>
      <Row>
        <Col width="50">
          <label>New Recovered</label>
        </Col>
        <Col width="50">
          <label>{props.global.NewRecovered}</label>
        </Col>
      </Row>
      <Row>
        <Col width="50">
          <label>Total Recovered</label>
        </Col>
        <Col width="50">
          <label>{props.global.TotalRecovered}</label>
        </Col>
      </Row> */}
      </div>
    </div>
  );
}

export default GlobalInfo;
