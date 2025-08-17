import { Children, createContext, useState } from "react";

const WatchListContext=createContext();
export const WatchListProvider=()=>{
    const[watchlist,setWatchlist]=useState([]);
    const toggleWatchlist=(movie)=>{
        const index=watchlist.findIndex((m)=>m.id===movie.id);
        if(index===-1){
            setWatchlist([...watchlist,movie])
        }
        else{
            setWatchlist([...watchlist.slice(0,index)...Children])
        }
    }
    return(
        <WatchListContext.Provider value={{watchlist,setWatchlist}}>
            {Children}
        </WatchListContext.Provider>
    )
}