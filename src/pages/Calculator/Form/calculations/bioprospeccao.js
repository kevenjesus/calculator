
import presentValue from 'utils/presentValue' 
import calcImpact from 'utils/calcImpact'

 // impacto 1: bioprospecting

const bioprospecting = (qtdAnalysis) => { 
    
     const bioprospecting = calcImpact(Number(qtdAnalysis), 56.52);
     const toBioprospecting = presentValue(0.03, 30, bioprospecting);
     return toBioprospecting
     
//console.log('Bioprospecção', totalBioprospecting)
}

export default bioprospecting


