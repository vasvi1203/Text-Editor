import { useContext } from "react"
import ToolbarContext from "../context/ToolbarContext"
import ToolbarItem from "./ToolbarItem"

function ToolbarList() {
    const {items} = useContext(ToolbarContext)

    return (
        <>
            {items.map((item) => (
                <ToolbarItem key = {item.id} type = {item.type} cols = {item.col} icons = {item.icons} options = {item.options ? item.options : null} names = {item.names} />
            ))}
        </>
    )
}

export default ToolbarList