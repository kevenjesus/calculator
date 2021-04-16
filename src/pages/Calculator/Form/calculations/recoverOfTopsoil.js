import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const recoveryOfTopsoil = (valueHypothesis, DistanciaGarimpoCentroUrbanoFrete, gold, gramadeOuroporHectare, tipoGarimpo) => {
  
    let hectare;
    if(tipoGarimpo === FERRY) {
      hectare = 0
    }else if (tipoGarimpo === PIT) {
      hectare = 0.31
    }else {
      hectare = gramadeOuroporHectare * gold
    }
  

    const PrecoRecupSuperficialSoloporHa = valueHypothesis === CONSERVATIVE ? 14690 : 23400;

    const CapacidadeCargaCaminhaoNumeroMudas = 2700;
    const MudasSuperficialporHa = 1667;
    const CustoTransporteMudaporKm = 1.60;
    const KmRodadoporLitro = 2.5;
    const PrecoLitroDiesel = 3.24;
    const SalarioMedioMotoristaFreteporKm = 2.22;

    const CustoRecSuperficialSoloSemFrete = PrecoRecupSuperficialSoloporHa * hectare * 12;
    const NumeroCaminhoesRecupSuperficialMudas = ((hectare*MudasSuperficialporHa)/CapacidadeCargaCaminhaoNumeroMudas) < 0.9999999999999 ? 1 : Math.ceil((hectare*MudasSuperficialporHa)/CapacidadeCargaCaminhaoNumeroMudas);
    const CustoFreteMudaSuperficialTotal = DistanciaGarimpoCentroUrbanoFrete * CustoTransporteMudaporKm;
    const QtdeLitrosDieselConsumidoRecSuperficial =	DistanciaGarimpoCentroUrbanoFrete / KmRodadoporLitro;
    const CustoCombustivelFreteRecSuperficial =	PrecoLitroDiesel * QtdeLitrosDieselConsumidoRecSuperficial;
    const CustoFretecomMotoristaRecSuperficial =    SalarioMedioMotoristaFreteporKm * DistanciaGarimpoCentroUrbanoFrete;
    const CustoTotalFreteSuperficialIda =   CustoFretecomMotoristaRecSuperficial+ CustoCombustivelFreteRecSuperficial + CustoFreteMudaSuperficialTotal;
    const CustoTotalFreteSuperficialIdaeVolta =	CustoTotalFreteSuperficialIda * 2;
    const CustoTotalFreteRecSuperficialFinal =	CustoTotalFreteSuperficialIdaeVolta * NumeroCaminhoesRecupSuperficialMudas;
    const CustoTotalRecSuperficialComFrete =	CustoTotalFreteRecSuperficialFinal + CustoRecSuperficialSoloSemFrete;

    return CustoTotalRecSuperficialComFrete


}

export default recoveryOfTopsoil