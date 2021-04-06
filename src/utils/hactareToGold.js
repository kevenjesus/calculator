const hectareToGold = (au, pitdepth) => {
    const RelacaoMinerioEsteril = 7;
    const DensidadeOuro = 2.76;
    const PerdaOuroEscavacao = 2;
    const produtividadeMediaCava = 0.4;
    const Áreaafetada_m2 = au*10000
    const VolumeComPerda = pitdepth * Áreaafetada_m2
    const VolumeSemPerda = VolumeComPerda / PerdaOuroEscavacao
    const TotalSoloRevolvida = DensidadeOuro * VolumeSemPerda
    const ToneladaBaseCálculo = TotalSoloRevolvida / (RelacaoMinerioEsteril + 1) 
    const TonMinerioRevolvida = ToneladaBaseCálculo * 1
    const GramaOuro = produtividadeMediaCava * TonMinerioRevolvida
    const GramadeOuroporHectare = GramaOuro / au
    const KgOuroporHectare = GramadeOuroporHectare/ 1000
    return GramadeOuroporHectare;
}

export default hectareToGold