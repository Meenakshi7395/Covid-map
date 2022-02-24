import DataTableHead from "./DataTableHead";
import DataTableRow from "./DataTableRow";
import classes from "./DataTable.module.css";

function DataTable(props) {
  return (
    <table className={classes.datatable}>
      <thead>
        <DataTableHead head={props.data[0]} />
      </thead>
      <tbody>
        {props.data.map((row) => {
          return <DataTableRow row={row} />;
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
