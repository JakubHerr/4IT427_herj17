import {useContext} from "react";
import {WatchlistContext} from "@/context/WatchlistContext.tsx";

export function useWatchlist() {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error("useWatchlist musí být použitý uvnitř WatchlistProvider");
    }
    return context;
}