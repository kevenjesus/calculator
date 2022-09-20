import fixedCalcultions from "hooks/fixedCalculations";
import { AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinHectare = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {

    const { general, recoverOfTopSoll } = fixedCalcultions(country_region)
    const { hectare } = recoverOfTopSoll
    const { densityGold, excavationGoldLoss, cavaAverageProductivity } = general
<<<<<<< HEAD

    console.log('convertAllinHectare', densityGold, excavationGoldLoss, cavaAverageProductivity )
=======
>>>>>>> ce473f6af1778be2fcf67a4e591bede8aa56de5d

    //const densityGold = 2.76;
    //const excavationGoldLoss = 2;
    //const cavaAverageProductivity = 0.4;
    const sterileMineralRelation = 7;
    const overflow = 12;

    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        //const quantityOfGoldGramsPerYearWell = 23700;
        // const goldGrass = quantityOfGoldGramsPerYearWell * valueLikeMining;
        // const turnedSoilTon = goldGrass / cavaAverageProductivity;
        // const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
        // const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
        // const volumeWithoutLoss = toSoilUpTurned / densityGold;
        // const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
        // const affectedAreaM2 = lossyVolume / pitDepth;
        // const hectare = affectedAreaM2 / 10000;
        // const hectareOverflow = hectare * overflow;
        return hectare
        
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
