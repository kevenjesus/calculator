import { ALLUVIUM, FERRY, PIT } from "../consts";

const cavaGroundingCostAuNorm = (hectare , pitDepth, DistanciaGarimpoCentroUrbanoFrete, tipoGarimpo, AnosGarimpoPoço) => {

    let cavaGroundingCostAuNorm;
        if ( tipoGarimpo === ALLUVIUM ) { // Input por Ouro/Hectare

        const ProfundidadeMediaTerraFertil = 0.4;
        const CustoAterramentoCavaNormal = 1;
        const QtdeEscavadeiraM3porHora = 160;
        const CustoEscavadeiraporKm = 3.8;
        const HorasEscavadeiraDia = 10;
        const KmRodadoporLitro = 2.5;
        const SalarioMedioMotoristaFreteporKm = 2.22;
        const PreçoLitroDiesel = 3.24;
        const DiasAno = 365;


        const ProfundidadeMediaTerraNormal = pitDepth - ProfundidadeMediaTerraFertil;
        const Áreaafetada_m2 = hectare* 10000
        const VolumeTerraNormal = ProfundidadeMediaTerraNormal * Áreaafetada_m2;
        const CustoTotalAterramentoTerraNormalSemFrete = VolumeTerraNormal * CustoAterramentoCavaNormal;
        const QtdeEscavadeiraM3porano = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
        const QtdeEscavadeirasNormal =(VolumeTerraNormal / QtdeEscavadeiraM3porano) < 1 ? 1 : Math.ceil(VolumeTerraNormal / QtdeEscavadeiraM3porano);
        const CustoTransporteFreteTotalEscavadeiraNormal = DistanciaGarimpoCentroUrbanoFrete * CustoEscavadeiraporKm;
        const QtdeLitrosDieselConsumido = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoFretecomMotoristaNormal = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoCombustivelFreteNormal = PreçoLitroDiesel * QtdeLitrosDieselConsumido;
        const CustoTotalFreteNormalIda = CustoFretecomMotoristaNormal + CustoCombustivelFreteNormal + CustoTransporteFreteTotalEscavadeiraNormal;
        const CustoTotalFreteAterramentoNormalIdaeVolta = CustoTotalFreteNormalIda * 2;
        const CustoTotalFreteAterramentoNormalFinal = CustoTotalFreteAterramentoNormalIdaeVolta * QtdeEscavadeirasNormal;
        const CustoTotalAterramentoNormalComFrete = CustoTotalFreteAterramentoNormalFinal + CustoTotalAterramentoTerraNormalSemFrete;
        return CustoTotalAterramentoNormalComFrete

        }else if (tipoGarimpo === PIT) { // Input por Ouro

        const ProfundidadeMediaTerraFertil = 0.4;
        const CustoAterramentoCavaNormal = 1;
        const QtdeEscavadeiraM3porHora = 160;
        const CustoEscavadeiraporKm = 3.8;
        const HorasEscavadeiraDia = 10;
        const KmRodadoporLitro = 2.5;
        const SalarioMedioMotoristaFreteporKm = 2.22;
        const PreçoLitroDiesel = 3.24;
        const DiasAno = 365;
        const ProfundidadeMediaCava = 10;


        const ProfundidadeMediaTerraNormal = ProfundidadeMediaCava - ProfundidadeMediaTerraFertil;
        const Áreaafetada_m2 = hectare* 10000
        const VolumeTerraNormal = ProfundidadeMediaTerraNormal * Áreaafetada_m2;
        const CustoTotalAterramentoTerraNormalSemFrete = VolumeTerraNormal * CustoAterramentoCavaNormal;
        const QtdeEscavadeiraM3porano = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
        const QtdeEscavadeirasNormal =(VolumeTerraNormal / QtdeEscavadeiraM3porano) < 1 ? 1 : Math.ceil(VolumeTerraNormal / QtdeEscavadeiraM3porano);
        const CustoTransporteFreteTotalEscavadeiraNormal = DistanciaGarimpoCentroUrbanoFrete * CustoEscavadeiraporKm;
        const QtdeLitrosDieselConsumido = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoFretecomMotoristaNormal = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoCombustivelFreteNormal = PreçoLitroDiesel * QtdeLitrosDieselConsumido;
        const CustoTotalFreteNormalIda = CustoFretecomMotoristaNormal + CustoCombustivelFreteNormal + CustoTransporteFreteTotalEscavadeiraNormal;
        const CustoTotalFreteAterramentoNormalIdaeVolta = CustoTotalFreteNormalIda * 2;
        const CustoTotalFreteAterramentoNormalFinal = CustoTotalFreteAterramentoNormalIdaeVolta * QtdeEscavadeirasNormal;
        const CustoTotalAterramentoNormalComFrete = CustoTotalFreteAterramentoNormalFinal + CustoTotalAterramentoTerraNormalSemFrete;
        return CustoTotalAterramentoNormalComFrete

        }else if (tipoGarimpo === PIT)  { //Input Anos de Garimpo

        const ProfundidadeMediaTerraFertil = 0.4;
        const CustoAterramentoCavaNormal = 1;
        const QtdeEscavadeiraM3porHora = 160;
        const CustoEscavadeiraporKm = 3.8;
        const HorasEscavadeiraDia = 10;
        const KmRodadoporLitro = 2.5;
        const SalarioMedioMotoristaFreteporKm = 2.22;
        const PreçoLitroDiesel = 3.24;
        const RelacaoMinerioEsteril = 7;
        const PerdaOuroEscavacao = 2;
        const DensidadeOuro = 2.76;
        const DiasAno = 365;
        const ProfundidadeMediaCava = 10;
        const QtdeGramasOuroPorAnoPoço = 23700;

        const QtdeGramasOuroTotalPoço = QtdeGramasOuroPorAnoPoço * AnosGarimpoPoço;
        const TonSoloRevolvida = QtdeGramasOuroTotalPoço /  ProfundidadeMediaCava;
        const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
        const TotalSoloRevolvida = TonSoloRevolvida + TonEsterilRevolvida;
        const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro;
        const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
        const Areaafetadam2 = VolumeComPerda / ProfundidadeMediaCava;

        const ProfundidadeMediaTerraNormal = ProfundidadeMediaCava - ProfundidadeMediaTerraFertil;
        const VolumeTerraNormal = ProfundidadeMediaTerraNormal * Areaafetadam2;
        const CustoTotalAterramentoTerraNormalSemFrete = VolumeTerraNormal * CustoAterramentoCavaNormal;
        const QtdeEscavadeiraM3porano = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
        const QtdeEscavadeirasNormal =(VolumeTerraNormal / QtdeEscavadeiraM3porano) < 1 ? 1 : Math.ceil(VolumeTerraNormal / QtdeEscavadeiraM3porano);
        const CustoTransporteFreteTotalEscavadeiraNormal = DistanciaGarimpoCentroUrbanoFrete * CustoEscavadeiraporKm;
        const QtdeLitrosDieselConsumido = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoFretecomMotoristaNormal = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoCombustivelFreteNormal = PreçoLitroDiesel * QtdeLitrosDieselConsumido;
        const CustoTotalFreteNormalIda = CustoFretecomMotoristaNormal + CustoCombustivelFreteNormal + CustoTransporteFreteTotalEscavadeiraNormal;
        const CustoTotalFreteAterramentoNormalIdaeVolta = CustoTotalFreteNormalIda * 2;
        const CustoTotalFreteAterramentoNormalFinal = CustoTotalFreteAterramentoNormalIdaeVolta * QtdeEscavadeirasNormal;
        const CustoTotalAterramentoNormalComFrete = CustoTotalFreteAterramentoNormalFinal + CustoTotalAterramentoTerraNormalSemFrete;
        return CustoTotalAterramentoNormalComFrete

        }else if (tipoGarimpo === FERRY) { //input por Ouro/Hectare e meses de garimpo

            const CustoTotalAterramentoNormalComFrete = 0;
            return CustoTotalAterramentoNormalComFrete

        }

    return cavaGroundingCostAuNorm
    

}

export default cavaGroundingCostAuNorm
 