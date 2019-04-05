import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

class ProgressBars extends React.Component {
  renderProgressBar() {
    if(this.props.progress >this.props.limit)
    { return (
       <ProgressBar striped variant="danger" now={this.props.progress} label={this.props.progress} />
       );
}
    if(this.props.progress <1){
      return (
      <ProgressBar striped variant="warning" now={this.props.progress} label={this.props.progress} />
      );
    }else{
      return (
      <ProgressBar striped variant="info" now={this.props.progress} label={this.props.progress} />
      );
    }
    
  }

  render() {
    return (
      <div>
        {this.renderProgressBar()}
      </div>
    );
  }
}
export default ProgressBars;