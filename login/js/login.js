document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === '123' && usernameInput + '!') {
        alert('Login Berhasil, Halo-' + usernameInput + '!');

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", usernameInput);
        
        window.location.href = "https://kawaishanio-design.github.io/saya/";

    } else {
        alert('Nama Pengguna atau Kata Sandi salah. Silakan coba lagi.');
    }
});
 
