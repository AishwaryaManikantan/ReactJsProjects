import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class Buttons extends React.Component {
  renderButton(buttonValue) {
    return (
    <Button variant="success" size="sm" onClick={() => this.props.onClick()}>{buttonValue}
    </Button>
    );
  }

  render() {
    return (
    <div>

      {this.renderButton(this.props.buttonValue)}
      
      </div>

    );
  }
}
export default Buttons;