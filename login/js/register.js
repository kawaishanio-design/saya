document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const messageDisplay = document.getElementById("message");

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    let existingUsers = JSON.parse(localStorage.getItem("usersData")) || [];
    const isEmailRegistered = existingUsers.some(user => user.email === emailInput);

    if (isEmailRegistered) {
      messageDisplay.style.color = "red";
      messageDisplay.textContent = "Email sudah terdaftar! Gunakan email lain.";
      return;
    }

    const newUser = {
        username: usernameInput,
        email: emailInput,
        password: passwordInput 
    };

    existingUsers.push(newUser);
    localStorage.setItem("usersData", JSON.stringify(existingUsers));
    messageDisplay.style.color = "lightgreen";
    messageDisplay.textContent = "Pendaftaran Berhasil! Silakan Masuk.";

    registerForm.reset();
    setTimeout(() => {
         window.location.href = "index.html";
    }, 2000);
});
