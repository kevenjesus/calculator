const hectareToGold = (hectare, pitdepth) => {
    const sterileOreRatio = 7;
    const goldDensity = 2.76;
    const excavationGoldLoss = 2;
    const averageProductivityCava = 0.4;
    const affectedAreaM2 = hectare*10000
    const lossyVolume = pitdepth * affectedAreaM2
    const volumeWithoutLoss = lossyVolume / excavationGoldLoss
    const toSoilUpturned = goldDensity * volumeWithoutLoss
    const calculationBaseTon = toSoilUpturned / (sterileOreRatio + 1) 
    const revolvedMineralTon = calculationBaseTon * 1
    const goldGrass = averageProductivityCava * revolvedMineralTon
    return goldGrass;
}

export const goldenGramForHectare = (hectare, gold) => {
    console.log('hectare', hectare, 'gold', gold)
    const goldenGramForHectare = hectare / gold;
    return goldenGramForHectare

}

export default hectareToGold