import fixedCalcultions from "hooks/fixedCalculations";
import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT } from "../consts";

const CONSERVATIVE = 0.29

const bioprospecting = (country_region, likeMining, typeValueLikeMining, txPrevalence, hectare) => { 
  const { bioprospecting } = fixedCalcultions(country_region) 
  const { bioprospectingCostByUSD_conservative, bioprospectingCostByUSD, discountRate} = bioprospecting
  
  console.log('bioprospecting', bioprospectingCostByUSD_conservative, bioprospectingCostByUSD, discountRate)

  //const bioprospectingCostByBRL = txPrevalence === CONSERVATIVE ? 68.19 : 116.95
  const bioprospectingCostByUSDValue = txPrevalence === CONSERVATIVE ? bioprospectingCostByUSD_conservative : bioprospectingCostByUSD
  //const discountRate = 0.03;

  

  const amounts = calcMontante(bioprospectingCostByUSDValue)
  const VPLBioprospecting = vpl(discountRate, amounts)

    let toBioprospecting;
      if(likeMining === FERRY)  {
        toBioprospecting = 0
      }else if(likeMining === PIT) {
        toBioprospecting = VPLBioprospecting * 0.31 * 12
      }else if(likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
        toBioprospecting = VPLBioprospecting * hectare * 12
      }else if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        toBioprospecting = VPLBioprospecting * hectare
      }
    return toBioprospecting
}

export default bioprospecting


