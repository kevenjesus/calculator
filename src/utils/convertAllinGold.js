import fixedCalcultions from "hooks/fixedCalculations";
import { ALLUVIUM, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinGold = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {
    const { general } = fixedCalcultions(country_region)
    //const { prodOuroKgporMes,  averageMotorPower } = dredgingAndRiverSediments
    const { densityGold, excavationGoldLoss, prodGoldMonthFerry, quantityOfGoldGramsPerYearWell, cavaAverageProductivity } = general
    //console.log(quantityOfGoldGramsPerYearWell)
    let goldGrass
   
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        //const quantityOfGoldGramsPerYearWell = 23700;
        goldGrass = quantityOfGoldGramsPerYearWell * valueLikeMining;
        //console.log('grama de ouro', goldGrass)
        return goldGrass

    }else if (likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        const sterileOreRatio = 7;
        //const densityGold = 2.76;
        //const excavationGoldLoss = 2;
       // const cavaAverageProductivity = 0.4;
        const affectedAreaM2 = valueLikeMining * 10000;
        const lossyVolume = pitDepth * affectedAreaM2;
        const volumeWithoutLoss = lossyVolume / excavationGoldLoss;
        const toSoilUpturned = densityGold * volumeWithoutLoss;
        const calculationBaseTon = toSoilUpturned / (sterileOreRatio + 1);
        const revolvedMineralTon = calculationBaseTon * 1;
        const goldGrass = cavaAverageProductivity * revolvedMineralTon;
        //console.log('grama de ouro', goldGrass)
        return goldGrass

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING){
        //const prodOuroKgporMes = 0.00604;
        //const averageMotorPower = 54.4;
        //const prodOuroGrporMes = prodOuroKgporMes * 1000;
        //const goldGrass = averageMotorPower * valueLikeMining * prodOuroGrporMes;
        const goldGrass =  valueLikeMining * prodGoldMonthFerry;
        //console.log('grama de ouro', goldGrass)
        return goldGrass
    }else{
        const goldGrass = valueLikeMining;
        //console.log('grama de ouro', goldGrass)
        return goldGrass 
    }
}
export default convertAllinGold 
