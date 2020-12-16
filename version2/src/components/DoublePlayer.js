import react, {Component} from 'react';
import './DoublePlayer.css';
import Game from './game.js';

class DoublePlayer extends Component {
	state = {
	    "name1" : "",
	    "name2" : "",
	    "emptyName1" : false,
	    "emptyName2" : false,
	}

	updateName1 = (event) => {
	    var name = event.target.value;
	    this.setState ({
	      name1 : name,
	    })
	  }

	  updateName2 = (event) => {
	    var name = event.target.value;
	    this.setState ({
	      name2 : name,
	    })
	  }

	onKeyDown = (event) => {
      // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
      if (event.key === 'Enter') {
      	var name1 = this.state.name1;
      	var name2 = this.state.name2;
      	if(name1==="") {
      		this.setState({
      			emptyName1 : true
      		})
      	}
      	else if(name2 === "") {
      		this.setState({
      			emptyName2 : true
      		})
      	}
      	else {
			this.setState({
				emptyName1: false,
				emptyName2: false
			})
	        event.preventDefault();
	        event.stopPropagation();
	        this.props.updateName1(name1);
	        this.props.updateName2(name2);
			this.props.nameTaken();
			let url = `/game`;
			this.props.history.push(url);
	    }
      }
    }

	render() {
		var name1 = this.state.name1;
		var name2 = this.state.name2;
		return (
			<div>
				<h1>Hello Players</h1>
				<form>
			      <label htmlFor="name1" style={{fontSize:"20px"}}>Player1 : </label>
			      {this.state.emptyName1===true &&
				      <input
				        type="text"
				        name="Player1"
				        id="name1"
				        value={name1}
				        placeholder={"Enter your name"}
				        onChange={this.updateName1} 
				        onKeyDown={this.onKeyDown}
				        className="required"				   
				      />
				   }
				   {this.state.emptyName1===false &&
				   		<input
				        type="text"
				        name="Player1"
				        id="name1"
				        value={name1}
				        placeholder={"Enter your name"}
				        onChange={this.updateName1} 
				        onKeyDown={this.onKeyDown}				   
				      />

				   }

			      <br className="break"/>

			      <label htmlFor="name2" style={{fontSize:"20px"}}>Player2 : </label>
			      {this.state.emptyName2===true &&
				      <input
				        type="text"
				        name="Player1"
				        id="name2"
				        value={name2}
				        placeholder={"Enter your name"}
				        onChange={this.updateName2} 
				        onKeyDown={this.onKeyDown}
				        className="required"
				      />
				  }

				  {this.state.emptyName2===false &&
				      <input
				        type="text"
				        name="Player1"
				        id="name2"
				        value={name2}
				        placeholder={"Enter your name"}
				        onChange={this.updateName2} 
				        onKeyDown={this.onKeyDown}
				      />
				  }
			    </form>

			</div>

			)
	}
}

export default DoublePlayer