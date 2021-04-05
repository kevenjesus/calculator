
import presentValue from 'utils/presentValue' 
import calcImpact from 'utils/calcImpact'


// impacto 4: Recreação
const recreation = (qtdAnalysis) => {
    const recreation = calcImpact(Number(qtdAnalysis), 10.2);
    const toRecreation = presentValue(0.03, 30, recreation);
    return toRecreation

        // console.log('valor de recreação ', totalrecreation)
}


    export default recreation