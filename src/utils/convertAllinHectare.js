import fixedCalcultions from "hooks/fixedCalculations";
import { AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinHectare = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {

    const { general } = fixedCalcultions(country_region)
    const { densityGold, excavationGoldLoss, hectare, quantityOfGoldGramsPerYearWell, cavaAverageProductivity } = general

    //const densityGold = 2.76;
    //const excavationGoldLoss = 2;
    //const cavaAverageProductivity = 0.4;
    const sterileMineralRelation = 7;
    const overflow = 12;

    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        //const quantityOfGoldGramsPerYearWell = 23700;
        const goldGrass = quantityOfGoldGramsPerYearWell * valueLikeMining;
        const turnedSoilTon = goldGrass / cavaAverageProductivity;
        const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
        const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
        const volumeWithoutLoss = toSoilUpTurned / densityGold;
        const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / pitDepth;
        const hectare = affectedAreaM2 / 10000;
        const hectareOverflow = hectare * overflow;
        return hectareOverflow
        
    }else if(likeMining === PIT && AMOUNT_GOLD){ 
        //const hectare = 0.31;
        const hectareOverflow = hectare * overflow;
        return hectareOverflow

    }else if (typeValueLikeMining === AMOUNT_GOLD){
        const turnedSoilTon = valueLikeMining / cavaAverageProductivity;
        const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
        const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
        const volumeWithoutLoss = toSoilUpTurned / densityGold;
        const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / pitDepth;
        const hectare = affectedAreaM2 / 10000;
        const hectareOverflow = hectare * overflow;
        return hectareOverflow

    }else if(likeMining === FERRY){
        return 0
    }else{
        const hectare = valueLikeMining
        return hectare
    }

}
export default convertAllinHectare 
