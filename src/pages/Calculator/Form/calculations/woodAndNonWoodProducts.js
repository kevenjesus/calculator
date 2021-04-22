import calcMontante from 'utils/calcMontante'
import vpl from 'utils/vpl'
import { FERRY, PIT } from '../consts'

const woodAndNonWoodProducts = (hectare, likeMining, panningTime) => {

  const costPMNMPerHaYearBRL = 764.00
  const discountRate = 0.03;

  const amounts = calcMontante(costPMNMPerHaYearBRL)
  const VPLwoodAndNonWoodProducts = vpl(discountRate, amounts)

  let toWoodAndNonWoodProducts;
    if(likeMining === FERRY) {
      toWoodAndNonWoodProducts = 0
    }else if (likeMining === PIT && hectare) {
      toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * 0.31 * 12
    }else if (likeMining === PIT && panningTime) {
      toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * 0.31 * 12
    }
    else {
      toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * hectare * 12
    }
    return toWoodAndNonWoodProducts
}

export default woodAndNonWoodProducts

