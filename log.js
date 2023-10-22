function auth(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email == "admin@gmail.com" && password == "admin"){
        alert("Login Successfull");
        window.location.assign("suit.html");
        return false;
    }
    else{ 
        alert("Login Failed");
        return;
    }
}
const url = "https://ets-pemrograman-web-f.cyclic.app/users";



// // var raw = "{\n    \"email\": \"fianafan@gmail.com\",\n    \"password\": \"Fianafan14!\"\n}";

// document.getElementById('form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get the email and password values
//     const email = document.querySelector('input[type="email"]').value;
//     const password = document.querySelector('input[type="password"]').value;

//     // Ganti dengan URL atau endpoint API Postman yang sesuai
//     const apiEndpoint = 'https://ets-pemrograman-web-f.cyclic.app/users';

//     // Fungsi untuk membuat permintaan GET
//     async function fetchData() {
//         try {
//             const response = await fetch(apiEndpoint);
//             const data = await response.json();

//             // Lakukan sesuatu dengan data yang diterima
//             console.log('Data from API:', data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     // Panggil fungsi saat halaman dimuat
//     fetchData();

// });

    // // Define the API endpoint
    // const apiUrl = 'https://ets-pemrograman-web-f.cyclic.app/users';

    // // Perform a fetch to the Postman API
    // fetch(apiUrl, {
    //     method: 'GET', // Or 'GET' if it's a GET request
    //     body: raw,
    // })
    //     .then(response => response.text())
    //     .then(data => {
    //         // Handle the API response data here
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         // Handle errors
    //         console.error('Error:', error);
    //     });



// var requestOptions = {
//   method: 'POST',
//   body: raw,
//   redirect: 'follow'
// };

// fetch("localhost:9001/users/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));