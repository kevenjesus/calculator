const goldToHecatere = (grs, pitDepth) => {
    const RelacaoMinerioEsteril = 7;
    const DensidadeOuro = 2.76;
    const PerdaOuroEscavacao = 2;
    const produtividadeMediaCava = 0.4;
    const TonSoloRevolvida = grs / produtividadeMediaCava;
    const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril;
    const TotalSoloRevolvida = TonSoloRevolvida + TonEsterilRevolvida;
    const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro;
    const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao;
    const Areaafetadam2 = VolumeComPerda / pitDepth;
    const Areaafetadaha = Areaafetadam2 / 10000;

    return Math.round(Areaafetadaha * 100) / 100
}

export default goldToHecatere;