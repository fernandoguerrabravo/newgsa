export const GetSeller = async idcliente => {
	
    

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id_cliente: idcliente })
	};

	const resp = await fetch(`https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getseller`, requestOptions);
	const sku = await resp.json();
//	console.log('perro', sku);
	return sku;

};

