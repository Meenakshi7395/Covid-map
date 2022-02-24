function DataTableRow(props) {
  return (
    <tr>
      {Object.keys(props.row).map((key) => {
        return <td>{props.row[key]}</td>;
      })}
    </tr>
  );
}

export default DataTableRow;
