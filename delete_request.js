// const axios = require('axios');

// axios
//     .delete('http://localhost:3000/users/6/')
//     .then((resp) => {
//         console.log(resp.data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const axios = require('axios');

axios
    .delete('http://localhost:3000/users')
    .then((resp) => {
        resp.data.filter((obj) => obj.emailValue);
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });
