import { FERRY, PIT, YEARS_OF_MINING } from "../consts";

const CONSERVATIVE = 0.29

const soilMercuryRemediation = (likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold) => {
    

    const quantityOfGramsGoldYearWell = 23700;
    const HgAuRatio = 2.6;
    const lossPercentHgInSoil = 0.088;
    const HgContainedSoilinGrassPerTon = 0.24;
    const remediationCostBRLPerTonOfSoil = 188;
    const densidadeOuro = 2.76;

    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) { //Input anos de garimpo
        const amountOfTotalGoldWell = quantityOfGramsGoldYearWell * valueLikeMining;
        const amountOfHgDumpedintoSoilerGold = lossPercentHgInSoil * HgAuRatio;
        const amountOfHgDumpedintoSoilerGoldInGrams = amountOfHgDumpedintoSoilerGold * amountOfTotalGoldWell;
        const contaminatedSoilTon = amountOfHgDumpedintoSoilerGoldInGrams / HgContainedSoilinGrassPerTon;
        const M3solocontaminadoHg = contaminatedSoilTon / densidadeOuro;
        const toCostOfSoilHgRemediation = remediationCostBRLPerTonOfSoil * M3solocontaminadoHg;
        return toCostOfSoilHgRemediation

    }else if (likeMining === FERRY) {
        const toCostOfSoilHgRemediation = 0
        return toCostOfSoilHgRemediation

    }else {
        const lossPercentHgInSoil = txPrevalence === CONSERVATIVE ? 0.088 : 0.14;
        const amountOfHgDumpedintoSoilerGold = lossPercentHgInSoil * HgAuRatio;
        const toQuantityHgDumpedSoil = amountOfHgDumpedintoSoilerGold * gold;
        const contaminatedSoilTon = toQuantityHgDumpedSoil / HgContainedSoilinGrassPerTon;
        const M3solocontaminadoHg = contaminatedSoilTon / densidadeOuro;
        const toCostOfSoilHgRemediation = remediationCostBRLPerTonOfSoil * M3solocontaminadoHg;
        return toCostOfSoilHgRemediation
        
    }
}
export default soilMercuryRemediation