import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from 'utils/AppContext';
import { Menu, MenuItem } from '../ImpactsStyles';

const MenuimpactItem = ({label, link, active}) => {
    if(active) {
        return <MenuItem active>{label}</MenuItem>
    }
    return (
        <Link to={link}>
            <MenuItem>{label}</MenuItem>
        </Link>
    )
}



const MenuImpacts = ({active, hidden = []}) => {    
    const {state} = useContext(AppContext)
    const {language} = state
    const {impacts} = language

    const items = [
        {
            link: "/impacts/deforestation",
            label: impacts.menu.deforestation
        },
        {
            link: "/impacts/silting-of-rivers",
            label: impacts.menu.siltingOfRivers
        },
        {
            link: "/impacts/mercury-contamination",
            label: impacts.menu.mercuryContamination
        },
        {
            link: "/impacts/monetary-impacts",
            label: impacts.menu.monetaryImpacts
        }
    ]
    const [data, setData] = useState(items)


    useEffect(() => {
        const dataFilter = data.filter(item => {
            const find = hidden.find(i => i.toLowerCase() === item.label.toLowerCase())
            if(find) {
                return false
            }
            return true
        })
        setData(dataFilter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hidden])
    return (
        <Menu>
            {
                 data.map(item => (
                     <MenuimpactItem {...item} active={item.label === active} />
                 ))
            }
        </Menu>
    )   
    
}

export default MenuImpacts;