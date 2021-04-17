import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const culturedAndSpecies = (hectare, densidadePop2010, riquezaEspecie, tipoGarimpo, tempoGarimpo) => {


        const PIBpercapitaBrasil2019USD = 8717.18;
        const temperaturaCelsius = 26.8;
        const txCambio = 5;
        const TxDesconto = 0.03;

        const calc1 = 0.643 * Math.log(densidadePop2010);
        const calc2 = 1.655 * Math.log(PIBpercapitaBrasil2019USD);
        const calc3 = 0.234 * temperaturaCelsius;
        const calc4 = 2.145 * Math.log(riquezaEspecie);
        const calc5 = calc1 + calc2 - calc3 + calc4;
        const calc6 = calc5 - 20.85;
        const custoEspeciesporHaUSD = Math.exp(calc6);
        const custoEspeciesporHaBRL = custoEspeciesporHaUSD * txCambio;
        
        
        const montantes = calcMontante(custoEspeciesporHaBRL)
        const VPLHectareCulturedAndSpecies = vpl(TxDesconto, montantes)

        let toCulturedAndSpecies;

        if(tipoGarimpo === FERRY) { 
          toCulturedAndSpecies = 0
        }else if (tipoGarimpo === PIT && hectare) {
          toCulturedAndSpecies = VPLHectareCulturedAndSpecies * 0.31 * 12
        }else if (tipoGarimpo === PIT && tempoGarimpo) {
          toCulturedAndSpecies = VPLHectareCulturedAndSpecies * 0.31 * 12
        }else {
          toCulturedAndSpecies = VPLHectareCulturedAndSpecies * hectare * 12
        }
        return toCulturedAndSpecies
           
}

export default culturedAndSpecies
