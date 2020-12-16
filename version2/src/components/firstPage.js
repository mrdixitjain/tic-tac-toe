import React, {Component} from 'react'

class WelcomePage extends Component {
	state = {
		"name1" : "player1",
		"name2" : "player2"
	}


	changeName1 = (event) => {
		var name = event.target.value;
		this.setState({name1 : name})
	}
	changeName2 = (event) => {
		var name = event.target.value;
		this.setState({name2 : name})
	}

	render() {
	  const { name1, name2 } = this.state;
	  console.log(name1)
	  console.log(name2)

	  return (
	    <form>
	      <label htmlFor="name">Player1</label>
	      <input
	        type="text"
	        name="Player1"
	        id="p1"
	        value={name1}
	        onChange={this.changeName1} />
	      <label htmlFor="job">Player2</label>
	      <input
	        type="text"
	        name="Player2"
	        id="p2"
	        value={name2}
	        onChange={this.changeName2} />
	    </form>
	  );
  }
}

export default WelcomePage
