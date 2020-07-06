const axios = require('axios');

axios
    .post('http://localhost:3000/users', {
        id: 7,
        first_name: 'Natka',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com',
    })
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });
