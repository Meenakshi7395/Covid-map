import classes from "./DataTable.module.css";

function Table(props) {
  return (
    <>
      <h3>{props.data[0]["Country"]}</h3>
      <table className={classes.datatable}>
        <thead>
          <td>Date</td>
          <td>Confirmed</td>
          <td>Deaths</td>
          <td>Recovered</td>
          <td>Active</td>
        </thead>
        <tbody>
          {props.data.map((row) => {
            return (
              <tr>
                <td>{row["Date"].slice(0, 10)}</td>
                <td>{row["Confirmed"]}</td>
                <td>{row["Deaths"]}</td>
                <td>{row["Recovered"]}</td>
                <td>{row["Active"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
