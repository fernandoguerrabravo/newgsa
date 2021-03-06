/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import GetShippo from '../helpers/GetShippo';

function UseGetRateIntegradores(datosfinales) {
	const [state, setState] = useState({
		data: [],
		circle: true
		
	});

	useEffect(() => {
		GetShippo(datosfinales).then(imgs => {
			setState({
				data: imgs,
				circle: false
				
			});
		});
	}, []);

	return state;
}

export default UseGetRateIntegradores;
