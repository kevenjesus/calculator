
const neuroSymptomsGarimpeiro = (gold, txPrevalence) => {
    

    const UmDalyReais = 103599

    // TRATAMENTO - sintomas neuropscicológicos em garimpeiros
    const qtdGramsGoldDiggerYear = 150.45;
    const qtdTotalGoldMiners = gold / qtdGramsGoldDiggerYear;
    const neuroGoldDiggersProblems = 0.72;
    const qtdOfMinersAffected = neuroGoldDiggersProblems * qtdTotalGoldMiners;
    const neuroTreatmentByGoldDigger  = 2244;
    const neuroGoldMinersTreatmentCost = neuroTreatmentByGoldDigger * qtdOfMinersAffected;

    // DALY - sintomas neuropscicológicos em garimpeiros	

    const weightDisabilityNeuroProspectors = 0.368;
    const weightDisabilityNeuroProspectorsQtdGoldDiggers = weightDisabilityNeuroProspectors * qtdTotalGoldMiners;
    const dalyYearsProspectors = txPrevalence * weightDisabilityNeuroProspectorsQtdGoldDiggers;
    const toCostDALYGoldDigger = UmDalyReais * dalyYearsProspectors;
    
    const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
    return toGoldMinersCost

}

export default neuroSymptomsGarimpeiro