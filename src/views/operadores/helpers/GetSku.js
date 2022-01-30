/* eslint-disable import/prefer-default-export */
export const GetSku = async (idcliente) => {
	
	var raw = JSON.stringify({
		id_cliente: "amazon|amzn1.account.AHG4S7Q35E4KB5DZGK6BENXDZ6IQ6"
	  });
	const requestOptions = {
		method: 'POST',
		
		headers: {
			'Content-Type': 'application/json'
		},
		body: raw,
		redirect: 'follow',
		
	};

	const resp = await fetch(`https://4clo6vn4y4.execute-api.us-east-1.amazonaws.com/default/shippo-get-account-byseller`, requestOptions);
	const sku = await resp.json();

	console.log('perro', sku);
	return sku;
};
