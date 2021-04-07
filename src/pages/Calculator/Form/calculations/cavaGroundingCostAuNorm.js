const cavaGroundingCostAuNorm = (hectare , pitDepth, DistanciaGarimpoCentroUrbanoFrete) => {


    
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

}

export default cavaGroundingCostAuNorm
 