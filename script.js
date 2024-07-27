// script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    const forgotPasswordContainer = document.querySelector('.forgot-password-container');

    const loginErrorMessage = document.getElementById('login-error-message');
    const registerErrorMessage = document.getElementById('register-error-message');
    const forgotErrorMessage = document.getElementById('forgot-error-message');

    document.getElementById('registerLink').addEventListener('click', function() {
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
    });

    document.getElementById('loginLink').addEventListener('click', function() {
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });

    document.getElementById('forgotPasswordLink').addEventListener('click', function() {
        loginContainer.classList.remove('active');
        forgotPasswordContainer.classList.add('active');
    });

    document.getElementById('loginLinkFromForgot').addEventListener('click', function() {
        forgotPasswordContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUser = localStorage.getItem(username);
        const user = storedUser ? JSON.parse(storedUser) : null;

        if (user && user.password === password) {
            alert('Login successful!');
            // Redirect to another page or perform some action
        } else {
            loginErrorMessage.textContent = 'Invalid username or password';
            loginErrorMessage.style.display = 'block';
        }
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (localStorage.getItem(username)) {
            registerErrorMessage.textContent = 'Username already exists';
            registerErrorMessage.style.display = 'block';
        } else {
            localStorage.setItem(username, JSON.stringify({ username, password }));
            alert('Registration successful!');
            registerContainer.classList.remove('active');
            loginContainer.classList.add('active');
        }
    });

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('forgot-username').value;

        if (localStorage.getItem(username)) {
            alert('Password reset instructions have been sent to your email.');
            forgotPasswordContainer.classList.remove('active');
            loginContainer.classList.add('active');
        } else {
            forgotErrorMessage.textContent = 'Username does not exist';
            forgotErrorMessage.style.display = 'block';
        }
    });

    // Initially display the login form
    loginContainer.classList.add('active');
});
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUser = localStorage.getItem(username);
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (user && user.password === password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard.html
    } else {
        loginErrorMessage.textContent = 'Invalid username or password';
        loginErrorMessage.style.display = 'block';
    }
});


