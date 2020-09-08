import App from '../../src/components/app.js';

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed



describe('App', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithId,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app;

  beforeEach(function() {
    app = renderIntoDocument(
      <App />
    );
  });



  it('should dtect row win', function() {
    // This test will only works once `App` is refactored into a stateful class component
    // because `renderIntoDocument` does not work with stateless class components
    expect(React.Component.isPrototypeOf(App)).to.be.true;

    var col0 = scryRenderedDOMComponentWithId(app, '0');
    Simulate.click(col0);
    Simulate.click(col0);
    var col1 = scryRenderedDOMComponentWithId(app, '1');
    Simulate.click(col1);
    Simulate.click(col1);
    var col2 = scryRenderedDOMComponentWithId(app, '2');
    Simulate.click(col2);
    Simulate.click(col2);
    var col3 = scryRenderedDOMComponentWithId(app, '3');
    Simulate.click(col3);

    var status = scryRenderedDOMComponentsWithClass(app, 'status');


      expect(status.innerHTML).to.equal('Congratulations!! Red player wins!');

  });
});