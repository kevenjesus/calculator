import { BRAZIL, countries_region } from "components/CountrySelect"

const getValueToCountry = (country_region, total, dolarReal) => {
   const value = country_region.country === countries_region[BRAZIL].country ? total*dolarReal : total
   return value
} 

export default getValueToCountry