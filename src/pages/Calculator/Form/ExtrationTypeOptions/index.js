import React from 'react'
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, QTD_FERRY, YEARS_OF_MINING } from '../consts'

const ExtrationTypeOptions = ({value, type, translate}) => {
    if (type === ALLUVIUM) {
        return (
            <>
                <option value={IMPACTED_AREA}>{translate.analysisUnit.goldMiningSize.headline}</option>
                <option value={AMOUNT_GOLD}>{translate.analysisUnit.goldType.headline}</option>
            </>
        )
    }else if (type === FERRY) {
        return (
            <>
                <option value={QTD_FERRY}>{translate.analysisUnit.qtdFerry.headline}</option>
                {/* <option value={MONTHS_OF_MINING}>{translate.analysisUnit.monthsMining.headline}</option> */}
                <option value={AMOUNT_GOLD}>{translate.analysisUnit.goldType.headline}</option>
            </>
        )
    }else {
        return (
            <>
                <option value={YEARS_OF_MINING}>{translate.analysisUnit.yearsMining.headline}</option>
                <option value={AMOUNT_GOLD}>{translate.analysisUnit.goldType.headline}</option>
            </>
        )
    }
}

export default ExtrationTypeOptions