/* eslint-disable import/prefer-default-export */
/* eslint-disable import/prefer-default-export */

const GetCarrier = async (idcliente) => {
	
	console.log("PICOPICOPICO", idcliente)

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({id_cliente: idcliente})
	};

	const resp = await fetch(`https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getcarrier`, requestOptions);
	const sku = await resp.json();

	return sku;
};


export default GetCarrier
