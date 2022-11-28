import fixedCalcultions from "hooks/fixedCalculations";
import { FERRY, QTD_FERRY, PIT, YEARS_OF_MINING } from "../consts";

const neuroSymptomsGarimpeiro = (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold) => {

    const { general, neuroSymptomsGarimpeiro } = fixedCalcultions(country_region)
    const { aDALYUSD, quantityOfGoldGramsPerYearWell, prodGoldMonthFerry } = general
    const { amountOfGoldminersYear, neuroTreatmentCostPerGoldMinerUSD } = neuroSymptomsGarimpeiro

    //console.log('neuroSymptomsGarimpeiro', aDALYUSD, quantityOfGoldGramsPerYearWell, prodGoldMonthFerry, amountOfGoldminersYear, neuroTreatmentCostPerGoldMinerUSD)
    
    //const aDALYUSD = 103599;
    const weightNeuroDisabilityGoldminers = 0.368;
    //const amountOfGoldminersYear = 150.45;
    // const neuroTreatmentCostPerGoldMinerUSD = 2244;
    //const gramGoldByYearWell = 23700;
    //const goldenGrassPerMonthFerry = 302;
    
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) { //Input Anos de garimpo
        const goldenGrass = quantityOfGoldGramsPerYearWell * valueLikeMining;
        const qtdTotalGoldMiners = goldenGrass / amountOfGoldminersYear;
        const qtdOfMinersAffected = txPrevalence * qtdTotalGoldMiners;
        //console.log('Quantidade de garimpeiros afetados', qtdOfMinersAffected)
        const neuroGoldMinersTreatmentCost = neuroTreatmentCostPerGoldMinerUSD * qtdOfMinersAffected;
	
        const weightNeuroDisabilityGoldminersQtdGoldDiggers = weightNeuroDisabilityGoldminers * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * weightNeuroDisabilityGoldminersQtdGoldDiggers;
        const toCostDALYGoldDigger = aDALYUSD * dalyYearsProspectors;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return {
            qtdOfMinersAffected,
            value: toGoldMinersCost
        }

    }else if (likeMining === FERRY && typeValueLikeMining === QTD_FERRY) { //Input Meses de garimpo TROCAR POR QUANTIDADE DE BALSAS

        /*Padrão por mês de garimpo*/

        // const goldenGrass = prodGoldMonthFerry * valueLikeMining;
        // const tonumberOfGoldMiners = goldenGrass / amountOfGoldminersYear;
        // const qtdOfMinersAffected = txPrevalence * tonumberOfGoldMiners;
        // //console.log('Quantidade de garimpeiros afetados', qtdOfMinersAffected)
        // const neuroGoldMinersTreatmentCost = neuroTreatmentCostPerGoldMinerUSD * qtdOfMinersAffected;

        // const weightNeuroDisabilityGoldminers_QtdGarimpeiros = weightNeuroDisabilityGoldminers  * tonumberOfGoldMiners;
        // const DALYyearsGoldMiner = txPrevalence * weightNeuroDisabilityGoldminers_QtdGarimpeiros;
        // const toCostDALYGoldMiners =  aDALYUSD  * DALYyearsGoldMiner;
        // const toCostGoldMiners = toCostDALYGoldMiners  + neuroGoldMinersTreatmentCost;
        // console.log('toCostGoldMiners', toCostGoldMiners)

        /*Padrão por número de balsas fixo a 1 ano de garimpo*/

        const tempoFixo1Ano = 12
        const goldenGrass = prodGoldMonthFerry * tempoFixo1Ano;
        const tonumberOfGoldMiners = goldenGrass / amountOfGoldminersYear;
        const qtdOfMinersAffected = txPrevalence * tonumberOfGoldMiners;
        //console.log('Quantidade de garimpeiros afetados', qtdOfMinersAffected)
        const neuroGoldMinersTreatmentCost = neuroTreatmentCostPerGoldMinerUSD * qtdOfMinersAffected;

        const weightNeuroDisabilityGoldminers_QtdGarimpeiros = weightNeuroDisabilityGoldminers  * tonumberOfGoldMiners;
        const DALYyearsGoldMiner = txPrevalence * weightNeuroDisabilityGoldminers_QtdGarimpeiros;
        const toCostDALYGoldMiners =  aDALYUSD  * DALYyearsGoldMiner;
        const somaCostDALYeNeuroGoldMiners = toCostDALYGoldMiners  + neuroGoldMinersTreatmentCost;
        const toCostGoldMiners = somaCostDALYeNeuroGoldMiners * valueLikeMining; // valuelikemining = QUANTIA DE BALSAS
        //console.log('toCostGoldMiners', toCostGoldMiners)

        return {
            qtdOfMinersAffected,
            value: toCostGoldMiners
        }

    }else {
        const qtdTotalGoldMiners = gold / amountOfGoldminersYear;
        const qtdOfMinersAffected = qtdTotalGoldMiners * txPrevalence;
        //console.log('Quantidade de garimpeiros afetados', qtdOfMinersAffected)
        const neuroGoldMinersTreatmentCost = qtdOfMinersAffected * neuroTreatmentCostPerGoldMinerUSD;
	
        const weightNeuroDisabilityGoldminersQtdGoldDiggers = weightNeuroDisabilityGoldminers * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * weightNeuroDisabilityGoldminersQtdGoldDiggers;
        const toCostDALYGoldDigger = dalyYearsProspectors * aDALYUSD;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return {
            qtdOfMinersAffected,
            value: toGoldMinersCost
        }
    }
}

export default neuroSymptomsGarimpeiro