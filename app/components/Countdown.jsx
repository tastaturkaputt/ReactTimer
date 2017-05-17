var React = require('react');
var Clock = require('Clock');

// Stateless functional component
var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

module.exports = Countdown;
