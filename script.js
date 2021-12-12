import ValidaCpf from "./valida-cpf.js";

const cpf = document.querySelector('#cpf')

const newCpf = new ValidaCpf(cpf).init()