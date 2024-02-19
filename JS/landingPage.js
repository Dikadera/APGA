const headers = document.querySelectorAll(".header");
const contents = document.querySelectorAll(".content");

    headers.forEach((header, i) => {
        header.addEventListener("click", () => {
            contents.forEach((content, j) => {
                if (i === j) {
                    content.style.display = content.style.display === "block" ? "none" : "block";
                } else {
                    content.style.display = "none";
                }
            });
        });
    });


// SIGN UP

// document.addEventListener("DOMContentLoaded", function() {
//     const registration = document.querySelector('registration');
//     registration.addEventListener('submit', function(event){
//         event.preventDefault(); 
//         console.log("submitted");
//         const useremail = document.getElementById('email').value
//         const userpassword = document.getElementById('password').value

//         console.log(useremail, userpassword);
//         const existingUsers = JSON.parse(localStorage.getItem("users"))  || [];
//         console.log(existingUsers)
        
//         const userExist = existingUsers.some((useremail) => useremail.email === email);
//         console.log(userExist);

//         if (userExist) {
//             alert ('Email already Exists');
//             return;
//         }
//         //add new user 
//         const newUser = {useremail, userpassword};
//         existingUsers.push(newUser);
//         //update local storage
//         localStorage.setItem("users",JSON.stringify(existingUsers));

//         window.location.href = 'signin.html';
//     })
// })
//============================================================

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('submit', function(event) {
        if (event.target.id === 'registration') {
            event.preventDefault(); 
            console.log("submitted");
            const useremail = document.getElementById('email').value;
            const userpassword = document.getElementById('password').value;
            const confirmpassword = document.getElementById('confirmpassword').value;

            console.log(useremail, userpassword, confirmpassword);
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            console.log(existingUsers);
            
            const userExist = existingUsers.some((user) => user.email === useremail);
            console.log(userExist);

            if (userExist) {
                alert('Email already exists');
                return;
            }

            if (userpassword !== confirmpassword) {
                alert('Passwords do not match');
                return;
            }

            const newUser = { email: useremail, password: userpassword };
            existingUsers.push(newUser);
            localStorage.setItem("users", JSON.stringify(existingUsers));

            window.location.href = 'signin.html';
        }
    });
});


// document.getElementById('registration').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Get the email and password values
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Save the email and password to local storage
//     localStorage.setItem('userEmail', email);
//     localStorage.setItem('userPassword', password);

//     // Redirect to the login page
//     window.location.href = 'signin.html';
// });
  


//LOGIN FORM 
// const getList = function (listName) {
//     const list = JSON.parse(localStorage.getItem(listName)) || [];
//     return list;
// }
// const loginForm = document.querySelector('#loginform');

// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     //get user input
//     const enteredUsername = document.getElementById('email').value;
//     const enteredPassword = document.getElementById('password').value;

   
//     const users = getList('users');
//     const authenticatedUsers = users.find((user) => user.user === enteredUsername && user.password === enteredPassword);
//     console.log(authenticatedUsers)
//     if (authenticatedUsers) {
      
//         alert('Welcome');
//         document.getElementById('email').value = '';
//         document.getElementById('password').value = '';
//         window.location.href = "/index.html"
        
//     }else {
//         alert('invalid username')
//     } 
// });

//============================================
const getList = function (listName) {
    const list = JSON.parse(localStorage.getItem(listName)) || [];
    return list;
}

document.addEventListener('submit', function(event) {
    if (event.target.id === 'loginform') {
        event.preventDefault();
        // Get user input
        const enteredUsername = document.getElementById('email').value;
        const enteredPassword = document.getElementById('password').value;

        const users = getList('users');
        const authenticatedUser = users.find((user) => user.email === enteredUsername && user.password === enteredPassword);

        if (authenticatedUser) {
            alert('Welcome');
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            window.location.href = "/index.html";
        } else {
            alert('Invalid username or password');
        }
    }
});

// form validation for sign up
const form = document.querySelector('registration');

// const email = document.getElementById('email');
// const password = document.getElementById('password');

// const emailError = document.getElementById('email_error');
// const passwordError = document.getElementById('password_error');


// form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     let isValid = true;

//     if(userName.value.trim() === '') {
//         nameError.innerHTML = 'Name is requried';
//         nameError.style.color = "red";
//         isValid = false;
//     } else {
//        nameError.innerHTML = " ";

//     }

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!email.value.match(emailRegex)){
//         emailError.innerHTML = 'Enter a valid email';
//         emailError.style.color="red";
//         isValid = false;
//     }else {
//         emailError.innerHTML = " " ;
        
//     }

//     if (password.value.trim().length <= 6) {
//         passwordError.innerHTML = "Password must be more than 6 characters";
//         isValid = false;
//     }else if (password.value.trim().length >= 20 ) {
//         passwordError.innerHTML = "password cannot be more than 20 characters"
//         isValid = false;
//     }else if (password.value.trim() === 'password' || password.value.trim() === 'Password' ) {
//         passwordError.innerHTML = 'password cannot be "password"';
//         isValid = false;
//     }else {
//         passwordError.innerHTML = "strong  passsword";
//         passwordError.style.color = "green"
        
//     }
        
//     if (isValid) {
//         window.location.href = "/index.html"
//     }

    
   
// })
