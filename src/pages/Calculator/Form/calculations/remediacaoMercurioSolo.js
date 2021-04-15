import { FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29

const remediacaoMercurioSolo = (gold, txPrevalence, tipoGarimpo, AnosGarimpoPoço) => {
    

    if (tipoGarimpo === PIT) { //Input anos de garimpo
        const QtdeGramasOuroAnoPoço = 23.700;
        const ProporçãoHgAu = 2.6;
        const PerdaPorcentHgnoSolo = 0.088;
        const HgContidoSoloemGramaporTonelada = 0.24;
        const CustoRemediacaoR$porToneladaSolo = 1750;

        const QtdeOuroTotalPoço = QtdeGramasOuroAnoPoço * AnosGarimpoPoço;
        const QtdeHgDespejadoSoloporOuro = PerdaPorcentHgnoSolo * ProporçãoHgAu;
        const QtdeTotalHgDespejadoSolo = QtdeHgDespejadoSoloporOuro * QtdeOuroTotalPoço;
        const ToneladaSoloContaminada = QtdeTotalHgDespejadoSolo* HgContidoSoloemGramaporTonelada;
        const CustoTotalRemediacaoHgSolo = CustoRemediacaoR$porToneladaSolo * ToneladaSoloContaminada;
        return CustoTotalRemediacaoHgSolo

    }else if (tipoGarimpo === FERRY) {
        const CustoTotalRemediacaoHgSolo = 0
        return CustoTotalRemediacaoHgSolo

    }else {
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


    


}

export default remediacaoMercurioSolo