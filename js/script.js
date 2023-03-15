import ehUmCPF from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo.value));
})

function verificaCampo(campo) {

}