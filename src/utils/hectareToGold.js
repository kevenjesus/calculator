import fixedCalcultions from "hooks/fixedCalculations";

const hectareToGold = (hectare, pitdepth, country_region) => {
    const { general } = fixedCalcultions(country_region)
    const { densityGold, excavationGoldLoss, cavaAverageProductivity } = general
    const sterileOreRatio = 7;
    //const densityGold = 2.76;
    //const excavationGoldLoss = 2;
    //const cavaAverageProductivity = 0.4;
    const affectedAreaM2 = hectare*10000
    const lossyVolume = pitdepth * affectedAreaM2
    const volumeWithoutLoss = lossyVolume / excavationGoldLoss
    const toSoilUpturned = densityGold * volumeWithoutLoss
    const calculationBaseTon = toSoilUpturned / (sterileOreRatio + 1) 
    const revolvedMineralTon = calculationBaseTon * 1
    const goldGrass = cavaAverageProductivity * revolvedMineralTon
    return goldGrass;
}

export const goldenGramForHectare = (hectare, gold) => {
    
    const goldenGramForHectare = hectare / gold;
    return goldenGramForHectare

}

export default hectareToGold