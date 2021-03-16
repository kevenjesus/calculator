import { createContext, useReducer  } from 'react'
import { IMPACTED_AREA, NO, YES, OPPORTUNITY_COST, TX_PREVALENCE_MAX } from 'pages/Calculator/Form/consts'
import ptBR from 'utils/pt_BR'

const dataRegion = [
    {
        name: 'region',
        label: 'Sim',
        value: YES,
        checked: false
    },
    {
        name: 'region',
        label: 'Não',
        value: NO,
        checked: true
    },
]

const dataOverflow = [
    {
        name: 'overflow',
        label: 'Sim',
        value: YES,
        checked: true
    },
    {
        name: 'overflow',
        label: 'Não',
        value: NO,
        checked: false
    },
]


export const stateTypes = {
    SET_REGION_LIST: 'SET_REGION_LIST',
    SET_KNOW_REGION: 'SET_KNOW_REGION',
    SET_STATE_LIST: 'SET_STATE_LIST',
    SET_STATE: 'SET_STATE',
    SET_COUNTIES: 'SET_COUNTIES',
    SET_COUNTRY: 'SET_COUNTRY',
    SET_ANALYS_UNIT: 'SET_ANALYS_UNIT',
    SET_QTD_ANALYS_UNIT: 'SET_QTD_ANALYS_UNIT',
    SET_OVERFLOW_LIST: 'set_OVERFLOW_LIST',
    SET_OVERFLOW: 'SET_OVERFLOW',
    SET_PITDEPTH: 'SET_PITDEPTH',
    SET_VALUATION_METHOD: 'SET_VALUATION_METHOD',
    SET_TX_PREVALENCE: 'SET_TX_PREVALENCE',
    SET_LANGUAGE: 'SET_LANGUAGE'
}

const initialState = {
    calculator: {
        regionList: dataRegion,
        knowRegion: false,
        stateList: [],
        state: '',
        counties: [],
        country: '',
        analysisUnit: IMPACTED_AREA,
        qtdAnalysis: {
            value: '',
            error: false
        },
        overflowList: dataOverflow,
        overflow: NO,
        pitDepth: 2.5,
        valuatioMethod: OPPORTUNITY_COST,
        txPrevalence: TX_PREVALENCE_MAX,
    },
    language: ptBR
}


const calculatorReducer = (state, action) => {
    switch(action.type) {
        case stateTypes.SET_REGION_LIST:
            return {...state, regionList: action.payload};
        case stateTypes.SET_KNOW_REGION:
            return {...state, knowRegion: action.payload};
        case stateTypes.SET_STATE_LIST:
            return {...state, stateList: action.payload};
        case stateTypes.SET_STATE:
            return {...state, state: action.payload};
        case stateTypes.SET_COUNTIES:
            return {...state, counties: action.payload};
        case stateTypes.SET_COUNTRY:
            return {...state, country: action.payload};
        case stateTypes.SET_ANALYS_UNIT:
            return {...state, analysisUnit: action.payload};
        case stateTypes.SET_QTD_ANALYS_UNIT:
            return {...state, qtdAnalysis: action.payload};
        case stateTypes.SET_OVERFLOW_LIST:
            return {...state, overflowList: action.payload};
        case stateTypes.SET_OVERFLOW:
            return {...state, overflow: action.payload};
        case stateTypes.SET_PITDEPTH:
            return {...state, pitDepth: action.payload};
        case stateTypes.SET_VALUATION_METHOD:
            return {...state, valuatioMethod: action.payload};
        case stateTypes.SET_TX_PREVALENCE:
            return {...state, txPrevalence: action.payload};
        default:
            return state;
    }
};

const languageReducer = (state, action) => {
    switch(action.type) {
        case stateTypes.SET_LANGUAGE:
            return action.payload
        default:
            return state;
    }
}

const combineReducers = ({calculator, language}, action) => ({
    calculator: calculatorReducer(calculator, action),
    language: languageReducer(language, action)
})

export const AppContext = createContext({
    dispatch: () => null,
    state: initialState
});

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(combineReducers, initialState);
    return (
        <AppContext.Provider value={{ dispatch, state }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;