export default class CL_Sobres{
    constructor(){
        this.acumdinero=0;
    }

    procesarsobre(so){
        this.acumdinero+=so.dinero();
    }

}