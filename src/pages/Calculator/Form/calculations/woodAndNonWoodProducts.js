import fixedCalcultions from 'hooks/fixedCalculations'
import calcMontante from 'utils/calcMontante'
import vpl from 'utils/vpl'
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT } from '../consts'

const woodAndNonWoodProducts = (country_region, likeMining, typeValueLikeMining, hectare) => {

  const { woodAndNonWoodProducts } = fixedCalcultions(country_region)
  const { costPMNMPerHaYearUSD, discountRate} = woodAndNonWoodProducts

  console.log('woodAndNonWoodProducts', costPMNMPerHaYearUSD, discountRate)

  //const costPMNMPerHaYearBRl = 764.00
  //const discountRate = 0.03;

  const amounts = calcMontante(costPMNMPerHaYearUSD)
  const VPLwoodAndNonWoodProducts = vpl(discountRate, amounts)

  let toWoodAndNonWoodProducts;
    if(likeMining === FERRY)  {
      toWoodAndNonWoodProducts = 0
    }else if (likeMining === PIT) {
      toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * 0.31 * 12

    }else if(likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
      toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * hectare * 12

    }else if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
      toWoodAndNonWoodProducts = VPLwoodAndNonWoodProducts * hectare
      
    }
    return toWoodAndNonWoodProducts
}

export default woodAndNonWoodProducts

