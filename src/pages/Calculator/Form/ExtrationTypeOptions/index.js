import React from 'react'
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, YEARS_OF_MINING } from '../consts'

const ExtrationTypeOptions = ({type, translate}) => {
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
                <option value={MONTHS_OF_MINING}>{translate.analysisUnit.monthsMining.headline}</option>
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