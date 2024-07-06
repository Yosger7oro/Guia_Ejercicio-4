export default class CL_Sobre{
    constructor(va,ca){
        this.valor=va;
        this.cantidad=ca;
    }

    set valor(v){
        return this._valor=v;
        }
        
        get valor(){
        return this._valor;
        }
    
        set cantidad(c){
            return this._cantidad=c;
            }
            
            get cantidad(){
            return this._cantidad;
            }
    
    dinero(){
        return this.valor*this.cantidad;
    }

}