import { ALLUVIUM, FERRY, PIT } from "../consts";

const dredgingAndRiverSediments = (hectare, pitDepth, DistanciaGarimpoCentroUrbanoFrete, gold, tipoGarimpo, tempoGarimpo) => {
     

    if(tipoGarimpo === FERRY && gold) {//input ouro

        const ProducaoSedimentoViraPlumaTonporMes =	6.262;
        const ProducaoSedimentoViraPlumaTon =	ProducaoSedimentoViraPlumaTonporMes * gold;
        const ErosaoEquivalenteTonporHaporAno =	12.54;
        const ControleErosaoBRL = 66.42;
        const EquivalenciaHaImpactados = ProducaoSedimentoViraPlumaTon / ErosaoEquivalenteTonporHaporAno;
        const ValorDanoDragagemBalsa = EquivalenciaHaImpactados * ControleErosaoBRL;
        return ValorDanoDragagemBalsa


    }else if(tipoGarimpo === FERRY && tempoGarimpo) {//input meses de garimpo

        //const ProdOuroKgporMes = 0.00604;
        //const ProdutividadeBalsa = 0.0022;
        //const PotenciaMediaMotor = 54.4;
        const ProducaoSedimentoViraPlumaTonporMes = 37.82;
        //const SedimentoViraPlumaTonporMes = 6.262;
        const ErosaoEquivalenteTonporHaporAno = 12.54;
        const ControleErosaoR$ = 66.42;
        //const ProdOuroTotalBalsaDragagem = PotenciaMediaMotor * tempoGarimpo * ProdOuroKgporMes;
        const ProducaoSedimentoViraPlumaTon = ProducaoSedimentoViraPlumaTonporMes * gold * tempoGarimpo;
        const EquivalenciaHaImpactados = ProducaoSedimentoViraPlumaTon / ErosaoEquivalenteTonporHaporAno;
        const ValorDanoDragagemBalsa = EquivalenciaHaImpactados * ControleErosaoR$
        return ValorDanoDragagemBalsa
    

    }else if (tipoGarimpo === PIT && gold) { //input ouro

        const PorcentagemAssoreamento = 0.15;
        const CustoDragagemporM3 = 28;
        const QtdeSedimentopor1DragaM3porhora = 300;
        const HorasTrabalhadasporDragapordia = 24;
        const DiasAno = 365;
        const CustoTransporte1DragaBRLporkm = 3.8;
        const KmRodadoporLitro = 2.5;
        const PreçoLitroDiesel = 3.24;
        const SalarioMedioMotoristaFreteporKm = 2.22;
        const profundidadeDaCava = 10;
    
        const Áreaafetada_m2 = hectare*10000
    
        const VolumeComPerda = profundidadeDaCava * Áreaafetada_m2
    
        const VolumeTerraAssoreamentoRio = PorcentagemAssoreamento * VolumeComPerda;
        const CustoDragagemSemFrete = CustoDragagemporM3 * VolumeTerraAssoreamentoRio;
        const QtdeSedimentopor1DragaM3porano = DiasAno * HorasTrabalhadasporDragapordia * QtdeSedimentopor1DragaM3porhora;
        const QtdeDragas1ano = (VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano) < 1 ? 1 : Math.round(VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano);
        const CustoTransporteDragaBRL = DistanciaGarimpoCentroUrbanoFrete * CustoTransporte1DragaBRLporkm;
        const QtdeLitrosDieselConsumidoDragagem = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoCombustívelFreteDragagem = PreçoLitroDiesel * QtdeLitrosDieselConsumidoDragagem;
        const CustoFretecomMotoristaDragagem = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoTotalFreteDragagemIda = CustoFretecomMotoristaDragagem + CustoCombustívelFreteDragagem + CustoTransporteDragaBRL;
        const CustoTotalFreteDragagemIdaeVolta = CustoTotalFreteDragagemIda * 2;
        const CustoTotalFreteDragagemFinal = CustoTotalFreteDragagemIdaeVolta * QtdeDragas1ano;
        const CustoTotalDragagemComFrete = CustoTotalFreteDragagemFinal + CustoDragagemSemFrete;
        return CustoTotalDragagemComFrete

    }else if (tipoGarimpo === ALLUVIUM && gold){ // input ouro/hectare

        const PorcentagemAssoreamento = 0.15;
        const CustoDragagemporM3 = 28;
        const QtdeSedimentopor1DragaM3porhora = 300;
        const HorasTrabalhadasporDragapordia = 24;
        const DiasAno = 365;
        const CustoTransporte1DragaBRLporkm = 3.8;
        const KmRodadoporLitro = 2.5;
        const PreçoLitroDiesel = 3.24 ;
        const SalarioMedioMotoristaFreteporKm = 2.22;
    
        const Áreaafetada_m2 = hectare*10000
        
    
        const VolumeComPerda = pitDepth * Áreaafetada_m2
    
        const VolumeTerraAssoreamentoRio = PorcentagemAssoreamento * VolumeComPerda;
        const CustoDragagemSemFrete = CustoDragagemporM3 * VolumeTerraAssoreamentoRio;
        const QtdeSedimentopor1DragaM3porano = DiasAno * HorasTrabalhadasporDragapordia * QtdeSedimentopor1DragaM3porhora;
        const QtdeDragas1ano = (VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano) < 1 ? 1 : Math.round(VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano);
        const CustoTransporteDragaBRL = DistanciaGarimpoCentroUrbanoFrete * CustoTransporte1DragaBRLporkm;
        const QtdeLitrosDieselConsumidoDragagem = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoCombustívelFreteDragagem = PreçoLitroDiesel * QtdeLitrosDieselConsumidoDragagem;
        const CustoFretecomMotoristaDragagem = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoTotalFreteDragagemIda = CustoFretecomMotoristaDragagem + CustoCombustívelFreteDragagem + CustoTransporteDragaBRL;
        const CustoTotalFreteDragagemIdaeVolta = CustoTotalFreteDragagemIda * 2;
        const CustoTotalFreteDragagemFinal = CustoTotalFreteDragagemIdaeVolta * QtdeDragas1ano;
        const CustoTotalDragagemComFrete = CustoTotalFreteDragagemFinal + CustoDragagemSemFrete;
        return CustoTotalDragagemComFrete

    }else if (tipoGarimpo === PIT && tempoGarimpo){ //anos de garimpo no poço

        const PorcentagemAssoreamento = 0.15;
        const CustoDragagemporM3 = 28;
        const QtdeSedimentopor1DragaM3porhora = 300;
        const HorasTrabalhadasporDragapordia = 24;
        const DiasAno = 365;
        const CustoTransporte1DragaBRLporkm = 3.8;
        const KmRodadoporLitro = 2.5;
        const PreçoLitroDiesel = 3.24 ;
        const SalarioMedioMotoristaFreteporKm = 2.22;
        //const profundidadeDaCava = 10;
        const produtividadeMediaCava = 0.4;
        const QtdeGramasOuroPorAnoPoço = 23700;
        const RelacaoMinerioEsteril = 7;
        const DensidadeOuro = 2.76;
        const PerdaOuroEscavacao = 2;

        const QtdeGramasOuroTotalPoço = QtdeGramasOuroPorAnoPoço * tempoGarimpo;
        const TonSoloRevolvida = QtdeGramasOuroTotalPoço /  produtividadeMediaCava;
        const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
        const TotalSoloRevolvida = TonEsterilRevolvida + TonSoloRevolvida;
        const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro;
        const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
        //const Áreaafetada_m2 = VolumeComPerda / ProfundidadeMediaCava
        //const VolumeComPerda = profundidadeDaCava * Áreaafetada_m2
        //const VolumeSemPerda = VolumeComPerda / PerdaOuroEscavacao

        
        const VolumeTerraAssoreamentoRio = PorcentagemAssoreamento * VolumeComPerda;
        const CustoDragagemSemFrete = CustoDragagemporM3 * VolumeTerraAssoreamentoRio;
        const QtdeSedimentopor1DragaM3porano = DiasAno * HorasTrabalhadasporDragapordia * QtdeSedimentopor1DragaM3porhora;
        const QtdeDragas1ano = (VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano) < 1 ? 1 : Math.round(VolumeTerraAssoreamentoRio/QtdeSedimentopor1DragaM3porano);
        const CustoTransporteDragaBRL = DistanciaGarimpoCentroUrbanoFrete * CustoTransporte1DragaBRLporkm;
        const QtdeLitrosDieselConsumidoDragagem = DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
        const CustoCombustívelFreteDragagem = PreçoLitroDiesel * QtdeLitrosDieselConsumidoDragagem;
        const CustoFretecomMotoristaDragagem = SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
        const CustoTotalFreteDragagemIda = CustoFretecomMotoristaDragagem + CustoCombustívelFreteDragagem + CustoTransporteDragaBRL;
        const CustoTotalFreteDragagemIdaeVolta = CustoTotalFreteDragagemIda * 2;
        const CustoTotalFreteDragagemFinal = CustoTotalFreteDragagemIdaeVolta * QtdeDragas1ano;
        const CustoTotalDragagemComFrete = CustoTotalFreteDragagemFinal + CustoDragagemSemFrete;
        return CustoTotalDragagemComFrete

    }
    return dredgingAndRiverSediments
}

export default dredgingAndRiverSediments