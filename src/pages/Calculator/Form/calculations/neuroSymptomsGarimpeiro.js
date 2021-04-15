import { FERRY, PIT } from "../consts";

const neuroSymptomsGarimpeiro = (gold, txPrevalence, tipoGarimpo, MesesGarimpoBalsa, AnosGarimpoPoco) => {
    
        if (tipoGarimpo === PIT) { //Input Anos de garimpo
            const UmDalyReais = 103599;

            // TRATAMENTO - sintomas neuropscicológicos em garimpeiros
            const GramaOuroporAnoPoco = 23700;
            const GramaDeOuro = GramaOuroporAnoPoco * AnosGarimpoPoco;
            const qtdGramsGoldDiggerYear = 150.45;
            const qtdTotalGoldMiners = GramaDeOuro / qtdGramsGoldDiggerYear;
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

        }else if (tipoGarimpo === FERRY) { //Input Meses de garimpo

            //TRATAMENTO - sintomas neuropscicológicos em garimpeiros
            const GramaOuroporMesBalsa = 302;
            const QtdGramasGarimpeiroAno = 150.45;
            const ProbNeuroGarimpeiros = 0.72;
            const CustoTratamentoNeuroporGarimpeiro = 2244;
            const Custo1DALY = 103599;

            const GramaDeOuro = GramaOuroporMesBalsa * MesesGarimpoBalsa;
            const QtdeGarimpeirosTotal = GramaDeOuro / QtdGramasGarimpeiroAno;
            const QtdeGarimpeirosAfetados = ProbNeuroGarimpeiros * QtdeGarimpeirosTotal;
            const CustoTratamentoNeuroGarimpeiros = CustoTratamentoNeuroporGarimpeiro * QtdeGarimpeirosAfetados;

            //DALY - sintomas neuropscicológicos em garimpeiros

            const PesoIncapacidadeNeuroGarimpeiros = 0.368;
            const PesoIncapacidadeNeuroGarimpeiros_QtdGarimpeiros = PesoIncapacidadeNeuroGarimpeiros  * QtdeGarimpeirosTotal;
            const DALYAnosGarimpeiro = txPrevalence * PesoIncapacidadeNeuroGarimpeiros_QtdGarimpeiros;
            const CustoTotalDALYGarimpeiros =  Custo1DALY  * DALYAnosGarimpeiro;

            const CustoTotalGarimpeiros = CustoTotalDALYGarimpeiros  + CustoTratamentoNeuroGarimpeiros;
            return CustoTotalGarimpeiros

        }else {
            const UmDalyReais = 103599;

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

}

export default neuroSymptomsGarimpeiro