import react, {Component} from 'react';
import Game from './game.js';

class SinglePlayer extends Component {

	state = {
		name1 : "",
		emptyName : false
	}

	updateName = (event) => {
	    var name = event.target.value;
	    this.setState ({
	      name1 : name,
	    })
	}

	onKeyDown = (e) => {
	  var name = this.state.name1;
      // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
      if (e.key === 'Enter') {
      	if(name==="") {
      		this.setState({
      			emptyName:true
      		})
      	}

      	else {
			this.setState({
				emptyName: false,
			})
			e.preventDefault();
	        e.stopPropagation();
			this.props.updateName1(this.state.name1);
			this.props.nameTaken();
			let url = `/game`;
			this.props.history.push(url);
      	}

      }
    }

	render() {
		var {emptyName, name1} = this.state;
		var name = name1 || "Captain";
		return (
			<div>
				<h1>Hello {name}</h1>
				<form>
			      <label htmlFor="name" style={{fontSize:"20px"}}>Name : </label>
			      {emptyName===true &&				      
				      <input
				        type="text"
				        name="Player1"
				        id="p1"
				        value={name1}
				        placeholder={"Enter your name"}
				        onChange={this.updateName} 
				        onKeyDown={this.onKeyDown}
				        class="required"
				      />
				   }
				   {emptyName===false &&
				   		<input
				        type="text"
				        name="Player1"
				        id="p1"
				        value={name1}
				        placeholder={"Enter your name"}
				        onChange={this.updateName} 
				        onKeyDown={this.onKeyDown}			   
				      />
				   }
			    </form>

			</div>

			)
	}
}

export default SinglePlayer