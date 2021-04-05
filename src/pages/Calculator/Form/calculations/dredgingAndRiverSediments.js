const dredgingAndRiverSediments = (VolumeComPerda, DistanciaGarimpoCentroUrbanoFrete) => {

    const PorcentagemAssoreamento = 0.15;
    const CustoDragagemporM3 = 28;
    const QtdeSedimentopor1Dragam3porhora = 300;
    const HorasTrabalhadasporDragapordia = 24;
    const DiasAno = 365;
    const CustoTransporte1DragaR$porkm = 3.8;
    const KmRodadoporLitro = 2.5;
    const PreçoLitroDiesel = 3.24 ;
    const SalarioMedioMotoristaFreteporKm = 2.22;

    const VolumeTerraAssoreamentoRio = PorcentagemAssoreamento * VolumeComPerda;
    const CustoDragagemSemFrete = CustoDragagemporM3 * VolumeTerraAssoreamentoRio;
    const QtdeSedimentopor1DragaM3porano = DiasAno * HorasTrabalhadasporDragapordia * QtdeSedimentopor1Dragam3porhora;
    const DiferencaVolumeTotaleTempo1DragaAno = VolumeTerraAssoreamentoRio < 0 ? 0 : QtdeSedimentopor1Dragam3porano;
    //const QtdeDragas1ano = SE(VolumeTerraAssoreamentoRio/QtdeSedimentopor1Dragam3porano<1;1;VolumeTerraAssoreamentoRio/QtdeSedimentopor1Dragam3porano);
    const CustoTransporteDragaR$ = DistanciaGarimpoCentroUrbanoFrete * CustoTransporte1DragaR$porkm;
    const QtdeLitrosDieselConsumidoDragagem = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
    const CustoCombustívelFreteDragagem = PreçoLitroDiesel * QtdeLitrosDieselConsumidoDragagem;
    const CustoFretecomMotoristaDragagem = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
    const CustoTotalFreteDragagemIda = CustoFretecomMotoristaDragagem + CustoCombustívelFreteDragagem + CustoTransporteDragaR$;
    const CustoTotalFreteDragagemIdaeVolta = CustoTotalDragagemFértilIda * 2;
    const CustoTotalFreteDragagemFinal = CustoTotalFreteDragagemIdaeVolta * QtdeDragas1ano;
    const CustoTotalDragagemComFrete = CustoTotalFreteDragagemFinal + CustoDragagemSemFrete;

    return CustoTotalDragagemComFrete

}