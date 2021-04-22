import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const bioprospecting = (hectare, valueHypothesis, likeMining, panningTime) => { 

  const bioprospectingCostByBRL = valueHypothesis === CONSERVATIVE ? 68.19 : 116.95
  const txDiscount = 0.03;

  const amounts = calcMontante(bioprospectingCostByBRL)
  const VPLBioprospecting = vpl(txDiscount, amounts)

    let toBioprospecting;
      if(likeMining === FERRY) {
        toBioprospecting = 0
      }else if (likeMining === PIT && hectare) {
        toBioprospecting = VPLBioprospecting * 0.31 * 12
      }else if (likeMining === PIT && panningTime)
        toBioprospecting = VPLBioprospecting * 0.31 * 12
      else {
        toBioprospecting = VPLBioprospecting * hectare * 12
      }
    return toBioprospecting
}

export default bioprospecting


