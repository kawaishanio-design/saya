document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    if (usernameInput === 'heri' && passwordInput === '123') {
        alert('Login Berhasil!');
        window.location.href = "https://kawaishanio-design.github.io/saya/";

    } else {
        alert('Nama Pengguna atau Kata Sandi salah. Silakan coba lagi.');
    }
});
