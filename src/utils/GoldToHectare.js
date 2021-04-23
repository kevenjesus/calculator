const goldToHecatere = (gold, pitDepth) => {
    const sterileMineralRelation = 7;
    const goldDensity = 2.76;
    const excavationGoldLoss = 2;
    const averageProductivityCava = 0.4;
    const turnedSoilTon = gold / averageProductivityCava;
    const turnedSterileTon = turnedSoilTon * sterileMineralRelation;
    const toSoilUpTurned = turnedSoilTon + turnedSterileTon;
    const volumeWithoutLoss = toSoilUpTurned / goldDensity;
    const lossyVolume = volumeWithoutLoss * excavationGoldLoss;
    const affectedAreaM2 = lossyVolume / pitDepth;
    const hectare = affectedAreaM2 / 10000;

    return Math.round(hectare * 100) / 100
}

export default goldToHecatere;