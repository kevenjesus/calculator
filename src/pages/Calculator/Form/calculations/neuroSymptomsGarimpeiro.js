import { FERRY, PIT } from "../consts";

const neuroSymptomsGarimpeiro = (gold, txPrevalence, tipoGarimpo, tempoGarimpo) => {

    const Custo1DALY = 103599;
    const PesoIncapacidadeNeuroGarimpeiros = 0.368;
    const QtdGramasGarimpeiroAno = 150.45;
    const ProbNeuroGarimpeiros = 0.72;
    const CustoTratamentoNeuroporGarimpeiro = 2244;
    const GramaOuroporAnoPoco = 23700;
    const GramaOuroporMesBalsa = 302;
    


    if (tipoGarimpo === PIT && tempoGarimpo) { //Input Anos de garimpo
        
        // TRATAMENTO - sintomas neuropscicológicos em garimpeiros
        const GramaDeOuro = GramaOuroporAnoPoco * tempoGarimpo;
        const qtdTotalGoldMiners = GramaDeOuro / QtdGramasGarimpeiroAno;
        const qtdOfMinersAffected = ProbNeuroGarimpeiros * qtdTotalGoldMiners;
        const neuroGoldMinersTreatmentCost = CustoTratamentoNeuroporGarimpeiro * qtdOfMinersAffected;

        // DALY - sintomas neuropscicológicos em garimpeiros	
        const PesoIncapacidadeNeuroGarimpeirosQtdGoldDiggers = PesoIncapacidadeNeuroGarimpeiros * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * PesoIncapacidadeNeuroGarimpeirosQtdGoldDiggers;
        const toCostDALYGoldDigger = Custo1DALY * dalyYearsProspectors;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return toGoldMinersCost

    }else if (tipoGarimpo === FERRY && tempoGarimpo) { //Input Meses de garimpo

        //TRATAMENTO - sintomas neuropscicológicos em garimpeiros
        const GramaDeOuro = GramaOuroporMesBalsa * tempoGarimpo;
        const QtdeGarimpeirosTotal = GramaDeOuro / QtdGramasGarimpeiroAno;
        const QtdeGarimpeirosAfetados = ProbNeuroGarimpeiros * QtdeGarimpeirosTotal;
        const CustoTratamentoNeuroGarimpeiros = CustoTratamentoNeuroporGarimpeiro * QtdeGarimpeirosAfetados;

        //DALY - sintomas neuropscicológicos em garimpeiros
        const PesoIncapacidadeNeuroGarimpeiros_QtdGarimpeiros = PesoIncapacidadeNeuroGarimpeiros  * QtdeGarimpeirosTotal;
        const DALYAnosGarimpeiro = txPrevalence * PesoIncapacidadeNeuroGarimpeiros_QtdGarimpeiros;
        const CustoTotalDALYGarimpeiros =  Custo1DALY  * DALYAnosGarimpeiro;
        const CustoTotalGarimpeiros = CustoTotalDALYGarimpeiros  + CustoTratamentoNeuroGarimpeiros;
        return CustoTotalGarimpeiros

    }else {
        // TRATAMENTO - sintomas neuropscicológicos em garimpeiros
        const qtdTotalGoldMiners = gold / QtdGramasGarimpeiroAno;
        const qtdOfMinersAffected = qtdTotalGoldMiners * ProbNeuroGarimpeiros;
        const neuroGoldMinersTreatmentCost = qtdOfMinersAffected * CustoTratamentoNeuroporGarimpeiro;

        // DALY - sintomas neuropscicológicos em garimpeiros	
        const PesoIncapacidadeNeuroGarimpeirosQtdGoldDiggers = PesoIncapacidadeNeuroGarimpeiros * qtdTotalGoldMiners;
        const dalyYearsProspectors = txPrevalence * PesoIncapacidadeNeuroGarimpeirosQtdGoldDiggers;
        const toCostDALYGoldDigger = dalyYearsProspectors * Custo1DALY;
        const toGoldMinersCost = toCostDALYGoldDigger + neuroGoldMinersTreatmentCost;
        return toGoldMinersCost

    }

}

export default neuroSymptomsGarimpeiro