import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const recreation = (hectare, densidadePop2010, riquezaEspecie, tipoGarimpo) => {
    
    
    const PIBpercapitaBrasil2019USD = 8717.18;
    const temperaturaCelsius = 26.8;
    const txCambio = 5;
    const TxDesconto = 0.03;

    const calcRecreacao1 = 0.562 * Math.log(densidadePop2010);
    const calcRecreacao2 = 0.566 * Math.log(PIBpercapitaBrasil2019USD);
    const calcRecreacao3 = 0.0178 * temperaturaCelsius;
    const calcRecreacao4 = 1.133 * Math.log(riquezaEspecie);
    const calcRecreacao5 = calcRecreacao1 + calcRecreacao2 + calcRecreacao3 + calcRecreacao4;
    const calcRecreacao6 = calcRecreacao5 - 8.375;
    const custoRecreacaoporHaUSD = Math.exp(calcRecreacao6);
    const custoRecreacaoporHaBRL = custoRecreacaoporHaUSD * txCambio;


    
    const montantes = calcMontante(custoRecreacaoporHaBRL)
    
    const VPLHectareRecreacao = vpl(TxDesconto, montantes)


    let toRecration;

    if(tipoGarimpo === FERRY) {
        toRecration = 0
    }else if (tipoGarimpo === PIT) {
        toRecration = VPLHectareRecreacao * 0.31 * 12
    }else {
        toRecration = VPLHectareRecreacao * hectare * 12
    } 
    return toRecration

}

export default recreation