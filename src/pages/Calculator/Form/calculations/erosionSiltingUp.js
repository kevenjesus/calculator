import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const erosionSiltingUp = (hectare, txPrevalence, tipoGarimpo, tempoGarimpo) => {

  const PIBpercapitaBrasil2019USD = 8717.18

    if(txPrevalence === CONSERVATIVE) {
      const TxDesconto = 0.03;
      const CustoAssoreamentoporHaBRL = 66.42;

      const montantes = calcMontante(CustoAssoreamentoporHaBRL)
      const VPLHectareAssoreamento = vpl(TxDesconto, montantes)
      
      let toErosion;
        if(tipoGarimpo === FERRY) {
          toErosion = 0
        }else if (tipoGarimpo === PIT && hectare) {
          toErosion = VPLHectareAssoreamento * 0.31 * 12
        
        }else if (tipoGarimpo === PIT && tempoGarimpo) {
        toErosion = VPLHectareAssoreamento * 0.31 * 12
        }else {
          toErosion = VPLHectareAssoreamento * hectare * 12
        }
        return toErosion
      
      

    } else {

      const TxDesconto = 0.03;
      const txCambio = 5;
      const calc1 = Math.log(PIBpercapitaBrasil2019USD);
      const calc2 = Math.pow(calc1, 2);
      const calc3 = 13.32 * calc1;
      const calc4 = 0.623 * calc2;
      const calc5 = calc3 - 65.64 - calc4;
      const CustoAssoreamentoporHaUSD = Math.exp(calc5);
      const CustoAssoreamentoporHaBRL = CustoAssoreamentoporHaUSD * txCambio;

      const montantes = calcMontante(CustoAssoreamentoporHaBRL)
      const VPLHectareAssoreamento = vpl(TxDesconto, montantes)

      let toErosion;
        if(tipoGarimpo === FERRY) {
          toErosion = 0
        }else if (tipoGarimpo === PIT) {
          toErosion = VPLHectareAssoreamento * 0.31 * 12
        }else {
          toErosion = VPLHectareAssoreamento * hectare * 12
        }
        return toErosion
      
    }


} 

export default erosionSiltingUp





