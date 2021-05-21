import { PIT, YEARS_OF_MINING, AMOUNT_GOLD, ALLUVIUM, IMPACTED_AREA, FERRY, MONTHS_OF_MINING } from "pages/Calculator/Form/consts";

const cubicMeters = (likeMining, typeValueLikeMining, valueLikeMining, pitDepth) => {

    
    const sterileOreEnhancement = 7;
    const goldDensity = 2.76;
    const excavationGoldLoss = 2;
    const pitProductivity = 0.4;
    const productivityGoldMiningTon = 0.4;
    const amountOfGoldGramsPerYearWell = 23700;
    let volumeM3
   
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        const toGoldGramQuantityWell = amountOfGoldGramsPerYearWell * valueLikeMining;
        console.log(toGoldGramQuantityWell)
        const revolvedSoloTon = toGoldGramQuantityWell / productivityGoldMiningTon;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = upturnedSterileTon + revolvedSoloTon;
        const losslessVolume = toUpturnedSoil / goldDensity;
        volumeM3 = losslessVolume * excavationGoldLoss;
        return volumeM3

    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD){
        const revolvedSoloTon = valueLikeMining / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / goldDensity;
        volumeM3 = losslessVolume * excavationGoldLoss;
        return volumeM3

    }else if (likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
        const revolvedSoloTon = valueLikeMining / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / goldDensity;
        volumeM3 = losslessVolume * excavationGoldLoss;
        return volumeM3

    }else if (likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        const affectedAreaM2 = valueLikeMining * 10000;
        volumeM3 = pitDepth * affectedAreaM2;
        return volumeM3

    }else if (likeMining === FERRY && typeValueLikeMining === AMOUNT_GOLD){
        const ProdSedimentoViraPlumaTonPorMes = 6.262;
        const prodSedimentoViraPlumaTon = ProdSedimentoViraPlumaTonPorMes * valueLikeMining;
        return prodSedimentoViraPlumaTon

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING){
        const prodOuroKgporMes = 0.00604;
        const potenciaMediaMotor = 54.4;
        const ProdSedimentoViraPlumaTonPorMes = 6.262;
        const prodOuroTotalBalsaDragagem = potenciaMediaMotor * valueLikeMining * prodOuroKgporMes;
        const prodSedimentoViraPlumaTon = ProdSedimentoViraPlumaTonPorMes * prodOuroTotalBalsaDragagem * valueLikeMining;
        return prodSedimentoViraPlumaTon
    }
}
export default cubicMeters 

