import { stateTypes } from "utils/AppContext"
import goldToHecatere from "utils/GoldToHectare"
import hectareToGold from "utils/hactareToGold"
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
import remediacaoMercurioSolo from "./calculations/remediacaoMercurioSolo"
import woodAndNonWoodProducts from "./calculations/woodAndNonWoodProducts"
import { AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, IMPACTED_AREA } from "./consts"

const calcResults = (state, dispatch) => {
    const { calculator } = state
    const {
        knowRegion,
        counties,
        country,
        qtdAnalysis,
        pitDepth,
        txPrevalence } = calculator


        const impacts = []
        const hectareValue = calculator.analysisUnit === AMOUNT_GOLD ? goldToHecatere(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const goldValue = calculator.analysisUnit === IMPACTED_AREA ? hectareToGold(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const currentCountry = counties.find(c => c.id === Number(country))
        const especie = currentCountry.especies <= 0 ? state.especie : currentCountry.especies

        console.log(currentCountry)

        const totalBio = bioprospecting(hectareValue, txPrevalence)
        impacts.push({ label: 'BioProspecção', displayName: 'BioProspecção', category: CATEGORY_DEFORESTATION, value: totalBio })

        const totalCarbon = carbon(hectareValue)
        impacts.push({ label: 'Carbono', displayName: 'Carbono', category: CATEGORY_DEFORESTATION, value: totalCarbon })

        const totalPMNM = woodAndNonWoodProducts(hectareValue)
        impacts.push({ label: 'PMNM', displayName: 'Produtos não-madeireiros e madeireiros', category: CATEGORY_DEFORESTATION, value: totalPMNM })

        const totalRecreation = recreation(hectareValue, currentCountry.densidadePop2010, especie)
        impacts.push({ label: 'Recreação', displayName: 'Recreação', category: CATEGORY_DEFORESTATION, value: totalRecreation })

        const totalCulturedAndSpecies = culturedAndSpecies(hectareValue, currentCountry.densidadePop2010, especie)
        impacts.push({ label: 'Cultural/Espécies', displayName: 'Cultural / Espécies', category: CATEGORY_DEFORESTATION, value: totalCulturedAndSpecies })

        const totalCavaGroundingCostAuFertile = cavaGroundingCostAuFertile(hectareValue, currentCountry.distanciaGarimpoCentro)
        const totalCavaGroundingCostAuNorm = cavaGroundingCostAuNorm(hectareValue, pitDepth, currentCountry.distanciaGarimpoCentro)
        impacts.push({ label: 'Aterramento de cava', displayName: 'Aterramento de cava', category: CATEGORY_SILTING_RIVERS, value:(totalCavaGroundingCostAuFertile+totalCavaGroundingCostAuNorm)})

        const totalRecoveryOfTopsoil = recoveryOfTopsoil(hectareValue, txPrevalence, currentCountry.distanciaGarimpoCentro)
        impacts.push({ label: 'Recuperaçãoo superficie do solo', displayName: 'Recuperaçãoo superficie do solo', category: CATEGORY_DEFORESTATION, value: totalRecoveryOfTopsoil })

        const totalDredgingAndRiverSediments = dredgingAndRiverSediments(hectareValue, pitDepth, currentCountry.distanciaGarimpoCentro)
        impacts.push({ label: 'Dragagem de sedimentos no rio', displayName: 'Dragagem de sedimentos no rio', category: CATEGORY_SILTING_RIVERS, value: totalDredgingAndRiverSediments })

        const totalErosionSiltingUp = erosionSiltingUp(hectareValue, txPrevalence)
        impacts.push({ label: 'Erosão', displayName: 'Erosão', category: CATEGORY_SILTING_RIVERS, value: totalErosionSiltingUp })

        const totalNeuroSymptomsGarimpeiro = neuroSymptomsGarimpeiro(goldValue, txPrevalence)
        impacts.push({ label: 'Sintomas neuropsicológicos em garimpeiros', displayName: 'Sintomas neuropsicológicos em garimpeiros', category: CATEGORY_MERCURY, value: totalNeuroSymptomsGarimpeiro })

        const totalLossQI = lossQI(goldValue, currentCountry.popRuralMunicipio, currentCountry.popUrbMunicipio, txPrevalence, currentCountry.densidadePop2060, knowRegion)
        impacts.push({ label: 'Perda de Qi em Fetos', displayName: 'Perda de Qi em Fetos', category: CATEGORY_MERCURY, value: totalLossQI })
        
        const totalHypertension = hypertension(goldValue, currentCountry.popRuralMunicipio, currentCountry.popUrbMunicipio, txPrevalence, currentCountry.densidadePop2060, knowRegion)
        const totalHeartAttack = heartAttack(goldValue, currentCountry.popRuralMunicipio, currentCountry.popUrbMunicipio, txPrevalence, currentCountry.densidadePop2060, knowRegion)
        impacts.push({ label: 'Doenças cardiovasculares (HIPERTENSAO + INFARTO)', displayName: 'Doenças cardiovasculares (HIPERTENSAO + INFARTO)', category: CATEGORY_MERCURY, value: (totalHeartAttack+totalHypertension) })

        

        const totalRemediacaoMercurioSolo = remediacaoMercurioSolo(goldValue, txPrevalence)
        impacts.push({ label: 'Remediação de mercúrio no solo', displayName: 'Remediação de mercúrio no solo', category: CATEGORY_MERCURY, value: totalRemediacaoMercurioSolo })

        const reducer = ((acc, current) => acc+current.value);
        const totalValue = impacts.reduce(reducer, 0);

        dispatch({ type: stateTypes.ADD_VALUE, payload: impacts })
        dispatch({ type: stateTypes.CHANGE_TOTALVALUE, payload: totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) })

        return {
            impacts,
            totalValue
        }
}

export default calcResults