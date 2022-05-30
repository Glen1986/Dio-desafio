class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = saldo
    }
    get saldo() {
        return this._saldo
    }
    set saldo(valor) {
        this._saldo = valor
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return 'operacion negada'
        }
        return (this._saldo = this._saldo - valor)
    }
    depositar(valor) {
        return (this._saldo = this._saldo + valor)
    }
}

class ContaCorrente {
    constructor(agencia, numero, saldo, tarjetaCredito) {
        super(agencia, numero, tipo, saldo)
        this.tipo = 'ContaCorrente'
        this._tarjetaCredito = tarjetaCredito
    }
    get tarjetaCredito() {
        return this._tarjetaCredito
    }
    set tarjetaCredito(valor) {
        return (this._tarjetaCredito = valor)
    }
}

class ContaPoupanca {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, tipo, saldo)
        this.tipo = 'ContaPoupanca'
    }
}

class ContaUniversitaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, tipo, saldo)
        this.tipo = 'ContaUniversitaria'
    }
    sacar(valor) {
        if (valor > 500) {
            return 'operacion negada'
        }
        return (this._saldo = this._saldo - valor)
    }
}
