import React from "react";
import './Journery.css';
import switchImg from './imgs/switch.svg';
export default function Journery(props){
	const {
		from,
		to,
		exchangeFromTo,
		showCitySelector
		
	} = props;
	
	
	
	return (
	
		<div className="journery">
			<div className="journery-station"
				onClick={() => showCItySelector(true)}
			>
				<input 
					type='text'
					readOnly
					name="from"
					value={from}
					className="journery-input journery-from"
				
				/>
			</div>
			<div className="journery-switch" onClick={() => exchangeFromTo()}>
				<img src={switchImg} width="70" height="40" alt="switch"/>
			</div>
			<div className="journery-station"
				onClick={() => showCItySelector(false)}
			>
				<input
					type='text'
					readOnly
					name="to"
					value={to}
					className="journery-input journery-to"
				
				/>
			</div>
		</div>
	)
}