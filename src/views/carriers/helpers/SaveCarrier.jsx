const SaveAccount = async (event, idcliente) => {
	
   const data = {

        "idcliente" : idcliente,
        "operador": event
    }
    console.log("pico pal data", data)
    const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify(data);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw
	};

	

    const resp = await fetch(
		` https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/crearaccount`,
		requestOptions
	);
	const sku = await resp.json();
	
    console.log("PICO", sku)
	return sku
};

export default SaveAccount;
