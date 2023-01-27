import { createContext } from "react";

const PlayerContext = createContext({
    name: null,
    score: null,
})

export default PlayerContext;