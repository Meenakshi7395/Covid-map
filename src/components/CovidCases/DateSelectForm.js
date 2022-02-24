import classes from "./DateSelectForm.module.css";
import { useRef } from "react";
function DateSelectForm(props) {
  const inputFromDateRef = useRef();
  const inputToDateRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    var dateRange =
      "?from=" +
      inputFromDateRef.current.value +
      "&to=" +
      inputToDateRef.current.value;
    props.onApply(dateRange);
  }
  return (
    <div
      style={{
        zindex: 1,
        position: "absolute",
        width: 200,
        height: 190,
        left: 20,
        top: 330,
        borderRadius: 6,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        color: "blue",
        padding: "2px",
      }}
    >
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="fromDate">From</label>
          <input
            type="date"
            requiredid="fromDate"
            min="2019-12-01"
            ref={inputFromDateRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="toDate">To</label>
          <input
            type="date"
            requiredid="toDate"
            min="2019-12-01"
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
