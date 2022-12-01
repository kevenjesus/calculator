import fixedCalcultions from "hooks/fixedCalculations";
import { AMOUNT_GOLD, FERRY, PIT } from "pages/Calculator/Form/consts";
const convertAllinHectare = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {

    const { general, recoverOfTopSoll } = fixedCalcultions(country_region)
    const { hectare } = recoverOfTopSoll
    const { densityGold, excavationGoldLoss, cavaAverageProductivity } = general


    const sterileMineralRelation = 7;
    const overflow = 12;

    if (likeMining === PIT) { 
        const hectareOverflow = hectare * overflow;
        //console.log('hectare', hectare)
        //console.log('hectareOverflow', hectareOverflow)
        return {
            hectare,
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
        const hectareOverflow = hectare * overflow;
        //console.log('hectare', hectare)
        //console.log('hectareOverflow', hectareOverflow)
        return {
            hectare,
            value: hectareOverflow
        }
    }else if(likeMining === FERRY){
        return {
            hectare,
            value: 0
        }
    }else{
        const hectare = valueLikeMining;
        const hectareOverflow = hectare * overflow;
        //console.log('hectare', hectare)
        //console.log('hectareOverflow', hectareOverflow)
        return {
            hectare,
            value: hectareOverflow
        }    
    }

}
export default convertAllinHectare 
