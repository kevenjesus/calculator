import { AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinHectare = (likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {

    const goldDensity = 2.76;
    const excavationGoldLoss = 2;
    const averageProductivityCava = 0.4;
    const sterileMineralRelation = 7;
    const overflow = 12;

    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        const amountOfGoldGramsPerYearWell = 23700;
        const goldGrass = amountOfGoldGramsPerYearWell * valueLikeMining;
        const turnedSoilTon = goldGrass / averageProductivityCava;
        const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
        const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
        const volumeWithoutLoss = toSoilUpTurned / goldDensity;
        const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / pitDepth;
        const hectare = affectedAreaM2 / 10000;
        const hectareOverflow = hectare * overflow;
        return hectareOverflow
        
    }else if(likeMining === PIT && AMOUNT_GOLD){ 
        const hectare = 0.31;
        const hectareOverflow = hectare * overflow;
        return hectareOverflow

    }else if (typeValueLikeMining === AMOUNT_GOLD){
        const turnedSoilTon = valueLikeMining / averageProductivityCava;
        const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
        const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
        const volumeWithoutLoss = toSoilUpTurned / goldDensity;
        const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / pitDepth;
        const hectare = affectedAreaM2 / 10000;
        const hectareOverflow = hectare * overflow;
        return hectareOverflow

    }else if(likeMining === FERRY){
        const hectare = 0;
        return hectare
    }else{
        const hectare = valueLikeMining
        return hectare
    }

}
export default convertAllinHectare 
