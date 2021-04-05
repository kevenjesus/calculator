const cavaGroundingCost = (CustoFrete1escavadeiraMunicipio, pitDepth, qtdAnalysis) => {

    const ProdutividadeGramaPorToneladaMineiro = 0.4;

    const RelacaoMinerioEsteril = 7;
    const DensidadeOuro = 2.76;
    const PerdaOuroEscavacao = 2;
    const ProfundidadeMediaTerraFertil = 0.4;
    const CustoAterramentoCavaNormal = 1;
 // const CustoAterramentoCavaFertil = 13;
    const QtdeEscavadeiraM3porHora = 160;
    const HorasEscavadeiraDia = 10;
    const DiasAno = 365;

    const TonSoloRevolvida = qtdAnalysis / ProdutividadeGramaPorToneladaMineiro;
    const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
    const TotalSoloRevolvida = TonSoloRevolvida + TonEsterilRevolvida;
    const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro;
    const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
    const Areaafetadam2 = VolumeComPerda / pitDepth;
    const Areaafetadaha = Areaafetadam2 / 10000;
    const GramadeOuroporHectare = qtdAnalysis / Areaafetadaha;
    const KgdeOuroporHectare = GramadeOuroporHectare / 1000;
    const ProfundidadeMediaTerraNormal = pitDepth - ProfundidadeMediaTerraFertil;
    const VolumeTerraNormal = ProfundidadeMediaTerraNormal * Areaafetadaha;
    const VolumeTerraFertil = ProfundidadeMediaTerraFertil * Areaafetadaha;
    const CustoTotalAterramentoTerraNormal = VolumeTerraNormal * CustoAterramentoCavaNormal;
    const QtdeEscavadeiraM3porano = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora;
    const VolumeEscavadeiraNoAno = VolumeTerraNormal-QtdeEscavadeiraM3porano;
    const DiferencaVolumeEscavadeiraNoAno = VolumeEscavadeiraNoAno < 0 ? 0 : VolumeEscavadeiraNoAno;
    const CustoTotalFreteAterramentoNormal = CustoFrete1escavadeiraMunicipio * QtdeEscavadeirasNormal;
    const CustoTotalAterramentoNormalComFrete = CustoTotalFreteAterramentoNormal + CustoTotalAterramentoTerraNormal;

    return CustoTotalAterramentoNormalComFrete

}

export default cavaGroundingCost
 