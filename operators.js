const axios = require('axios');

axios
    .get('http://localhost:3000/users?id_gte=4')
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });
