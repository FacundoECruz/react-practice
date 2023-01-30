import { createContext, useReducer } from "react";
import gameReducer, {initialGame} from "./GameReducer";

const GameContext = createContext();

const GameProvider = ({ children }) => {
    
    const [game, dispatch] = useReducer(gameReducer, initialGame)

    return(
        <GameContext.Provider value={[game, dispatch]}>
            {children}
        </GameContext.Provider>
    )
}

export {GameContext};
export default GameProvider;