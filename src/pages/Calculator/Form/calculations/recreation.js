import calcMontante from "utils/calcMontante";
import vpl from "utils/vpl";
import { FERRY, PIT } from "../consts";

const recreation = (hectare, likeMining, panningTime) => { // densitypop2010, speciesWealth,

    const densitypop2010 = 4.12;
    const speciesWealth = 69;

    const GDPperCapitaBrazilUSD = 8717.18;
    const celciusTemperature = 26.8;
    const exchangeTax = 5;
    const discountRate = 0.03;

    const calculation1 = 0.562 * Math.log(densitypop2010);
    const calculation2 = 0.566 * Math.log(GDPperCapitaBrazilUSD);
    const calculation3 = 0.0178 * celciusTemperature;
    const calculation4 = 1.133 * Math.log(speciesWealth);
    const calculation5 = calculation1 + calculation2 + calculation3 + calculation4;
    const calculation6 = calculation5 - 8.375;
    const recreationCostPerHaUSD = Math.exp(calculation6);
    const recreationCostPerHaBRL = recreationCostPerHaUSD * exchangeTax;

    const amounts = calcMontante(recreationCostPerHaBRL)
    
    const VPLHaRecreation = vpl(discountRate, amounts)

    let toRecration;

    if(likeMining === FERRY) {
        toRecration = 0
    }else if (likeMining === PIT && hectare) {
        toRecration = VPLHaRecreation * 0.31 * 12
    }else if (likeMining === PIT && panningTime) {
        toRecration = VPLHaRecreation * 0.31 * 12
    }else {
        toRecration = VPLHaRecreation * hectare * 12
    } 
    return toRecration

}

export default recreation