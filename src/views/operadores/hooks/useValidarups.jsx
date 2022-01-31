/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import SaveAccount from '../helpers/SaveCarrier';


export const UseValidarups = ({ups, idcliente}) => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		SaveAccount({ups,idcliente}).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [idcliente, ups]);
    console.log("el state", state)
	return state;
};
