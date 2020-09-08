
var Rows = ({ row, onColClick }) => {
  return (
    <tr>
      {row.map((col, i) => <Col value={col} index={i} onColClick={onColClick} />)}
    </tr>
  );
};


var Col = ({ value, index, onColClick }) => {
  var color = 'empty';
  if (value === 'red') {
    color = 'red';
  } else if (value === 'yellow') {
    color = 'yellow';
  }

  return (
    <td>
      <div className="col" onClick={() => {onColClick(index)}}>
        <div className={color} id={index}></div>
      </div>
    </td>
  );
};

export default Rows;

