const axios = require('axios');

axios
    .get('http://localhost:3000/users?_sort=last_name&_order=asc')
    .then((resp, data) => {
        data = resp.data;
        data.forEach((e) => {
            console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
