import calcMontante from "utils/calcMontante"
import vpl from "utils/vpl"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT } from "../consts"

const carbon = (likeMining, typeValueLikeMining, hectare) => {

    const txDiscount = 0.03;
    const carbonCostPerHaBRL = 887.74;
    
    const amounts = calcMontante(carbonCostPerHaBRL)
    const VPLCarbon = vpl(txDiscount, amounts)

    let toCarbon;
      if(likeMining === FERRY)  {
        toCarbon = 0

      }else if (likeMining === PIT) {
        toCarbon = VPLCarbon * 0.31 * 12

      }else if(likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
        toCarbon = VPLCarbon * hectare * 12

      }else if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        toCarbon = VPLCarbon * hectare
        
      }
      return toCarbon
} 

export default carbon


