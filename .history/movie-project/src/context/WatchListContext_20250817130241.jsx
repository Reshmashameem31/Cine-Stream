import {createContext, useState } from "react";

export const WatchListContext=createContext();
export const WatchListProvider=({children})=>{
    const[watchlist,setWatchlist]=useState([]);
    const[genreList,setGenreList]=useState([])
    const toggleWatchlist=(movie)=>{
        const index=watchlist.findIndex((m)=>m.id===movie.id);
        if(index===-1){
            setWatchlist([...watchlist,movie])
        }
        else{
            setWatchlist([...watchlist.slice(0,index),...watchlist.slice(index+1)])
        }
    }
    return(
        <WatchListContext.Provider value={{watchlist,toggleWatchlist}}>
            {children}
        </WatchListContext.Provider>
    )
}