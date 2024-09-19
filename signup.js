const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})


/* Sign Up & Login */

const signupBtn = document.getElementById('signup');
signupBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    if (email == '' || password == '' || confirmpassword == '') {
        alert('Fill All Details');
        return;
    }

    if (password.length < 6) {
        alert('Password must be greater than 6 letter');
        return;
    }

    if (password !== confirmpassword) {
        alert("Password do not match");
        return;
    }

    const userDetails = {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    };

    document.querySelector('#signupForm').reset();
    localStorage.setItem(email, JSON.stringify(userDetails));
    alert('Sign up successfully');
});

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', (event) => {
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginpassword').value;

    if (email == '' || password == '') {
        alert('Fill All Details');
        return;
    }

    if (password.length < 6) {
        alert('Password must be greater than 6 letter');
        return;
    }

    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser &&  storedUser.password === password) {
        localStorage.setItem("Name", storedUser.name);
        document.querySelector('#loginForm').reset();
        window.location.href = 'index.html';
        alert('Login successful!');

    } else {
        alert('Invalid email or Password');
    }
});