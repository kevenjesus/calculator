import { FERRY, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "../consts";

const neuroSymptomsGarimpeiro = (likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold) => {
    
    const DALY1Cost = 103599;
    const weightNeuroDisabilityGoldminers = 0.368;
    const amountOfGoldminersYear = 150.45;
    const neuroGoldminersProblems = 0.72;
    const neuroTreatmentCostPerGoldMiner = 2244;
    const gramGoldByYearWell = 23700;
    const goldenGrassPerMonthFerry = 302;
    
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) { //Input Anos de garimpo
        const goldenGrass = gramGoldByYearWell * valueLikeMining;
        const qtdTotalGoldMiners = goldenGrass / amountOfGoldminersYear;
        const qtdOfMinersAffected = neuroGoldminersProblems * qtdTotalGoldMiners;
        const neuroGoldMinersTreatmentCost = neuroTreatmentCostPerGoldMiner * qtdOfMinersAffected;
	
        const weightNeuroDisabilityGoldminersQtdGoldDiggers = weightNeuroDisabilityGoldminers * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * weightNeuroDisabilityGoldminersQtdGoldDiggers;
        const toCostDALYGoldDigger = DALY1Cost * dalyYearsProspectors;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return toGoldMinersCost

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING) { //Input Meses de garimpo
        const goldenGrass = goldenGrassPerMonthFerry * valueLikeMining;
        const tonumberOfGoldMiners = goldenGrass / amountOfGoldminersYear;
        const numberOfMinersAffected = neuroGoldminersProblems * tonumberOfGoldMiners;
        const neuroGoldMinersTreatmentCost = neuroTreatmentCostPerGoldMiner * numberOfMinersAffected;

        const weightNeuroDisabilityGoldminers_QtdGarimpeiros = weightNeuroDisabilityGoldminers  * tonumberOfGoldMiners;
        const DALYyearsGoldMiner = txPrevalence * weightNeuroDisabilityGoldminers_QtdGarimpeiros;
        const toCostDALYGoldMiners =  DALY1Cost  * DALYyearsGoldMiner;
        const toCostGoldMiners = toCostDALYGoldMiners  + neuroGoldMinersTreatmentCost;
        return toCostGoldMiners

    }else {
        const qtdTotalGoldMiners = gold / amountOfGoldminersYear;
        const qtdOfMinersAffected = qtdTotalGoldMiners * neuroGoldminersProblems;
        const neuroGoldMinersTreatmentCost = qtdOfMinersAffected * neuroTreatmentCostPerGoldMiner;
	
        const weightNeuroDisabilityGoldminersQtdGoldDiggers = weightNeuroDisabilityGoldminers * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * weightNeuroDisabilityGoldminersQtdGoldDiggers;
        const toCostDALYGoldDigger = dalyYearsProspectors * DALY1Cost;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return toGoldMinersCost
    }

}

export default neuroSymptomsGarimpeiro