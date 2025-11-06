window.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-cadastro");
    const campos = document.querySelectorAll("#form-cadastro input, #form-cadastro textarea");
    
   
    let msg = document.getElementById("mensagem");
    if (!msg) {
        msg = document.createElement("p");
        msg.id = "mensagem";
        msg.style.textAlign = "center";
        form.appendChild(msg);
    }

  
    const telefone = document.getElementById("telefone");
    telefone.addEventListener("input", function () {
        this.value = this.value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})$/, "$1-$2");
    });


    const cep = document.getElementById("cep");
    cep.addEventListener("input", function () {
        this.value = this.value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d)/, "$1-$2");
    });

   
    campos.forEach(campo => {
        campo.addEventListener("input", () => {
            if (campo.value.trim() === "") {
                campo.classList.add("erro");
                campo.classList.remove("ok");
            } else {
                campo.classList.remove("erro");
                campo.classList.add("ok");
            }
        });
    });


    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valido = true;

        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                campo.classList.add("erro");
                valido = false;
            }
        });

        const emailField = document.getElementById("email");
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(emailField.value)) {
            emailField.classList.add("erro");
            msg.textContent = "Digite um e-mail válido!";
            msg.style.color = "red";
            msg.style.display = "block";
            return;
        }

        if (!valido) {
            msg.textContent = "Preencha todos os campos!";
            msg.style.color = "red";
            msg.style.display = "block";
            return;
        }

        msg.textContent = "Cadastro enviado com sucesso!";
        msg.style.color = "green";
        msg.style.display = "block";

        form.reset();
        campos.forEach(c => c.classList.remove("ok"));

        setTimeout(() => {
            window.location.href = "Index.html";
        }, 1500);
    });

});

