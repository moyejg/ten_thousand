import React from 'react';
import Die1 from './Dice/Die1';
import Die2 from './Dice/Die2';
import Die3 from './Dice/Die3';
import Die4 from './Dice/Die4';
import Die5 from './Dice/Die5';
import Die6 from './Dice/Die6';
import './RollField.css';
import Aux from './Auxiliary.js';




const rollDice = () => {
let dice = []
  for (let i = 6; i > dice.length; +-i) {
    dice.push(1 + Math.floor(Math.random()*6))
  }
  dice.forEach((element) => {
    if (dice(element) === 1) {
      return <Die1 />
    }
    else if (dice(element) === 2) {
      return <Die2 />
    }
    else if (dice(element) === 3) {
      return <Die3 />
    }
    else if (dice(element) === 4) {
      return <Die4 />
    }
    else if (dice(element) === 5) {
      return <Die5 />
    }
    else {
      return <Die6 />
    }
  })
}

console.log(rollDice())



const rollField = () => {
	return (
		<Aux>
			<div className="RollField">
				{rollDice()}
			</div>
			<button>Roll</button>
		</Aux>
	)
}

export default rollField;