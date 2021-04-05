
import presentValue from 'utils/presentValue' 
import calcImpact from 'utils/calcImpact'

// impacto 5: Valor de existencia

const existenceValue = (qtdAnalysis) => {
    const existenceValue = calcImpact(Number(qtdAnalysis), 13.07);
    const toExistenceValue = presentValue(0.03, 30, existenceValue);
    return toExistenceValue


    // console.log('valor de valor de existencia', totalexistenceValue)
}

export default existenceValue