var axios = require('axios');

const GetOperadores = async (idcliente) => {

var cliente = String(idcliente)
console.log(cliente)
var data = JSON.stringify({id_cliente: cliente });

var config = {
  method: 'post',
  url: 'https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getcarrier',
  headers: { 
    'Content-Type': 'text/plain'
  },
  data : data
};

var response = await axios(config)
console.log("picooo", response.data)
  return response.data;


}
export default GetOperadores