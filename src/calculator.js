export class Calculator{
    constructor(result){
        this.result = result;
    }

    add(a,b){
        return this.result = a + b;
    }

    subtract(a,b){
        return this.result = a - b;
    }

    multiply(a,b){
        return this.result = a * b;
    }

    divide(a,b){
        if (b == 0){
            return 'no';
        }
        else{
            return this.result = a / b ;
        }
    }
}