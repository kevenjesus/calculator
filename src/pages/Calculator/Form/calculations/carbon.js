
import calcImpact from 'utils/calcImpact'


// impacto 2: carbono
const carbon = (qtdAnalysis) => {
    const toCarbon = calcImpact(Number(qtdAnalysis), 25*200);
    return toCarbon

    //console.log('valor carbono',totalCarbon)
} 

export default carbon


