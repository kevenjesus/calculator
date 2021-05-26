import { ALLUVIUM, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinGold = (likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {
    console.log('valueLikeMining', valueLikeMining)

    let goldGrass
   
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        const amountOfGoldGramsPerYearWell = 23700;
        goldGrass = amountOfGoldGramsPerYearWell * valueLikeMining;
        console.log('ANOSgoldGrass', goldGrass)
        return goldGrass

    }else if (likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        const sterileOreRatio = 7;
        const goldDensity = 2.76;
        const excavationGoldLoss = 2;
        const averageProductivityCava = 0.4;
        const affectedAreaM2 = valueLikeMining * 10000;
        const lossyVolume = pitDepth * affectedAreaM2;
        const volumeWithoutLoss = lossyVolume / excavationGoldLoss;
        const toSoilUpturned = goldDensity * volumeWithoutLoss;
        const calculationBaseTon = toSoilUpturned / (sterileOreRatio + 1);
        const revolvedMineralTon = calculationBaseTon * 1;
        const goldGrass = averageProductivityCava * revolvedMineralTon;
        console.log('AREAgoldGrass', goldGrass)
        return goldGrass

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING){
        const prodOuroKgporMes = 0.00604;
        const prodOuroGrporMes = prodOuroKgporMes * 1000;
        const potenciaMediaMotor = 54.4;
        const goldGrass = potenciaMediaMotor * valueLikeMining * prodOuroGrporMes;
        console.log('MESESgoldGrass', goldGrass)
        return goldGrass
    }else{
        const goldGrass = valueLikeMining;
        console.log('goldgoldGrass', goldGrass)
        return goldGrass 
    }
}
export default convertAllinGold 
