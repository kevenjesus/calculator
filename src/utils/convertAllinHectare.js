import fixedCalcultions from "hooks/fixedCalculations";
import { AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinHectare = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {

    const { general, recoverOfTopSoll } = fixedCalcultions(country_region)
    const { hectare } = recoverOfTopSoll
    const { densityGold, excavationGoldLoss, cavaAverageProductivity } = general

    //const densityGold = 2.76;
    //const excavationGoldLoss = 2;
    //const cavaAverageProductivity = 0.4;
    const sterileMineralRelation = 7;
    const overflow = 12;

    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        const quantityOfGoldGramsPerYearWell = 23700;
        const goldGrass = quantityOfGoldGramsPerYearWell * valueLikeMining;
        const turnedSoilTon = goldGrass / cavaAverageProductivity;
        const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
        const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
        const volumeWithoutLoss = toSoilUpTurned / densityGold;
        const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / pitDepth;
        const hectare = affectedAreaM2 / 10000;
        const proporcaoKgporHectare = goldGrass * hectare
        console.log('proporcaoKgporHectare', proporcaoKgporHectare)
        const hectareOverflow = hectare * overflow;
        console.log('hectare', hectareOverflow)
        return {
            proporcaoKgporHectare,
            value: hectareOverflow
        }
        
    }else if(likeMining === PIT && AMOUNT_GOLD){ 
        //const hectare = 0.31;
        const proporcaoKgporHectare = valueLikeMining / hectare
        console.log('proporcaoKgporHectare', proporcaoKgporHectare)
        const hectareOverflow = hectare * overflow;
        console.log('hectare', hectareOverflow)
        return {
            proporcaoKgporHectare,
            value: hectareOverflow
        }
    }else if (typeValueLikeMining === AMOUNT_GOLD){
        const turnedSoilTon = valueLikeMining / cavaAverageProductivity;
        const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
        const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
        const volumeWithoutLoss = toSoilUpTurned / densityGold;
        const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / pitDepth;
        const hectare = affectedAreaM2 / 10000;
        const proporcaoKgporHectare = valueLikeMining / hectare
        console.log('proporcaoKgporHectare', proporcaoKgporHectare)
        const hectareOverflow = hectare * overflow;
        console.log('hectare', hectareOverflow)
        return {
            proporcaoKgporHectare,
            value: hectareOverflow
        }
    }else if(likeMining === FERRY){
        return {
            proporcaoKgporHectare: 0,
            value: 0
        }
    }else{
        const hectare = valueLikeMining
        const sterileOreRatio = 7;
        //const densityGold = 2.76;
        //const excavationGoldLoss = 2;
       // const cavaAverageProductivity = 0.4;
        const affectedAreaM2 = hectare * 10000;
        const lossyVolume = pitDepth * affectedAreaM2;
        const volumeWithoutLoss = lossyVolume / excavationGoldLoss;
        const toSoilUpturned = densityGold * volumeWithoutLoss;
        const calculationBaseTon = toSoilUpturned / (sterileOreRatio + 1);
        const revolvedMineralTon = calculationBaseTon * 1;
        const goldGrass = cavaAverageProductivity * revolvedMineralTon;
        const proporcaoKgporHectare = goldGrass / hectare
        console.log('proporcaoKgporHectare', proporcaoKgporHectare)
        console.log('hectare', hectare)
        return {
            proporcaoKgporHectare,
            value: hectare
        }    }

}
export default convertAllinHectare 
