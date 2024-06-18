import useGameStatus from "../hooks/useGameStatus";
import useCountriesMap from "../hooks/useCountriesMap";
import { IData } from "../interfaces/data.interface";

const MatchGame = (data: IData) => {
    const { items, activeItem, winItems, errorItems, errorNumber, handleCheckGameStatus } = useGameStatus(data)
    const { countriesMap } = useCountriesMap(data)

    const handleCardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLInputElement
        handleCheckGameStatus(button.innerText, countriesMap)
    }


    return (<div>
        <h1>Country Match game</h1>
        <div className="card-container">
            {items.map((item) => <button disabled={winItems.includes(item)}
                className={`item ${activeItem.includes(item) ? "active" : winItems.includes(item) ? "won" : errorItems.includes(item) ? "error" : ""}`}
                onClick={handleCardClick} key={item} >{item}</button>)}
        </div>
        {errorNumber > 0 && (<p>Errors: {errorNumber}</p>)}
    </div>);
}

export default MatchGame;