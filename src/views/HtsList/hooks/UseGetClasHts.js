/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import GetClasHts from '../helpers/GetClasHts';

const useGetClasHts = (idcliente) => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetClasHts(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, []);

	//console.log('datos fetch', idcliente);

	return state;
};

export default useGetClasHts;
