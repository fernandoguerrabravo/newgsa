/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import  {GetSeller} from '../helpers/GetSeller';

export const useGetSeller = idcliente => {
	const [state, setState] = useState({
		data: []
	});

	useEffect(() => {
		GetSeller(idcliente).then(imgs => {
			setState({
				data: imgs
			});
		});
	}, [idcliente]);
   
	return state;
};

export default useGetSeller;