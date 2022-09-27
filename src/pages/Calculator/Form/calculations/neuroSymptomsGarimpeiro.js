import fixedCalcultions from "hooks/fixedCalculations";
import { FERRY, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "../consts";

const neuroSymptomsGarimpeiro = (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold) => {

    const { general, neuroSymptomsGarimpeiro } = fixedCalcultions(country_region)
    const { aDALYUSD, quantityOfGoldGramsPerYearWell, prodGoldMonthFerry } = general
    const { amountOfGoldminersYear, neuroTreatmentCostPerGoldMinerUSD } = neuroSymptomsGarimpeiro
    
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
        const neuroGoldMinersTreatmentCost = neuroTreatmentCostPerGoldMinerUSD * qtdOfMinersAffected;
	
        const weightNeuroDisabilityGoldminersQtdGoldDiggers = weightNeuroDisabilityGoldminers * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * weightNeuroDisabilityGoldminersQtdGoldDiggers;
        const toCostDALYGoldDigger = aDALYUSD * dalyYearsProspectors;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return toGoldMinersCost

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING) { //Input Meses de garimpo
        const goldenGrass = prodGoldMonthFerry * valueLikeMining;
        const tonumberOfGoldMiners = goldenGrass / amountOfGoldminersYear;
        const numberOfMinersAffected = txPrevalence * tonumberOfGoldMiners;
        const neuroGoldMinersTreatmentCost = neuroTreatmentCostPerGoldMinerUSD * numberOfMinersAffected;

        const weightNeuroDisabilityGoldminers_QtdGarimpeiros = weightNeuroDisabilityGoldminers  * tonumberOfGoldMiners;
        const DALYyearsGoldMiner = txPrevalence * weightNeuroDisabilityGoldminers_QtdGarimpeiros;
        const toCostDALYGoldMiners =  aDALYUSD  * DALYyearsGoldMiner;
        const toCostGoldMiners = toCostDALYGoldMiners  + neuroGoldMinersTreatmentCost;
        return toCostGoldMiners

    }else {
        const qtdTotalGoldMiners = gold / amountOfGoldminersYear;
        const qtdOfMinersAffected = qtdTotalGoldMiners * txPrevalence;
        const neuroGoldMinersTreatmentCost = qtdOfMinersAffected * neuroTreatmentCostPerGoldMinerUSD;
	
        const weightNeuroDisabilityGoldminersQtdGoldDiggers = weightNeuroDisabilityGoldminers * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * weightNeuroDisabilityGoldminersQtdGoldDiggers;
        const toCostDALYGoldDigger = dalyYearsProspectors * aDALYUSD;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return toGoldMinersCost
    }

}

export default neuroSymptomsGarimpeiro