import fixedCalcultions from "hooks/fixedCalculations";
import { PIT, YEARS_OF_MINING, AMOUNT_GOLD, ALLUVIUM, IMPACTED_AREA, FERRY, MONTHS_OF_MINING } from "pages/Calculator/Form/consts";

const cubicMeters = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth, motorPower) => {

    const { general, dredgingAndRiverSediments } = fixedCalcultions(country_region, motorPower)
    const { densityGold, excavationGoldLoss, quantityOfGoldGramsPerYearWell } = general
    const { prodOuroKgporMes, productionSedimentTurnsFeatherTonnesPerMonthGold } = dredgingAndRiverSediments

    
    const sterileOreEnhancement = 7;
    //const densityGold = 2.76;
   // const excavationGoldLoss = 2;
    const pitProductivity = 0.4;
    const productivityGoldMiningTon = 0.4;
    //const quantityOfGoldGramsPerYearWell = 23700;
    let volumeM3
   
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        const toGoldGramQuantityWell = quantityOfGoldGramsPerYearWell * valueLikeMining;
        const revolvedSoloTon = toGoldGramQuantityWell / productivityGoldMiningTon;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = upturnedSterileTon + revolvedSoloTon;
        const losslessVolume = toUpturnedSoil / densityGold;
        volumeM3 = losslessVolume * excavationGoldLoss;
        return `${Math.round(volumeM3)} m³`

    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD){
        const revolvedSoloTon = valueLikeMining / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / densityGold;
        volumeM3 = losslessVolume * excavationGoldLoss;
        return `${Math.round(volumeM3 * 100) / 100} m³`

    }else if (likeMining === ALLUVIUM && typeValueLikeMining === AMOUNT_GOLD){
        const revolvedSoloTon = valueLikeMining / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / densityGold;
        volumeM3 = losslessVolume * excavationGoldLoss;
        return `${Math.round(volumeM3 * 100) / 100} m³`

    }else if (likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        const affectedAreaM2 = valueLikeMining * 10000;
        volumeM3 = pitDepth * affectedAreaM2;
        return `${Math.round(volumeM3 * 100) / 100} m³` 

    }else if (likeMining === FERRY && typeValueLikeMining === AMOUNT_GOLD){
        //const productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262;
        const prodSedimentoViraPlumaTon = productionSedimentTurnsFeatherTonnesPerMonthGold * valueLikeMining;
        return `${Math.round(prodSedimentoViraPlumaTon * 100) / 100} ton` 

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING){

        /*Padrão por mês de garimpo*/

        // //const prodOuroKgporMes = 0.00604;
        // //const averageMotorPower = 54.4;
        // //const productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262;
        // const prodOuroGrporMes = prodOuroKgporMes * 1000;
        // const prodOuroTotalBalsaDragagem = motorPower * valueLikeMining * prodOuroGrporMes;
        // const prodSedimentoViraPlumaTon = productionSedimentTurnsFeatherTonnesPerMonthGold * prodOuroTotalBalsaDragagem * valueLikeMining;

        /*Padrão por número de balsas fixo a 1 ano de garimpo*/

        //const prodOuroKgporMes = 0.00604;
        //const averageMotorPower = 54.4;
        //const productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262;

        const tempoFixo1Ano = 12
        const ProducaoSedimentoViraPlumaTonporMes = 38.82
        const prodOuroGrporMes = prodOuroKgporMes * 1000;
        const prodOuroTotalBalsaDragagem = motorPower * tempoFixo1Ano * prodOuroGrporMes;
        console.log('motorPower', motorPower)
        const prodSedimentoViraPlumaTon = ProducaoSedimentoViraPlumaTonporMes * prodOuroTotalBalsaDragagem * valueLikeMining;

        return `${Math.round(prodSedimentoViraPlumaTon * 100) / 100} ton`
    }
}
export default cubicMeters 

