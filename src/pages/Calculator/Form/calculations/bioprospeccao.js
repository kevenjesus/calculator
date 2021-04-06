import presentValue from 'utils/presentValue' 
import calcImpact from 'utils/calcImpact'

const bioprospecting = (qtdAnalysis) => { 
    
     const bioprospecting = calcImpact(Number(qtdAnalysis), 56.52);
     const toBioprospecting = presentValue(0.03, 30, bioprospecting);
     return toBioprospecting
}

export default bioprospecting


