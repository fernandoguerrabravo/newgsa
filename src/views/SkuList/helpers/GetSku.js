/* eslint-disable import/prefer-default-export */
export const GetSku = async idcliente => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id_cliente: idcliente })
	};

	const resp = await fetch(`https://vwat0hqjt0.execute-api.us-east-1.amazonaws.com/dev/getsku`, requestOptions);
	const sku = await resp.json();

	console.log('perro', sku);
	return sku;
};
