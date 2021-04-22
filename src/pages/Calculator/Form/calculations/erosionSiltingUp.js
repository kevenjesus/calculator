import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const erosionSiltingUp = (hectare, txPrevalence, likemining, panningTime) => {

  const GDPperCapitaBrazil2019USD = 8717.18

  if(txPrevalence === CONSERVATIVE) {
    const discountRate = 0.03;
    const siltingUppCostPerHaBRL = 66.42;

    const amounts = calcMontante(siltingUppCostPerHaBRL)
    const VPLhectareSilting = vpl(discountRate, amounts)
    
    let toErosion;
    if(likemining === FERRY) {
      toErosion = 0
      
    }else if (likemining === PIT && hectare) {
      toErosion = VPLhectareSilting * 0.31 * 12
    
    }else if (likemining === PIT && panningTime) {
      toErosion = VPLhectareSilting * 0.31 * 12

    }else{
      toErosion = VPLhectareSilting * hectare * 12

    }
    return toErosion
      
    }else{

      const discountRate = 0.03;
      const txCambio = 5;
      const calc1 = Math.log(GDPperCapitaBrazil2019USD);
      const calc2 = Math.pow(calc1, 2);
      const calc3 = 13.32 * calc1;
      const calc4 = 0.623 * calc2;
      const calc5 = calc3 - 65.64 - calc4;
      const CustoAssoreamentoporHaUSD = Math.exp(calc5);
      const siltingUppCostPerHaBRL = CustoAssoreamentoporHaUSD * txCambio;

      const amounts = calcMontante(siltingUppCostPerHaBRL)
      const VPLhectareSilting = vpl(discountRate, amounts)

      let toErosion;
        if(likemining === FERRY) {
          toErosion = 0
        }else if (likemining === PIT) {
          toErosion = VPLhectareSilting * 0.31 * 12
        }else {
          toErosion = VPLhectareSilting * hectare * 12
        }
        return toErosion
    }
} 

export default erosionSiltingUp





