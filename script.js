const form = document.getElementById("myForm");
const darkBtn = document.getElementById("darkBtn");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strengthBar = document.getElementById("strengthBar");

// Dark Mode
darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkBtn.innerHTML = "🌙 Dark Mode";
    }
});

// Show / Hide Password
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }

});

// Password Strength Meter
password.addEventListener("keyup", function () {

    let strength = 0;

    if (password.value.length >= 8)
        strength++;

    if (/[A-Z]/.test(password.value))
        strength++;

    if (/[a-z]/.test(password.value))
        strength++;

    if (/[0-9]/.test(password.value))
        strength++;

    if (strength == 1) {
        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
    }
    else if (strength == 2) {
        strengthBar.style.width = "50%";
        strengthBar.style.background = "orange";
    }
    else if (strength == 3) {
        strengthBar.style.width = "75%";
        strengthBar.style.background = "gold";
    }
    else if (strength == 4) {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }
    else {
        strengthBar.style.width = "0%";
    }

});

// Form Validation
form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = password.value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("success").textContent = "";

    let valid = true;

    if (name.length < 3) {
        document.getElementById("nameError").textContent =
            "Please enter at least 3 characters.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        valid = false;
    }

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(pass)) {
        document.getElementById("passwordError").textContent =
            "Password must contain 8+ characters, one uppercase letter, one lowercase letter and one number.";
        valid = false;
    }

    if (valid) {

        document.getElementById("success").textContent =
            "✅ Registration completed successfully!";

        form.reset();

        strengthBar.style.width = "0%";
    }

});