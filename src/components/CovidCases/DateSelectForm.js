import classes from "./DateSelectForm.module.css";
import { useRef } from "react";
function DateSelectForm(props) {
  const inputFromDateRef = useRef();
  const inputToDateRef = useRef();
  const inputChoiceRef = useRef();
  let today = new Date().toISOString().slice(0, 10);

  function submitHandler(event) {
    event.preventDefault();

    var dateRange =
      "from=" +
      inputFromDateRef.current.value +
      "T00:00:00Z&to=" +
      inputToDateRef.current.value +
      "T00:00:00Z";
    var dateChoice = inputChoiceRef.current.value;
    props.onApply(dateRange, dateChoice);
  }
  return (
    <div
      style={{
        zindex: 1,
        position: "absolute",
        width: 200,
        height: 220,
        left: 20,
        top: 330,
        borderRadius: 6,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        color: "black",
        padding: "2px",
      }}
    >
      <form className={classes.form} onSubmit={submitHandler}>
        <div
          style={{ fontSize: "15px", textAlign: "center", marginBottom: "5px" }}
        >
          <input
            type="radio"
            value="Today"
            name="choice"
            checked
            ref={inputChoiceRef}
          />
          Today
          <input
            type="radio"
            value="Range"
            name="choice"
            ref={inputChoiceRef}
          />
          Date Range
        </div>
        <div className={classes.control}>
          <label htmlFor="fromDate">From</label>
          <input
            type="date"
            requiredid="fromDate"
            min="2019-12-01"
            max={today}
            ref={inputFromDateRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="toDate">To</label>
          <input
            type="date"
            requiredid="toDate"
            min="2019-12-01"
            max={today}
            ref={inputToDateRef}
          ></input>
        </div>

        <div className={classes.actions}>
          <button type="submit">Apply</button>
        </div>
      </form>
    </div>
  );
}

export default DateSelectForm;
