const GetShippo = async datosfinales => {
	
	
	console.log("enviar a la api", datosfinales)
	const requestOptions = {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json'
		},

		body: JSON.stringify(datosfinales)
	};

	const resp = await fetch('https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/shipposimple', requestOptions);
	const shippo = await resp.json();
	console.log('shipooooo', shippo);
	return shippo;
};

export default GetShippo;
