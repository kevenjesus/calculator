import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const soilMercuryRemediation = (gold, txPrevalence, likeMining, panningTime) => {

    const quantityOfGramsGoldYearWell = 23700;
    const HgAuRatio = 2.6;
    const lossPercentHgInSoil = 0.088;
    const HgContainedSoilinGrassPerTon = 0.24;
    const remediationCostBRLPerTonOfSoil = 1750;

    if (likeMining === PIT && panningTime) { //Input anos de garimpo
        const amountOfTotalGoldWell = quantityOfGramsGoldYearWell * panningTime;
        const amountOfHgDumpedintoSoilerGold = lossPercentHgInSoil * HgAuRatio;
        const amountOfHgDumpedintoSoilerGoldInGrams = amountOfHgDumpedintoSoilerGold * amountOfTotalGoldWell;
        const contaminatedSoilTon = amountOfHgDumpedintoSoilerGoldInGrams * HgContainedSoilinGrassPerTon;
        const toCostOfSoilHgRemediation = remediationCostBRLPerTonOfSoil * contaminatedSoilTon;
        return toCostOfSoilHgRemediation

    }else if (likeMining === FERRY) {
        const toCostOfSoilHgRemediation = 0
        return toCostOfSoilHgRemediation

    }else {
        const lossPercentHgInSoil = txPrevalence === CONSERVATIVE ? 0.088 : 0.14;
        const amountOfHgDumpedintoSoilerGold = lossPercentHgInSoil * HgAuRatio;
        const toQuantityHgDumpedSoil = amountOfHgDumpedintoSoilerGold * gold;
        const contaminatedSoilTon = toQuantityHgDumpedSoil * HgContainedSoilinGrassPerTon;
        const toCostOfSoilHgRemediation = contaminatedSoilTon * remediationCostBRLPerTonOfSoil
        return toCostOfSoilHgRemediation
        
    }
}
export default soilMercuryRemediation