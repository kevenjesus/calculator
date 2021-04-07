const dredgingAndRiverSediments = (hectare, pitDepth, DistanciaGarimpoCentroUrbanoFrete) => {
    

    const PorcentagemAssoreamento = 0.15;
    const CustoDragagemporM3 = 28;
    const QtdeSedimentopor1DragaM3porhora = 300;
    const HorasTrabalhadasporDragapordia = 24;
    const DiasAno = 365;
    const PerdaOuroEscavacao = 2;
    const CustoTransporte1DragaR$porkm = 3.8;
    const KmRodadoporLitro = 2.5;
    const PreçoLitroDiesel = 3.24 ;
    const SalarioMedioMotoristaFreteporKm = 2.22;

    const Áreaafetada_m2 = hectare*10000

    const VolumeComPerda = pitDepth * Áreaafetada_m2



    const VolumeTerraAssoreamentoRio = PorcentagemAssoreamento * VolumeComPerda;
    const CustoDragagemSemFrete = CustoDragagemporM3 * VolumeTerraAssoreamentoRio;
    const QtdeSedimentopor1DragaM3porano = DiasAno * HorasTrabalhadasporDragapordia * QtdeSedimentopor1DragaM3porhora;
    const QtdeDragas1ano = (VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano) < 1 ? 1 : Math.round(VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano);
    const CustoTransporteDragaR$ = DistanciaGarimpoCentroUrbanoFrete * CustoTransporte1DragaR$porkm;
    const QtdeLitrosDieselConsumidoDragagem = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
    const CustoCombustívelFreteDragagem = PreçoLitroDiesel * QtdeLitrosDieselConsumidoDragagem;
    const CustoFretecomMotoristaDragagem = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
    const CustoTotalFreteDragagemIda = CustoFretecomMotoristaDragagem + CustoCombustívelFreteDragagem + CustoTransporteDragaR$;
    const CustoTotalFreteDragagemIdaeVolta = CustoTotalFreteDragagemIda * 2;
    const CustoTotalFreteDragagemFinal = CustoTotalFreteDragagemIdaeVolta * QtdeDragas1ano;
    const CustoTotalDragagemComFrete = CustoTotalFreteDragagemFinal + CustoDragagemSemFrete;

    return CustoTotalDragagemComFrete

}

export default dredgingAndRiverSediments