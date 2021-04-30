import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT } from "../consts";

const CONSERVATIVE = 0.29

const erosionSiltingUp = (likeMining, txPrevalence, typeValueLikeMining, hectare) => {
 
  const GDPperCapitaBrazil2019USD = 8717.18

  if(txPrevalence === CONSERVATIVE) {
    const discountRate = 0.03;
    const siltingUpCostPerHaBRL = 66.42;

    const amounts = calcMontante(siltingUpCostPerHaBRL)
    const VPLhectareSilting = vpl(discountRate, amounts)
    
    let toErosion;
    if(likeMining === FERRY) {
      toErosion = 0
      
    }else if (likeMining === PIT)  {
      toErosion = VPLhectareSilting * 0.31 * 12
    
    }else if(likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
      toErosion = VPLhectareSilting * hectare * 12

    }else if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
      toErosion = VPLhectareSilting * hectare

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
      const siltingUpCostPerHaUSD = Math.exp(calc5);
      const siltingUpCostPerHaBRL = siltingUpCostPerHaUSD * txCambio;

      const amounts = calcMontante(siltingUpCostPerHaBRL)
      const VPLhectareSilting = vpl(discountRate, amounts)

      let toErosion;
        if(likeMining === FERRY) {
          toErosion = 0
        }else if (likeMining === PIT) {
          toErosion = VPLhectareSilting * 0.31 * 12
          
        }else if(likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
          toErosion = VPLhectareSilting * hectare * 12
    
        }else if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
          toErosion = VPLhectareSilting * hectare
    
        }
        return toErosion
    }
} 

export default erosionSiltingUp





