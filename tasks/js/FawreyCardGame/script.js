function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const image = document.getElementById('image');

    if (password === '12345') {
        image.style.filter = 'none';
    } else {
        image.style.filter = 'blur(15px)';
        alert('Wrong Password');
    }
}
