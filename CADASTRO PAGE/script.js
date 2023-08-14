document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    if (email === '' || senha === '') {
        alert('Preencha os campos!')
        return;
    }
})

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        alert('Insira um email válido')
        return;
    }

    var senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!senhaRegex.test(senha)) {
        alert('A senha deve conter pelo menos 8 caracteres')
    }

    console.log('E-mail:', email); 
    console.log('Senha:', senha);
