function DataTableHead(props) {
  return (
    <tr>
      {Object.keys(props.head).map((key) => {
        return <th>{key}</th>;
      })}
    </tr>
  );
}
export default DataTableHead;
