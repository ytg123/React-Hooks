import React ,{ useCallback,useMemo } from 'react';

import './App.css';

import { connect } from 'react-redux';

import {
	exchangeFromTo,showCitySelector
} from './actions.js';

import Headered from '../common/Header.jsx';

import Journery from './Journery.jsx';

import HighSpeed from './HighSpeed.jsx';

import DepartDate from './DepartDate.jsx';

import Submit from './Submit.jsx';


function App(props){
	
	const onBack = useCallback(() => {
		window.history.back();
	},[]);
	
	const { from ,to ,dispatch} = props;
	
	// const doExchangeFromTo = useCallback(() => {
	// 	dispatch(exchangeFromTo())
	// },[]);
	
	// const doShowCitySelector = useCallback((m) => {
	// 	dispatch(showCitySelector(m))
	// },[]);
	// exchangeFromTo={() => doExchangeFromTo()}
	// showCitySelector={() => doShowCitySelector()}
	const cbs = useMemo(() => {
		return bindActionCreators({
			exchangeFromTo,
			showCitySelector
		},dispatch);
	},[]);
	
	return (
		<>
			<div className="header-wrapper">	
				<Headered title="火车票" onBack={onBack}/>
			</div>
			<form className="form">	
				<Journery 
					from={from} 
					to={to}
					{...cbs}
					/>
				<DepartDate />
				<HighSpeed />
				<Submit />
			</form>
		</>
	
	);
};

const mapState = (state) => ({
	state
});

const mapDispatch = (dispatch) => ({
	dispatch
});
export default connect(mapState,mapDispatch)(App);