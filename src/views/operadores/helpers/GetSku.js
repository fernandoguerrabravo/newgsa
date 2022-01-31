/* eslint-disable import/prefer-default-export */
export const GetSku = async (idcliente) => {
	
	var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id_cliente": idcliente
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

var respuesta = await fetch("https://03k8qgnms8.execute-api.us-east-1.amazonaws.com/dev/getoperadores", requestOptions)
var res = respuesta.json()
console.log("perro", res)
return res;
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
};
