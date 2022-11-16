import fixedCalcultions from "hooks/fixedCalculations";
import { FERRY, PIT, YEARS_OF_MINING } from "../consts";

const CONSERVATIVE = 0.29

const soilMercuryRemediation = (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold) => {
    
    const { general, soilMercuryRemediation } = fixedCalcultions(country_region)
    const { quantityOfGoldGramsPerYearWell, HgAuRatio } = general
    const { lossPercentHgInSoil, lossPercentHgInSoil_conservative, HgContainedSoilinGrassPerTon, DensidadeSolo, remediationCostUSDPerTonOfSoil } = soilMercuryRemediation

    // console.log(
    //     'quantityOfGoldGramsPerYearWell', quantityOfGoldGramsPerYearWell,
    //     'HgAuRatio',  HgAuRatio,
    //     'lossPercentHgInSoil', lossPercentHgInSoil,
    //     'lossPercentHgInSoil_conservative', lossPercentHgInSoil_conservative,
    //     'HgContainedSoilinGrassPerTon', HgContainedSoilinGrassPerTon,
    //     'DensidadeSolo', DensidadeSolo,
    //     'remediationCostUSDPerTonOfSoil', remediationCostUSDPerTonOfSoil)

    //const quantityOfGoldGramsPerYearWell = 23700;
    //const HgAuRatio = 2.6;
    //const lossPercentHgInSoil = 0.088;
    //const HgContainedSoilinGrassPerTon = 0.24;
    //const remediationCostUSDPerTonOfSoil = 188;
    //const DensidadeSolo = 2.76;

    const lossPercentHgInSoilValue = txPrevalence === CONSERVATIVE ? lossPercentHgInSoil_conservative : lossPercentHgInSoil;
    const amountOfHgDumpedintoSoilerGold = lossPercentHgInSoilValue * HgAuRatio;

    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) { //Input anos de garimpo
        const amountOfTotalGoldWell = quantityOfGoldGramsPerYearWell * valueLikeMining;
        const amountOfHgDumpedintoSoilerGoldInGrams = amountOfHgDumpedintoSoilerGold * amountOfTotalGoldWell;
        const contaminatedSoilTon = amountOfHgDumpedintoSoilerGoldInGrams / HgContainedSoilinGrassPerTon;
        const M3solocontaminadoHg = contaminatedSoilTon / DensidadeSolo;
        const toCostOfSoilHgRemediation = remediationCostUSDPerTonOfSoil * M3solocontaminadoHg;
        return toCostOfSoilHgRemediation

    }else if (likeMining === FERRY) {
        const toCostOfSoilHgRemediation = 0
        return toCostOfSoilHgRemediation

    }else {
        const toQuantityHgDumpedSoil = amountOfHgDumpedintoSoilerGold * gold;
        const contaminatedSoilTon = toQuantityHgDumpedSoil / HgContainedSoilinGrassPerTon;
        const M3SoloContaminadoHg = contaminatedSoilTon / DensidadeSolo;
        
        const toCostOfSoilHgRemediation = remediationCostUSDPerTonOfSoil * M3SoloContaminadoHg;
        return toCostOfSoilHgRemediation
        
    }
}
export default soilMercuryRemediation