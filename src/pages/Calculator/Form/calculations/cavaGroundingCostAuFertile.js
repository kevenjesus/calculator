
import { FERRY, PIT } from "../consts";

const cavaGroundingCostAuFertile = (hectare, gold, pitDepth, DistanciaGarimpoCentroUrbanoFrete, tipoGarimpo, tempoGarimpo) => {
    
    if (tipoGarimpo === FERRY) {
        const CustoTotalAterramentoFertilComFrete = 0
        return CustoTotalAterramentoFertilComFrete
        
    }else if (tipoGarimpo === PIT && tempoGarimpo) {
        const ProfundidadeMediaTerraFertil = 0.4;
        const ProdutividadeGarimpoTonMeinerio = 0.4;
        const CustoAterramentoCavaFertil = 12.7;
        const QtdeEscavadeiraM3porHora = 160;
        const CustoEscavadeiraporKm = 3.8
        const HorasEscavadeiraDia = 10;
        const KmRodadoporLitro = 2.5;
        const DensidadeOuro = 2.76
        const SalarioMedioMotoristaFreteporKm = 2.22;
        const PreçoLitroDiesel = 3.24;
        const DiasAno = 365;
        const RelacaoMinerioEsteril = 7;
        const PerdaOuroEscavacao = 2;
        const QtdeGramasOuroPorAnoPoço = 23700;
        const ProfundidadeMediaCava = 10;


        const QtdeGramasOuroTotalPoço = QtdeGramasOuroPorAnoPoço * tempoGarimpo;
        const TonSoloRevolvida = QtdeGramasOuroTotalPoço / ProdutividadeGarimpoTonMeinerio;

        const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
        const TotalSoloRevolvida = TonEsterilRevolvida + TonSoloRevolvida;
        const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro;
        const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
        const AreaafetadaM2 = VolumeComPerda / ProfundidadeMediaCava;
        const VolumeTerraFertil = ProfundidadeMediaTerraFertil * AreaafetadaM2

        const CustoTotalAterramentoTerraFertilSemFrete = VolumeTerraFertil * CustoAterramentoCavaFertil; 
        const QtdeEscavadeiraM3poranoTerraFertil = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
        const QtdeEscavadeirasFertil = (VolumeTerraFertil / QtdeEscavadeiraM3poranoTerraFertil) < 1 ? 1 : Math.ceil(VolumeTerraFertil / QtdeEscavadeiraM3poranoTerraFertil); //ok
        const CustoTransporteFreteTotalEscavadeiraFertil = DistanciaGarimpoCentroUrbanoFrete * CustoEscavadeiraporKm;
        const QtdeLitrosDieselConsumidoFertil = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoCombustivelFreteFertil =	PreçoLitroDiesel * QtdeLitrosDieselConsumidoFertil;
        const CustoFretecomMotoristaFertil = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoTotalFreteFertilIda = CustoFretecomMotoristaFertil + CustoCombustivelFreteFertil + CustoTransporteFreteTotalEscavadeiraFertil;
        const CustoTotalFreteAterramentoFertildaeVolta = CustoTotalFreteFertilIda * 2;
        const CustoTotalFreteAterramentoFertilFinal = CustoTotalFreteAterramentoFertildaeVolta * QtdeEscavadeirasFertil;
        const CustoTotalAterramentoFertilComFrete = CustoTotalFreteAterramentoFertilFinal + CustoTotalAterramentoTerraFertilSemFrete;

        return Math.round(CustoTotalAterramentoFertilComFrete * 100) / 100

    }else if (tipoGarimpo === PIT && hectare){

        const ProfundidadeMediaTerraFertil = 0.4;
        const CustoAterramentoCavaFertil = 12.7;
        const QtdeEscavadeiraM3porHora = 160;
        const CustoEscavadeiraporKm = 3.8
        const HorasEscavadeiraDia = 10;
        const KmRodadoporLitro = 2.5;
        const SalarioMedioMotoristaFreteporKm = 2.22;
        const PreçoLitroDiesel = 3.24;
        const DiasAno = 365;
        const ProfundidadeMediaCavaPoco = 10;
        const RelacaoMinerioEsteril = 7;
        const DensidadeOuro = 2.76;
        const PerdaOuroEscavacao = 2;
        const produtividadeMediaCava = 0.4;
        const TonSoloRevolvida = gold / produtividadeMediaCava;
        const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
        const TotalSoloRevolvida = TonSoloRevolvida + TonEsterilRevolvida;
        const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro;
        const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
        const Areaafetadam2 = VolumeComPerda / ProfundidadeMediaCavaPoco;
        
        const VolumeTerraFertil = ProfundidadeMediaTerraFertil * Areaafetadam2;
        const CustoTotalAterramentoTerraFertilSemFrete = VolumeTerraFertil * CustoAterramentoCavaFertil;
        const QtdeEscavadeiraM3poranoTerraFertil = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
        const QtdeEscavadeirasFertil = (VolumeTerraFertil / QtdeEscavadeiraM3poranoTerraFertil) < 1 ? 1 : Math.ceil(VolumeTerraFertil / QtdeEscavadeiraM3poranoTerraFertil); //ok
        const CustoTransporteFreteTotalEscavadeiraFertil = DistanciaGarimpoCentroUrbanoFrete * CustoEscavadeiraporKm;
        const QtdeLitrosDieselConsumidoFertil = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoCombustivelFreteFertil =	PreçoLitroDiesel * QtdeLitrosDieselConsumidoFertil;
        const CustoFretecomMotoristaFertil = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoTotalFreteFertilIda = CustoFretecomMotoristaFertil + CustoCombustivelFreteFertil + CustoTransporteFreteTotalEscavadeiraFertil;
        const CustoTotalFreteAterramentoFertildaeVolta = CustoTotalFreteFertilIda * 2;
        const CustoTotalFreteAterramentoFertilFinal = CustoTotalFreteAterramentoFertildaeVolta * QtdeEscavadeirasFertil;
        const CustoTotalAterramentoFertilComFrete = CustoTotalFreteAterramentoFertilFinal + CustoTotalAterramentoTerraFertilSemFrete;

        return Math.round(CustoTotalAterramentoFertilComFrete * 100) / 100

    }else { 
        const ProfundidadeMediaTerraFertil = 0.4;
        const CustoAterramentoCavaFertil = 12.7;
        const QtdeEscavadeiraM3porHora = 160;
        const CustoEscavadeiraporKm = 3.8
        const HorasEscavadeiraDia = 10;
        const KmRodadoporLitro = 2.5;
        const SalarioMedioMotoristaFreteporKm = 2.22;
        const PreçoLitroDiesel = 3.24;
        const DiasAno = 365;
        const RelacaoMinerioEsteril = 7;
        const DensidadeOuro = 2.76;
        const PerdaOuroEscavacao = 2;
        const produtividadeMediaCava = 0.4;
        const TonSoloRevolvida = gold / produtividadeMediaCava;
        const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
        const TotalSoloRevolvida = TonSoloRevolvida + TonEsterilRevolvida;
        const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro;
        const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
        const Areaafetadam2 = VolumeComPerda / pitDepth;
        
        const VolumeTerraFertil = ProfundidadeMediaTerraFertil * Areaafetadam2;
        const CustoTotalAterramentoTerraFertilSemFrete = VolumeTerraFertil * CustoAterramentoCavaFertil;
        const QtdeEscavadeiraM3poranoTerraFertil = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
        const QtdeEscavadeirasFertil = (VolumeTerraFertil / QtdeEscavadeiraM3poranoTerraFertil) < 1 ? 1 : Math.ceil(VolumeTerraFertil / QtdeEscavadeiraM3poranoTerraFertil); //ok
        const CustoTransporteFreteTotalEscavadeiraFertil = DistanciaGarimpoCentroUrbanoFrete * CustoEscavadeiraporKm;
        const QtdeLitrosDieselConsumidoFertil = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoCombustivelFreteFertil =	PreçoLitroDiesel * QtdeLitrosDieselConsumidoFertil;
        const CustoFretecomMotoristaFertil = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoTotalFreteFertilIda = CustoFretecomMotoristaFertil + CustoCombustivelFreteFertil + CustoTransporteFreteTotalEscavadeiraFertil;
        const CustoTotalFreteAterramentoFertildaeVolta = CustoTotalFreteFertilIda * 2;
        const CustoTotalFreteAterramentoFertilFinal = CustoTotalFreteAterramentoFertildaeVolta * QtdeEscavadeirasFertil;
        const CustoTotalAterramentoFertilComFrete = CustoTotalFreteAterramentoFertilFinal + CustoTotalAterramentoTerraFertilSemFrete;
        return CustoTotalAterramentoFertilComFrete

    }


}

export default cavaGroundingCostAuFertile