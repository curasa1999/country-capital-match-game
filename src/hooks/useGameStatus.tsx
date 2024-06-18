import { useEffect, useState } from "react"
import { IHash } from "../interfaces/map.interface"
import { IData } from "../interfaces/data.interface"
import { shuffle } from "../util/shuffle"

// Hook containing the game business logic
const useGameStatus = ({ data }: IData) => {
    const [items, setItems] = useState<string[]>([])
    const [activeItem, setActiveItem] = useState<string>("")
    const [winItems, setWinItems] = useState<string[]>([])
    const [errorItems, setErrorItems] = useState<string[]>([])
    const [errorNumber, setErrorNumber] = useState<number>(0)

    useEffect(() => {
        const _data = JSON.parse(data) as { [key: string]: string };
        const renderArr = []
        let index = 0
        const tempMap: IHash = {};

        for (const [key, value] of Object.entries(_data)) {
            tempMap[key] = index
            tempMap[value] = index
            index++
            renderArr.push(key, value)
        }
        setItems(shuffle(renderArr))
    }, [data])

    useEffect(() => {
        if (errorNumber === 3) alert("You lose")
        if (items.length !== 0 && winItems.length === items.length) alert("Winner")
    }, [errorNumber, winItems])

    const handleCheckGameStatus = (value: string, map: IHash) => {
        setActiveItem(activeItem === value ? "" : value)
        setErrorItems([])

        if (activeItem && activeItem !== value) {
            if (map[value] !== map[activeItem]) {
                setErrorItems([value, activeItem])
                setErrorNumber(prev => prev + 1)
            } else {
                setWinItems(prev => [...prev, value, activeItem])
            }
            setActiveItem("")

        }
    }

    return { items, activeItem, winItems, errorItems, errorNumber, handleCheckGameStatus }
}

export default useGameStatus