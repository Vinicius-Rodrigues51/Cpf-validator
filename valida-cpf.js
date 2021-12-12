export default class ValidaCpf{
    constructor(element) {
        this.element = element
    }

    limpa(cpf) {
        return cpf.replace(/\D/g, '')
    }

    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    formatar(cpf) {
        const cpfLimpo = this.limpa(cpf);
        return this.construir(cpfLimpo)
    }

    validar(cpf) {
        const matchCpf = cpf.match(/(:?\d{3}[-.\s]?){3}\d{2}/g)
        return (matchCpf && matchCpf[0] === cpf)
    }

    validarNaMudanca(cpfElement) {
        if(this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value)
            cpfElement.classList.add('valido')
            cpfElement.classList.remove('ativo')
            cpfElement.nextElementSibling.classList.remove('ativo')
        }else {
            cpfElement.classList.remove('valido')
            cpfElement.classList.add('ativo')
            cpfElement.nextElementSibling.classList.add('ativo')
        }
    }

    eventListener() {
        this.element.addEventListener('change', () => {
            this.validarNaMudanca(this.element)
        })
    }

    init() {
        this.eventListener()
        return this;
    }
}