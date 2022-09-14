import fixedCalcultions from "hooks/fixedCalculations";

const goldToHecatere = (gold, pitDepth, country_region) => {
    const { general } = fixedCalcultions(country_region)
    const { densityGold, excavationGoldLoss, cavaAverageProductivity } = general
    const sterileMineralRelation = 7;
    //const densityGold = 2.76;
    //const excavationGoldLoss = 2;
    //const cavaAverageProductivity = 0.4;
    const turnedSoilTon = gold / cavaAverageProductivity;
    const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
    const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
    const volumeWithoutLoss = toSoilUpTurned / densityGold;
    const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
    const affectedAreaM2 = lossyVolume / pitDepth;
    const hectare = affectedAreaM2 / 10000;

    return Math.round(hectare * 100) / 100
}

export default goldToHecatere;