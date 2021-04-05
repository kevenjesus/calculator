
import calcImpact from 'utils/calcImpact'

const woodAndNonWoodProducts = (qtdAnalysis) => {
    // impacto 3: valor de uso
    const toWoodAndNonWoodProducts = calcImpact(Number(qtdAnalysis), 59*17.75);
    return toWoodAndNonWoodProducts
    
    //console.log('valor de uso',totalWoodAndNonWoodProducts)
}

export default woodAndNonWoodProducts

