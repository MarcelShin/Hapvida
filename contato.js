function submitForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageElement = document.getElementById('message');

    if (nameInput.value && emailInput.value) {
        messageElement.textContent = 'Agradecemos o contato!';
        clearForm();
    } else {
        messageElement.textContent = 'Por favor, preencha todos os campos.';
    }
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}