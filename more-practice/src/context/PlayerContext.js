import { createContext } from "react";

const PlayerContext = createContext({
    name: null,
    bid: null,
    win: null,
    bidsLost: null
})

export default PlayerContext;