const GetZipMx = async event => {
	
    console.log("que entra", event)
    
    const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({"zipcode": event})
	};

	const resp = await fetch(`https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getzip`, requestOptions);
	const sku = await resp.json();
	
    console.log("respuesta zip", sku)
	return sku;
};

export default GetZipMx;