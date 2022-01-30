import { useState, useEffect } from 'react';
import  GetOperadores  from '../helpers/GetOperadores';


export const useGetOperadores = (idcliente) => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetOperadores(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [idcliente]);

	return state;
};
