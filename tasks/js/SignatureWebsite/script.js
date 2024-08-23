document.getElementById('nameInput').addEventListener('input', function() {
    const name = this.value;
    document.getElementById('style1').textContent = name;
    document.getElementById('style2').textContent = name;
});
