const hectareToGold = (hectare, pitdepth) => {
    const RelacaoMinerioEsteril = 7;
    const DensidadeOuro = 2.76;
    const PerdaOuroEscavacao = 2;
    const produtividadeMediaCava = 0.4;
    const Áreaafetada_m2 = hectare*10000
    const VolumeComPerda = pitdepth * Áreaafetada_m2
    const VolumeSemPerda = VolumeComPerda / PerdaOuroEscavacao
    const TotalSoloRevolvida = DensidadeOuro * VolumeSemPerda
    const ToneladaBaseCálculo = TotalSoloRevolvida / (RelacaoMinerioEsteril + 1) 
    const TonMinerioRevolvida = ToneladaBaseCálculo * 1
    const GramaOuro = produtividadeMediaCava * TonMinerioRevolvida
    //const GramadeOuroporHectare = GramaOuro / hectare
    //const KgOuroporHectare = GramadeOuroporHectare/ 1000
    return GramaOuro;
}

export const gramadeOuroporHectare = (hectare, gold) => {
    console.log(hectare, gold)
    /* const RelacaoMinerioEsteril = 7;
    const DensidadeOuro = 2.76;
    const PerdaOuroEscavacao = 2;
    const produtividadeMediaCava = 0.4;
    const TonSoloRevolvida = hectare / produtividadeMediaCava;
    const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
    const TotalSoloRevolvida = TonEsterilRevolvida +TonSoloRevolvida;
    const VolumeSemPerda = TotalSoloRevolvida/DensidadeOuro;
    const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
    const Áreaafetada_m2 = VolumeComPerda / pitDepth;
    const Áreaafetada_ha = Áreaafetada_m2 / 10000 */

    const GramadeOuroporHectare = hectare / gold;
    return GramadeOuroporHectare
    
    //const KgOuroporHectare = GramadeOuroporHectare/ 1000
    //return GramadeOuroporHectare;
}



export default hectareToGold