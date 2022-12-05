import { ALLUVIUM, FERRY, QTD_FERRY } from 'pages/Calculator/Form/consts'
import { IMPACTED_AREA, AMOUNT_GOLD, YEARS_OF_MINING } from 'pages/Calculator/Form/consts'
import { ItemType, Title, Paragraphy } from '../style'
import { Col } from 'react-flexbox-grid'
import React from 'react'

const ExtractionType = ({type, state, translate, handleState}) => {
    if(type === ALLUVIUM) {
        return (
            <>
                <Col xs={6}>
                    <ItemType active={state === IMPACTED_AREA} onClick={() => handleState(IMPACTED_AREA)}>
                    <Title>{translate.analysisUnit.goldMiningSize.headline}</Title>
                        <Paragraphy>
                            {translate.analysisUnit.goldMiningSize.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>{translate.analysisUnit.goldType.headline}</Title>
                        <Paragraphy>
                            {translate.analysisUnit.goldType.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </>
        )
    }else if(type === FERRY) {
        return (
            <>
                <Col xs={6}>
                    <ItemType active={state === QTD_FERRY} onClick={() => handleState(QTD_FERRY)}>
                    <Title>{translate.analysisUnit.qtdFerry.headline}</Title>
                        <Paragraphy>
                            {translate.analysisUnit.qtdFerry.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>{translate.analysisUnit.goldType.headline}</Title>
                        <Paragraphy>
                            {translate.analysisUnit.goldType.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </>
        )
    }else {
        return (
            <>
                <Col xs={6}>
                    <ItemType active={state === YEARS_OF_MINING} onClick={() => handleState(YEARS_OF_MINING)}>
                    <Title>{translate.analysisUnit.yearsMining.headline}</Title>
                        <Paragraphy>
                            {translate.analysisUnit.yearsMining.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>{translate.analysisUnit.goldType.headline}</Title>
                        <Paragraphy>
                            {translate.analysisUnit.goldType.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </>
        )
    }
}

export default ExtractionType