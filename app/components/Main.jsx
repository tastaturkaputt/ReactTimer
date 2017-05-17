var React = require('react');
var Nav = require('Nav');

// Stateless functional component
var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <h3>Main.jsx Rendered</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
