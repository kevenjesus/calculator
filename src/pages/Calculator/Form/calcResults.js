import { stateTypes } from "utils/AppContext"
import goldToHecatere from "utils/GoldToHectare"
import hectareToGold, { goldenGramForHectare } from "utils/hactareToGold"
import ToBRL from "utils/toBRL"
import bioprospecting from "./calculations/bioprospeccao"
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
import { AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, IMPACTED_AREA, PIT } from "./consts"

const calcResults = (state, dispatch) => {
    const { calculator } = state
    const {
        knowRegion,
        counties,
        country,
        qtdAnalysis,
        pitDepth,
        txPrevalence,
        valuatioMethod } = calculator


        const impacts = []
        const hectareValue = calculator.analysisUnit === AMOUNT_GOLD ? goldToHecatere(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const goldValue = calculator.analysisUnit === IMPACTED_AREA ? hectareToGold(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const gramadeOuroporHe = goldenGramForHectare(hectareValue, goldValue)
        const currentCountry = counties.find(c => c.id === Number(country))
        const densidadePop2010 = knowRegion ? currentCountry.densidadePop2010 : 4.12;
        const densidadePop2060 = knowRegion ? currentCountry.densidadePop2060  : 6.0;
        const popUrbMunicipio = knowRegion ? currentCountry.popUrbMunicipio : 73.53;
        const popRuralMunicipio = knowRegion ? currentCountry.popRuralMunicipio : 212.74
        const especie = knowRegion ? (currentCountry.especies <= 0 ? state.especie : currentCountry.especies) : 69.21



        const totalBio = bioprospecting(hectareValue, txPrevalence, valuatioMethod)
        impacts.push({ label: 'BioProspecção', displayName: 'BioProspecção', category: CATEGORY_DEFORESTATION, value: totalBio })
        //console.log('totalBio', totalBio)

        const totalCarbon = carbon(hectareValue, valuatioMethod)
        impacts.push({ label: 'Carbono', displayName: 'Carbono', category: CATEGORY_DEFORESTATION, value: totalCarbon })
        //console.log('totalCarbon',totalCarbon) 

        const totalPMNM = woodAndNonWoodProducts(hectareValue, valuatioMethod)
        impacts.push({ label: 'PMNM', displayName: 'Produtos não-madeireiros e madeireiros', category: CATEGORY_DEFORESTATION, value: totalPMNM })
        //console.log('totalPMNM', totalPMNM)

        const totalRecreation = recreation(hectareValue, valuatioMethod) // currentCountry.densidadePop2010, especie,
        impacts.push({ label: 'Recreação', displayName: 'Recreação', category: CATEGORY_DEFORESTATION, value: totalRecreation })
        //console.log('totalRecreation', totalRecreation)

        const totalCulturedAndSpecies = culturedAndSpecies(hectareValue, currentCountry.densidadePop2010, especie, valuatioMethod)
        impacts.push({ label: 'Cultural/Espécies', displayName: 'Cultural / Espécies', category: CATEGORY_DEFORESTATION, value: totalCulturedAndSpecies })
        //console.log('totalCulturedAndSpecies', totalCulturedAndSpecies)

        const totalCavaGroundingCostAuFertile = cavaGroundingCostAuFertile(hectareValue, goldValue, pitDepth, currentCountry.distanciaGarimpoCentro, valuatioMethod, qtdAnalysis.value)
        const totalCavaGroundingCostAuNorm = cavaGroundingCostAuNorm(hectareValue,goldValue, pitDepth, currentCountry.distanciaGarimpoCentro, valuatioMethod)
        impacts.push({ label: 'Aterramento de cava', displayName: 'Aterramento de cava', category: CATEGORY_SILTING_RIVERS, value:(totalCavaGroundingCostAuFertile+totalCavaGroundingCostAuNorm)})
        //console.log('totalCavaGroundingCostAuFertile', totalCavaGroundingCostAuFertile)
        //console.log('totalCavaGroundingCostAuNorm', totalCavaGroundingCostAuNorm)

        const totalRecoveryOfTopsoil = recoveryOfTopsoil(txPrevalence, currentCountry.distanciaGarimpoCentro, goldValue, gramadeOuroporHe, valuatioMethod)
        impacts.push({ label: 'Recuperaçãoo superficie do solo', displayName: 'Recuperaçãoo superficie do solo', category: CATEGORY_DEFORESTATION, value: totalRecoveryOfTopsoil })
        //console.log('totalRecoveryOfTopsoil', totalRecoveryOfTopsoil)

        const totalDredgingAndRiverSediments = dredgingAndRiverSediments(hectareValue, pitDepth, currentCountry.distanciaGarimpoCentro, goldValue, valuatioMethod)
        impacts.push({ label: 'Dragagem de sedimentos no rio', displayName: 'Dragagem de sedimentos no rio', category: CATEGORY_SILTING_RIVERS, value: totalDredgingAndRiverSediments })
        //console.log('totalDredgingAndRiverSediments', totalDredgingAndRiverSediments)

        const totalErosionSiltingUp = erosionSiltingUp(hectareValue, txPrevalence, valuatioMethod)
        impacts.push({ label: 'Erosão', displayName: 'Erosão', category: CATEGORY_SILTING_RIVERS, value: totalErosionSiltingUp })
        //console.log('totalErosionSiltingUp', totalErosionSiltingUp)

        const totalNeuroSymptomsGarimpeiro = neuroSymptomsGarimpeiro(goldValue, txPrevalence, PIT)//gold
        impacts.push({ label: 'Sintomas neuropsicológicos em garimpeiros', displayName: 'Sintomas neuropsicológicos em garimpeiros', category: CATEGORY_MERCURY, value: totalNeuroSymptomsGarimpeiro })
        //console.log('totalNeuroSymptomsGarimpeiro', totalNeuroSymptomsGarimpeiro)

        const totalLossQI = lossQI(goldValue, currentCountry.popRuralMunicipio, currentCountry.popUrbMunicipio, txPrevalence, currentCountry.densidadePop2060, knowRegion, valuatioMethod)//gold
        impacts.push({ label: 'Perda de Qi em Fetos', displayName: 'Perda de Qi em Fetos', category: CATEGORY_MERCURY, value: totalLossQI })
        //console.log('totalLossQI', totalLossQI)

        const totalHypertension = hypertension(goldValue, currentCountry.popRuralMunicipio, currentCountry.popUrbMunicipio, txPrevalence, currentCountry.densidadePop2060, knowRegion, valuatioMethod)//gold
        //console.log('totalHypertension', totalHypertension)
        const totalHeartAttack = heartAttack(goldValue, currentCountry.popRuralMunicipio, currentCountry.popUrbMunicipio, txPrevalence, currentCountry.densidadePop2060, knowRegion, valuatioMethod)//gold
        //console.log('totalHeartAttack', totalHeartAttack)
        impacts.push({ label: 'Doenças cardiovasculares', displayName: 'Doenças cardiovasculares (HIPERTENSAO + INFARTO)', category: CATEGORY_MERCURY, value: (totalHeartAttack+totalHypertension) })

        const totalsoilMercuryRemediation = soilMercuryRemediation(goldValue, txPrevalence, valuatioMethod)//gold
        impacts.push({ label: 'Remediação de mercúrio no solo', displayName: 'Remediação de mercúrio no solo', category: CATEGORY_MERCURY, value: totalsoilMercuryRemediation })
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