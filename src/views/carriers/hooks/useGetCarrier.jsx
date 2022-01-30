/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { GetCarrier } from '../helpers/GetCarrier';


export const useGetCarrier = (idcliente) => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetCarrier(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [idcliente]);
    
	console.log("PICOOOODEL PICOO", state)
	return state;
};

export default useGetCarrier;