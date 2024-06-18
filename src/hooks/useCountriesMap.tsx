import { useEffect, useState } from "react";
import { IHash } from "../interfaces/map.interface";
import { IData } from "../interfaces/data.interface"

// Creates a hash map where Countries and their capitols have the same values
const useCountriesMap = ({ data }: IData) => {
    const [countriesMap, setCountriesMap] = useState<IHash>({})

    useEffect(() => {
        const _data = JSON.parse(data) as { [key: string]: string };
        let index = 0
        const tempMap: IHash = {};
        for (const [key, value] of Object.entries(_data)) {
            tempMap[key] = index
            tempMap[value] = index
            index++
        }
        setCountriesMap(tempMap)
    }, [])

    return { countriesMap }
}

export default useCountriesMap