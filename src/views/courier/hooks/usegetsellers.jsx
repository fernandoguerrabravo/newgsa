/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { GetSeller } from '../helpers/GetSeller';


function UseGetSellers(id_cliente) {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetSeller(id_cliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [id_cliente]);

	return state;
}

export default UseGetSellers;
