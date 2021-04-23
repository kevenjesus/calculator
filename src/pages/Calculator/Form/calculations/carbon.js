import calcMontante from "utils/calcMontante"
import vpl from "utils/vpl"
import { FERRY, PIT } from "../consts"

const carbon = (likeMining, hectare) => {

    const txDiscount = 0.03;
    const carbonCostPerHaBRL = 887.74;
    
    const amounts = calcMontante(carbonCostPerHaBRL)
    const VPLCarbon = vpl(txDiscount, amounts)

    let toCarbon;
      if(likeMining === FERRY) {
        toCarbon = 0

      }else if (likeMining === PIT) {
        toCarbon = VPLCarbon * 0.31 * 12

      }else{
        toCarbon = VPLCarbon * hectare * 12
      }
      return toCarbon
} 

export default carbon


