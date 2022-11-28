import fixedCalcultions from "hooks/fixedCalculations";
import { ALLUVIUM, FERRY, IMPACTED_AREA, QTD_FERRY, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts";

const convertAllinGold = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth, motorPower) => {
    const { general, dredgingAndRiverSediments } = fixedCalcultions(country_region, motorPower)
    const { prodOuroKgporMes } = dredgingAndRiverSediments
    const { densityGold, excavationGoldLoss, quantityOfGoldGramsPerYearWell, cavaAverageProductivity } = general //prodGoldMonthFerry valor utilizaddo para MESES DE GARIMPO
    //console.log(quantityOfGoldGramsPerYearWell)
    let goldGrass
   
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        //const quantityOfGoldGramsPerYearWell = 23700;
        goldGrass = quantityOfGoldGramsPerYearWell * valueLikeMining;
        //console.log('grama de ouro', goldGrass)
        return goldGrass

    }else if (likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA){
        const sterileOreRatio = 7;
        //const densityGold = 2.76;
        //const excavationGoldLoss = 2;
       // const cavaAverageProductivity = 0.4;
        const affectedAreaM2 = valueLikeMining * 10000;
        const lossyVolume = pitDepth * affectedAreaM2;
        const volumeWithoutLoss = lossyVolume / excavationGoldLoss;
        const toSoilUpturned = densityGold * volumeWithoutLoss;
        const calculationBaseTon = toSoilUpturned / (sterileOreRatio + 1);
        const revolvedMineralTon = calculationBaseTon * 1;
        const goldGrass = cavaAverageProductivity * revolvedMineralTon;
        //console.log('grama de ouro', goldGrass)
        return goldGrass

    }else if (likeMining === FERRY && typeValueLikeMining === QTD_FERRY){ //input por meses TROCAR POR QUANTIDADE DE BALSAS
        
        /*Padrão por número de balsas fixo a 1 ano de garimpo*/

        const tempoFixo1Ano = 12
        const prodOuroGrporMes = prodOuroKgporMes * 1000;
        const goldGrass = (motorPower * tempoFixo1Ano * prodOuroGrporMes) * valueLikeMining; //valueLikemining = Quantidade de BALSAS 

        //const goldGrass =  valueLikeMining * prodGoldMonthFerry;
        return goldGrass
    }else{
        const goldGrass = valueLikeMining;
        //console.log('grama de ouro', goldGrass)
        return goldGrass 
    }
}
export default convertAllinGold 
