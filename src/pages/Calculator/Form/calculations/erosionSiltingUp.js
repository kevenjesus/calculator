import fixedCalcultions from "hooks/fixedCalculations";
import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT } from "../consts";

const CONSERVATIVE = 0.29

const erosionSiltingUp = (country_region, likeMining, txPrevalence, typeValueLikeMining, hectare) => {
 
  const { erosionSiltingUp, general } = fixedCalcultions(country_region)
  const { GDPperCapitaBrazilUSD } = general
  const { siltingUpCostPerHaUSD } = erosionSiltingUp
  


  console.log('erosionSiltingUp', GDPperCapitaBrazilUSD, siltingUpCostPerHaUSD)

  if(txPrevalence === CONSERVATIVE) {
    const discountRate = 0.03;

    const amounts = calcMontante(siltingUpCostPerHaUSD)
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
      const calc1 = Math.log(GDPperCapitaBrazilUSD);
      const calc2 = Math.pow(calc1, 2);
      const calc3 = 13.32 * calc1;
      const calc4 = 0.623 * calc2;
      const calc5 = calc3 - 65.64 - calc4;
      const siltingUpCostPerHaUSD = Math.exp(calc5);
      //const siltingUpCostPerHaUSD = siltingUpCostPerHaUSD * txCambio;

      const amounts = calcMontante(siltingUpCostPerHaUSD)
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





