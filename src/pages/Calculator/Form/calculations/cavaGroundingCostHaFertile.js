const cavaGroundingCostHaFertile = (DistanciaGarimpoCentroUrbanoFrete, hectare) => {

    const ProfundidadeMediaTerraFertil = 0.4;
    const CustoAterramentoCavaFertil = 13;
    const QtdeEscavadeiraM3porHora = 160;
    const CustoEscavadeiraporKm = 3.8
    const HorasEscavadeiraDia = 10;
    const KmRodadoporLitro = 2.5;
    const SalarioMedioMotoristaFreteporKm = 2.22;
    const PrecoLitroDiesel = 3.24;
    const DiasAno = 365;

    const Áreaafetada_m2 = hectare*10000;
    
    const CustoTotalAterramentoTerraFertilSemFrete = ProfundidadeMediaTerraFertil * CustoAterramentoCavaFertil * Áreaafetada_m2;
    const VolumeTerraFertil = ProfundidadeMediaTerraFertil * Áreaafetada_m2;

    const QtdeEscavadeiraM3porano = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
    //const DiferencaVolumeEscavadeiraNoAno = (VolumeTerraFertil - QtdeEscavadeiraM3porano) < 0 ? 0 : Math.ceil(VolumeTerraFertil - QtdeEscavadeiraM3porano);
    const QtdeEscavadeirasFertil = (VolumeTerraFertil / QtdeEscavadeiraM3porano) < 1 ? 1 : Math.ceil(VolumeTerraFertil / QtdeEscavadeiraM3porano);
    const CustoTransporteFreteTotalEscavadeiraFertil =	DistanciaGarimpoCentroUrbanoFrete * CustoEscavadeiraporKm;
    const QtdeLitrosDieselConsumidoFertil = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
    const CustoCombustivelFreteFertil = PrecoLitroDiesel * QtdeLitrosDieselConsumidoFertil;
    const CustoFretecomMotoristaNormal = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
    const CustoTotalFreteNormalIda = CustoFretecomMotoristaNormal + CustoCombustivelFreteFertil + CustoTransporteFreteTotalEscavadeiraFertil;
    const CustoTotalFreteAterramentoNormalIdaeVolta = CustoTotalFreteNormalIda * 2;
    const CustoTotalFreteAterramentoNormalFinal = CustoTotalFreteAterramentoNormalIdaeVolta * QtdeEscavadeirasFertil;
    const CustoTotalAterramentoNormalComFrete = CustoTotalFreteAterramentoNormalFinal + CustoTotalAterramentoTerraFertilSemFrete;
    return CustoTotalAterramentoNormalComFrete


}

export default cavaGroundingCostHaFertile