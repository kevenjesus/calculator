import { ALLUVIUM, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinGold = (likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {

    let goldGrass
   
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        const amountOfGoldGramsPerYearWell = 23700;
        goldGrass = amountOfGoldGramsPerYearWell * valueLikeMining;
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
        return goldGrass

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING){
        const prodOuroKgporMes = 0.00604;
        const potenciaMediaMotor = 54.4;
        const goldGrass = potenciaMediaMotor * valueLikeMining * prodOuroKgporMes;
        return goldGrass
    }
}
export default convertAllinGold 
