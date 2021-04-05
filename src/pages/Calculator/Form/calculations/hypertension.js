const hypertension = (qtdAnalysis, densidadePop2060, agwt, constante) => {

    const proporcaoHgAu = 2.6;
    const anos = 50;
    const densidadeDemograficaNorte2060 = 6.0070;
    const PesoDaIncapacidadeHipertensao = 0.246;
    const AnoIniciodaIncapacidadeHipertensao = 40;
    const DuracaoDaIncapacidadeHipertensao = 32;
    const propPessoasAcima20anosPelaPopTotal = 0.58;
    const propPessoasAcima20anosComHipertensao = 0.15;
    const FracaoAtribuivelHipertensao = 0.26;


    const perdaPorcentHgNaAgua = 0.13; //Se "valor de impacto" = "Conservador" (antes chamávamos de "Médio"), então "perdaPorcentHgNaAgua" = 13%
    //Se "valor de impacto" = "Princípio da Precaução" (antes chamávamos de "Máximo"), então "perdaPorcentHgNaAgua" = 21%

    const metilacaoPorcent = 0.11;  //Se "valor de impacto" = "Conservador" (antes chamávamos de "Médio"), então "metilacaoPorcent" = 11%
    //Se "valor de impacto" = "Princípio da Precaução" (antes chamávamos de "Máximo"), então "metilacaoPorcent" = 22%

    const grHgLiberadonaAgua = perdaPorcentHgNaAgua * proporcaoHgAu * qtdAnalysis;
    const grHgMetilado = metilacaoPorcent * grHgLiberadonaAgua;

    //Depende do botão: "Voce conhece a área?"

    //Se(botão "conhece a área?" ="sim"; densidadePop2060*(PI()*(100)^2);
    const calc1 = Math.PI*(100);
    const calc2 = Math.pow(calc1, 2);

    const tamanhoPop100kmRaio = densidadePop2060 * calc2;
    
    //Se (botão "conhece a área?" ="não"; DensidadeDemograficaNorte2060*(PI()*(100)^2))

    ////const tamanhoPop100kmRaio = DensidadeDemograficaNorte2060 * calc2;

    const TxDesconto = 0.03;
    const Beta = 0.04;
    const bplusr = -0.07;
    const DALY1CustoHipertensao = 103599;

    const popTotalAfetadaMercurioNoCabelo = 0; //SE((GrHgMetilado)/IngestaoMediaMercurioEmAnos) <TamanhoPop100kmRaio ; então será (GrHgMetilado)/IngestaoMediaMercurioEmAnos. Caso contrário, será TamanhoPop100kmRaio.
    const popAcimade20Anos = propPessoasAcima20anosPelaPopTotal * PopTotalAfetadaMercurioNoCabelo;
    const popAcimade20AnosComHipertensao = propPessoasAcima20anosComHipertensao* popAcimade20Anos;
    const PopAcima20anoscomHipertensaonaRegiao = DuracaoDaIncapacidadeHipertensao * PopAcimade20AnosComHipertensao;
    const TxIncidenciaHipertensao = (PopAcima20anoscomHipertensaonaRegiao * 1000)/ PopTotalAfetadaMercurioNoCabelo;
    const IncidenciaHipertensao = TxIncidenciaHipertensao *(PopTotalAfetadaMercurioNoCabelo/1000);
    const IncidenciaTotalHomemMulherHipertensao = IncidenciaHipertensao*2;
    const IncidenciaTotalHomemMulher = IncidenciaTotalHomemMulherHipertensao * PesoDaIncapacidadeHipertensao;
    const calc1 = ((constante * Math.exp(TxDesconto * AnoIniciodaIncapacidadeHipertensao))/Math.pow(bplusr, 2));
    const calc2 = (bplusr * (DuracaoDaIncapacidadeHipertensao + AnoIniciodaIncapacidadeHipertensao));
    const calc3 = (bplusr * (DuracaoDaIncapacidadeHipertensao + AnoIniciodaIncapacidadeHipertensao)-1);
    const calc4 = (Math.exp(bplusr * AnoIniciodaIncapacidadeHipertensao) * (bplusr * AnoIniciodaIncapacidadeHipertensao-1));
    const calc5 = ((1-agwt)/TxDesconto);
    const calc6 = ((1-Math.exp(-TxDesconto * DuracaoDaIncapacidadeHipertensao)));
    const DALYHipertensao = IncidenciaTotalHomemMulherHipertensao*PesoDaIncapacidadeHipertensao*(agwt*calc1*((Math.exp(calc2)*calc3)-calc4)+calc5*calc6);
    const DALYHipertensaoIemBRL = DALY1CustoHipertensao * DALYHipertensao;
    return DALYHipertensaoIemBRL

}

export default hypertension
















