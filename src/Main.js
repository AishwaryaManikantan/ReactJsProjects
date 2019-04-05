import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';
import ProgressBars from './ProgressBars';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons:[],
      bars:[],
      limit:0,
      currentBar:0
    };
  }
componentDidMount(){
  
   fetch('http://pb-api.herokuapp.com/bars')
      .then(response => response.json())
      .then(data => this.setState(
        { buttons:data.buttons,
          bars: data.bars,
          limit: data.limit
         }));

  }

  handleClick(val) {
    const currentBarIndex=this.state.currentBar;
    var currentBarValue=this.state.bars[currentBarIndex];
    var copy=this.state.bars;
    copy[currentBarIndex]=parseInt(currentBarValue)+val;
   this.setState({
     bars:copy
    });
  }

createButtons(){
 
  let len=this.state.buttons.length;
  var arr=[]
      for (let i=0; i<len ; i++){
        arr.push(
      <Buttons
          buttonValue={this.state.buttons[i]}
          onClick={() => this.handleClick(this.state.buttons[i])}
          />
          );
      }  
      return arr;
   
}
createBars(){
  let len = this.state.bars.length;
   var arr=[]
    for (let i=0; i<len ; i++){
          arr.push(
        <Tab eventKey={""+i} title={"bar"+i} >
          <ProgressBars 
         progress={this.state.bars[i]} 
          limit={this.state.limit} />
        </Tab>
        );
    }   
  return arr;
}
render() {
    return (
      <div className="math">  
      Limit is {this.state.limit} 
           <Container>
            {this.createButtons()}
             <Tabs defaultActiveKey="0" onSelect={key => this.setState({ currentBar:key })}>
             {this.createBars()}
              </Tabs>
           </Container>
        </div>
        
    );
  }
}



export default Main;
