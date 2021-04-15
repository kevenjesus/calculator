import { FERRY } from "../consts";

const cavaGroundingCostAuFertile = (hectare, DistanciaGarimpoCentroUrbanoFrete, tipoGarimpo) => {
    
    if (tipoGarimpo === FERRY) {
        const CustoTotalAterramentoFertilComFrete = 0
        return CustoTotalAterramentoFertilComFrete
        
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

    const Áreaafetada_m2 = hectare*10000;
    
    //const CustoTotalAterramentoTerraFertilSemFrete = ProfundidadeMediaTerraFertil * CustoAterramentoCavaFertil * Áreaafetada_m2;
    const VolumeTerraFertil = ProfundidadeMediaTerraFertil * Áreaafetada_m2;
    const CustoTotalAterramentoTerraFertilSemFrete = VolumeTerraFertil * CustoAterramentoCavaFertil; //ok
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

    }


}

export default cavaGroundingCostAuFertile