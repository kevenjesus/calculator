import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT } from "../consts";

const recreation = (likeMining, popDensity2010, species, typeValueLikeMining, hectare) => {
   
    const GDPperCapitaBrazilUSD = 8717.18;
    const celciusTemperature = 26.8;
    const discountRate = 0.03;

    const calculation1 = 0.562 * Math.log(popDensity2010);
    const calculation2 = 0.566 * Math.log(GDPperCapitaBrazilUSD);
    const calculation3 = 0.0178 * celciusTemperature;
    const calculation4 = 1.133 * Math.log(species);
    const calculation5 = calculation1 + calculation2 + calculation3 + calculation4;
    const calculation6 = calculation5 - 8.375;
    const recreationCostPerHaUSD = Math.exp(calculation6);
    //const recreationCostPerHaBRL = recreationCostPerHaUSD * exchangeTax;

    const amounts = calcMontante(recreationCostPerHaUSD)
    
    const VPLHaRecreation = vpl(discountRate, amounts)

    let toRecration;

    if(likeMining === FERRY)  {
        toRecration = 0
    }else if (likeMining === PIT) {
        toRecration = VPLHaRecreation * 0.31 * 12
    }else if(likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
        toRecration = VPLHaRecreation * hectare * 12
    }else if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        toRecration = VPLHaRecreation * hectare
    } 
    return toRecration

}

export default recreation