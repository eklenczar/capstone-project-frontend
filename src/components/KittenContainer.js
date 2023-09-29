import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchKittens } from "./kittenSlice";
import KittenCard from './KittenCard';


function KittenContainer() {
    const kittens = useSelector((state) => state.kittens.entities);

    const dispatch = useDispatch()

    React.useEffect(() => {console.log(kittens)}, [kittens])
    React.useEffect(() => {dispatch(fetchKittens())}, [])

    

  return (
    <div>
        <KittenCard kittens={kittens} />
    </div>
  )
}

export default KittenContainer