import { stateTypes } from "utils/AppContext"
import goldToHecatere from "utils/GoldToHectare"
import hectareToGold, { goldenGramForHectare } from "utils/hectareToGold"
import ToBRL from "utils/toBRL"
import bioprospecting from "./calculations/bioprospecting"
import carbon from "./calculations/carbon"
import cavaGroundingCostAuFertile from "./calculations/cavaGroundingCostAuFertile"
import cavaGroundingCostAuNorm from "./calculations/cavaGroundingCostAuNorm"
import culturedAndSpecies from "./calculations/culturedAndSpecies"
import dredgingAndRiverSediments from "./calculations/dredgingAndRiverSediments"
import erosionSiltingUp from "./calculations/erosionSiltingUp"
import heartAttack from "./calculations/heartAttack"
import hypertension from "./calculations/hypertension"
import lossQI from "./calculations/lossQI"
import neuroSymptomsGarimpeiro from "./calculations/neuroSymptomsGarimpeiro"
import recoveryOfTopsoil from "./calculations/recoverOfTopsoil"
import recreation from "./calculations/recreation"
import soilMercuryRemediation from "./calculations/soilMercuryRemediation"
import woodAndNonWoodProducts from "./calculations/woodAndNonWoodProducts"
import { AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, IMPACTED_AREA } from "./consts"

const calcResults = (state, dispatch) => {
    const { calculator } = state
    const {
        knowRegion,
        counties,
        country,
        state: StateCity,
        qtdAnalysis,
        pitDepth,
        txPrevalence,
        valuatioMethod } = calculator

       if(!country) {
           return
       }

        const impacts = []
        const hectareValue = calculator.analysisUnit === AMOUNT_GOLD ? goldToHecatere(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const goldValue = calculator.analysisUnit === IMPACTED_AREA ? hectareToGold(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const gramadeOuroporHe = goldenGramForHectare(hectareValue, goldValue)
    
        const currentCountry = counties.find(c => c.id === Number(country))
        const likeMining = valuatioMethod // FERRY, PIT or ALLUVION
        const valueLikeMining = qtdAnalysis.value // gold, hactare, months, years
        const typeValueLikeMining = calculator.analysisUnit // AMOUNT_GOLD / IMPACTED_AREA / YEARS_OF_MINING / MONTHS_OF_MINING
        const popDensity2010 = knowRegion ? currentCountry.popDensity2010 : 4.12;
        const popDensity2060 = knowRegion ? currentCountry.popDensity2060  : 6.0;
        const urbanPopMunicipality = knowRegion ? currentCountry.urbanPopMunicipality : 0.7353;
        const ruralPopMunicipality = knowRegion ? currentCountry.ruralPopMunicipality : 0.2647;
        const distanceanningCenter = knowRegion ? currentCountry.distanceanningCenter : 212.74;
        const species = knowRegion ? (currentCountry.species <= 0 ? StateCity.species : currentCountry.species) : 69.21;

        //console.log('valueLikeMining', valueLikeMining,'popDensity2010', popDensity2010, 'popDensity2060', popDensity2060, 'urbanPopMunicipality', urbanPopMunicipality, 'ruralPopMunicipality', ruralPopMunicipality, 'distanceanningCenter', 'species', species)

        // tipo de garimpo = likeMining
        // valor do tipo de garimpo = valueLikeMining
        // tipo de valor do garimpo = typeValueLikeMining

        const totalBio = bioprospecting(likeMining, typeValueLikeMining, txPrevalence, hectareValue)
        impacts.push({ label: 'BioProspec????o', displayName: 'BioProspec????o', category: CATEGORY_DEFORESTATION, value: totalBio })
        //console.log('totalBio', totalBio)

        const totalCarbon = carbon(likeMining, typeValueLikeMining, hectareValue)
        impacts.push({ label: 'Carbono', displayName: 'Carbono', category: CATEGORY_DEFORESTATION, value: totalCarbon })
        //console.log('totalCarbon',totalCarbon) 

        const totalPMNM = woodAndNonWoodProducts(likeMining, typeValueLikeMining, hectareValue)
        impacts.push({ label: 'PMNM', displayName: 'Produtos n??o-madeireiros e madeireiros', category: CATEGORY_DEFORESTATION, value: totalPMNM })
        //console.log('totalPMNM', totalPMNM)

        const totalRecreation = recreation(likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        impacts.push({ label: 'Recrea????o', displayName: 'Recrea????o', category: CATEGORY_DEFORESTATION, value: totalRecreation })
        //console.log('totalRecreation', totalRecreation)

        const totalCulturedAndSpecies = culturedAndSpecies(likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        impacts.push({ label: 'Esp??cies', displayName: 'Esp??cies', category: CATEGORY_DEFORESTATION, value: totalCulturedAndSpecies })
        //console.log('totalCulturedAndSpecies', totalCulturedAndSpecies)
        
        const totalCavaGroundingCostAuFertile = cavaGroundingCostAuFertile(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceanningCenter, goldValue)
        const totalCavaGroundingCostAuNorm = cavaGroundingCostAuNorm(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceanningCenter, hectareValue)
        impacts.push({ label: 'Aterramento de cava', displayName: 'Aterramento de cava', category: CATEGORY_SILTING_RIVERS, value:(totalCavaGroundingCostAuFertile+totalCavaGroundingCostAuNorm)})
        //console.log('totalCavaGroundingCostAuFertile', totalCavaGroundingCostAuFertile)
        //console.log('totalCavaGroundingCostAuNorm', totalCavaGroundingCostAuNorm)

        const totalRecoveryOfTopsoil = recoveryOfTopsoil(likeMining, distanceanningCenter, goldValue, gramadeOuroporHe, txPrevalence, typeValueLikeMining)
        impacts.push({ label: 'Recupera????o superficie do solo', displayName: 'Recupera????o superficie do solo', category: CATEGORY_DEFORESTATION, value: totalRecoveryOfTopsoil })
        //console.log('totalRecoveryOfTopsoil', totalRecoveryOfTopsoil)
 
        const totalDredgingAndRiverSediments = dredgingAndRiverSediments(likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectareValue)
        impacts.push({ label: 'Dragagem de sedimentos no rio', displayName: 'Dragagem de sedimentos no rio', category: CATEGORY_SILTING_RIVERS, value: totalDredgingAndRiverSediments })
        //console.log('totalDredgingAndRiverSediments', totalDredgingAndRiverSediments)
        
        const totalErosionSiltingUp = erosionSiltingUp(likeMining, txPrevalence, typeValueLikeMining, hectareValue)
        impacts.push({ label: 'Eros??o', displayName: 'Eros??o', category: CATEGORY_SILTING_RIVERS, value: totalErosionSiltingUp })
        //console.log('totalErosionSiltingUp', totalErosionSiltingUp)
    
        const totalNeuroSymptomsGarimpeiro = neuroSymptomsGarimpeiro(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, goldValue)//gold
        impacts.push({ label: 'Sintomas neuropsicol??gicos em garimpeiros', displayName: 'Sintomas neuropsicol??gicos em garimpeiros', category: CATEGORY_MERCURY, value: totalNeuroSymptomsGarimpeiro })
        //console.log('totalNeuroSymptomsGarimpeiro', totalNeuroSymptomsGarimpeiro)
        
        const totalLossQI = lossQI (likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        impacts.push({ label: 'Perda de Qi em Fetos', displayName: 'Perda de Qi em Fetos', category: CATEGORY_MERCURY, value: totalLossQI })
        //console.log('totalLossQI', totalLossQI)

        const totalHypertension = hypertension(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        //console.log('totalHypertension', totalHypertension)
        const totalHeartAttack = heartAttack(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, goldValue, knowRegion)//gold
        //console.log('totalHeartAttack', totalHeartAttack)
        impacts.push({ label: 'Doen??as cardiovasculares', displayName: 'Doen??as cardiovasculares (HIPERTENS??O + INFARTO)', category: CATEGORY_MERCURY, value: (totalHeartAttack+totalHypertension) })
        
        const totalsoilMercuryRemediation = soilMercuryRemediation(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, goldValue)//gold
        impacts.push({ label: 'Remedia????o de merc??rio no solo', displayName: 'Remedia????o de merc??rio no solo', category: CATEGORY_MERCURY, value: totalsoilMercuryRemediation })
        //console.log('totalsoilMercuryRemediation', totalsoilMercuryRemediation)

        const reducer = ((acc, current) => acc+current.value);
        const totalValue = impacts.reduce(reducer, 0);

        dispatch({ type: stateTypes.ADD_VALUE, payload: impacts })
        dispatch({ type: stateTypes.CHANGE_TOTALVALUE, payload: ToBRL(totalValue) })
        

        return {
            impacts,
            totalValue
        }
}

export default calcResults