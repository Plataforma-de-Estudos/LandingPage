const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('input[name="nameEmail"]').value;
    const password = document.querySelector('input[name="namePassword"]').value;

    if (form.classList.contains('cadastro')) {
        const user = document.querySelector('input[name="nameUser"]').value;

        const data = {
            nome: user,
            email: email,
            senha: password,
            adm: 0,
            foto: null,
            organizacao: 1,
            codAgenda: 1,
        };

        axios.post('http://localhost:8080/api/profiles', data).then(() => {
            document.querySelector('.login-btn').click();
        });
    } else if (form.classList.contains('login')) {
        axios.get('http://localhost:8080/api/profiles').then((res) => {
            let isUserRegistered = false;
            let registeredUserId = null;
            res.data.map((profile, id) => {
                if (profile.Email === email && profile.Senha === password) {
                    isUserRegistered = true;
                    registeredUserId = profile.idPerfil;
                }
            });

            if (isUserRegistered) {
                axios
                    .put(`http://localhost:8080/api/activeProfile/1`, {
                        idPerfil: registeredUserId,
                    })
                    .then(() => {
                        window.location.href =
                            'http://localhost:5173/workspace';
                    });
            } else {
                alert('Usuário e/ou senha incorretos');
            }
        });
    }
});
