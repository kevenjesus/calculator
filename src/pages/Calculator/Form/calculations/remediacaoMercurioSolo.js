
const CONSERVATIVE = 0.29

const remediacaoMercurioSolo = (gold, txPrevalence) => {
    
    const PerdaPorcentHgNoSolo = txPrevalence === CONSERVATIVE ? 0.088 : 0.14;

    const ProporcaoHgAu = 2.6
    const HgContidoSoloemGramaporTonelada = 0.24
    const CustoRemediacaoBRLporToneladaSolo = 1750

    const QtdeHgDespejadoSoloporOuro = PerdaPorcentHgNoSolo * ProporcaoHgAu;
    const QtdeTotalHgDespejadoSolo = QtdeHgDespejadoSoloporOuro * gold;
    const ToneladaSoloContaminada = QtdeTotalHgDespejadoSolo * HgContidoSoloemGramaporTonelada;
    const CustoTotalRemediacaoHgSolo = ToneladaSoloContaminada * CustoRemediacaoBRLporToneladaSolo;

    return CustoTotalRemediacaoHgSolo


}

export default remediacaoMercurioSolo