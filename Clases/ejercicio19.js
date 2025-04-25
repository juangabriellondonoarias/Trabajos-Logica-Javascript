/* 19. Crear una clase CuentaBancaria con un atributo privado saldo 
y un método privado actualizarSaldo(). Crear métodos públicos para
depositar() y retirar() que usen actualizarSaldo().*/

class CuentaBancaria{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo;
    }

    #actualizarSaldo(nuevoSaldo){
        this.#saldo = nuevoSaldo;
        return this.#saldo;
    }

    depositar(monto){
        if (monto > 0) {
            return `Saldo actualmente con el deposito ${this.#actualizarSaldo(this.#saldo + monto)}`
        } else{
            console.log("El deposito tiene que se mayor a 0");
            
        }
    }

    retirar(monto){
        if (monto > 0 && monto <= this.#saldo) {
            return `Saldo actualmente ya retirado un monto ${this.#actualizarSaldo(this.#saldo - monto)}`
        }
    }

    getSaldo(){
        return `Saldo actualmente ${this.#saldo}`
    }
}

const salario1 = new CuentaBancaria(500);
console.log(salario1.getSaldo());

console.log(salario1.depositar(200));
console.log(salario1.retirar(300));