var Rows = ({
  row,
  onColClick
}) => {
  return React.createElement("tr", null, row.map((col, i) => React.createElement(Col, {
    value: col,
    index: i,
    onColClick: onColClick
  })));
};

var Col = ({
  value,
  index,
  onColClick
}) => {
  var color = 'empty';

  if (value === 'red') {
    color = 'red';
  } else if (value === 'yellow') {
    color = 'yellow';
  }

  return React.createElement("td", null, React.createElement("div", {
    className: "col",
    onClick: () => {
      onColClick(index);
    }
  }, React.createElement("div", {
    className: color,
    id: index
  })));
};

export default Rows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yb3dzLmpzeCJdLCJuYW1lcyI6WyJSb3dzIiwicm93Iiwib25Db2xDbGljayIsIm1hcCIsImNvbCIsImkiLCJDb2wiLCJ2YWx1ZSIsImluZGV4IiwiY29sb3IiXSwibWFwcGluZ3MiOiJBQUNBLElBQUlBLElBQUksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLEdBQUY7QUFBT0MsRUFBQUE7QUFBUCxDQUFELEtBQXlCO0FBQ2xDLFNBQ0UsZ0NBQ0dELEdBQUcsQ0FBQ0UsR0FBSixDQUFRLENBQUNDLEdBQUQsRUFBTUMsQ0FBTixLQUFZLG9CQUFDLEdBQUQ7QUFBSyxJQUFBLEtBQUssRUFBRUQsR0FBWjtBQUFpQixJQUFBLEtBQUssRUFBRUMsQ0FBeEI7QUFBMkIsSUFBQSxVQUFVLEVBQUVIO0FBQXZDLElBQXBCLENBREgsQ0FERjtBQUtELENBTkQ7O0FBU0EsSUFBSUksR0FBRyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsS0FBRjtBQUFTQyxFQUFBQSxLQUFUO0FBQWdCTixFQUFBQTtBQUFoQixDQUFELEtBQWtDO0FBQzFDLE1BQUlPLEtBQUssR0FBRyxPQUFaOztBQUNBLE1BQUlGLEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ25CRSxJQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNELEdBRkQsTUFFTyxJQUFJRixLQUFLLEtBQUssUUFBZCxFQUF3QjtBQUM3QkUsSUFBQUEsS0FBSyxHQUFHLFFBQVI7QUFDRDs7QUFFRCxTQUNFLGdDQUNFO0FBQUssSUFBQSxTQUFTLEVBQUMsS0FBZjtBQUFxQixJQUFBLE9BQU8sRUFBRSxNQUFNO0FBQUNQLE1BQUFBLFVBQVUsQ0FBQ00sS0FBRCxDQUFWO0FBQWtCO0FBQXZELEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUMsS0FBaEI7QUFBdUIsSUFBQSxFQUFFLEVBQUVEO0FBQTNCLElBREYsQ0FERixDQURGO0FBT0QsQ0FmRDs7QUFpQkEsZUFBZVIsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgUm93cyA9ICh7IHJvdywgb25Db2xDbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAge3Jvdy5tYXAoKGNvbCwgaSkgPT4gPENvbCB2YWx1ZT17Y29sfSBpbmRleD17aX0gb25Db2xDbGljaz17b25Db2xDbGlja30gLz4pfVxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbnZhciBDb2wgPSAoeyB2YWx1ZSwgaW5kZXgsIG9uQ29sQ2xpY2sgfSkgPT4ge1xyXG4gIHZhciBjb2xvciA9ICdlbXB0eSc7XHJcbiAgaWYgKHZhbHVlID09PSAncmVkJykge1xyXG4gICAgY29sb3IgPSAncmVkJztcclxuICB9IGVsc2UgaWYgKHZhbHVlID09PSAneWVsbG93Jykge1xyXG4gICAgY29sb3IgPSAneWVsbG93JztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgb25DbGljaz17KCkgPT4ge29uQ29sQ2xpY2soaW5kZXgpfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbG9yfSBpZD17aW5kZXh9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvdGQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvd3M7XHJcblxyXG4iXX0=