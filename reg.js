const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username cannot be blank');
    } else if(usernameValue.length <= 3) {
        setError(username, 'Put your full name as the username');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be blank');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else if(!/[a-z]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one lowercase letter');
    } else if(!/[A-Z]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one uppercase letter');
    } else if(!/[0-9]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one number');
    } else if(!/[!@#$%^&*_]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one special character');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if(password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

}

function submitForm(e) {
    e.preventDefault();
 
    var myform =    document.getElementById("form");
  
    var payload = {
        "nama" : myform.querySelector("#username").value,
        "email" : myform.querySelector("#email").value,
        "password" : myform.querySelector("#password").value,

    }
    console.log(payload);
    fetch("https://ets-pemrograman-web-f.cyclic.app/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error("Register failed");
            }
            return response.json();
        })
        .then((resp) => {
            alert("Register berhasil");
            console.log("resp from server ", resp);
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error)
            console.log("error ", error);
        });
}

var myform = document.getElementById("form");

myform.addEventListener("submit", submitForm);
