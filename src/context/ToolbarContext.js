import { useState, createContext } from "react"
import ToolbarData from "../data/ToolbarData"
import "react-color-palette/lib/css/styles.css"

const ToolbarContext = createContext()

export const ToolbarProvider = ({ children }) => {
    const [items, setItems] = useState(ToolbarData)

    // undo, redo, selectAll, bold, italic, underline, justifyLeft, justifyRight, justifyCenter, justifyFull, insertUnorderedList, insertOrderedList, outdent, indent, spell check
    const execFunc = (style, color) => {
        if(style === "spelling and grammar check") {
            var check = document.getElementById("myEditor")
            check.spellcheck = !check.spellcheck
        }
        else if(style === "print")
            window.print()
        else if(style === "text color") {
            console.log((color));
            document.execCommand("foreColor", false, color)
        }
        else if(style === "highlight color") {
            document.execCommand("hiliteColor", false, color)
        }     
        else if(style === "link") {
            document.execCommand("createLink", false, "https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand")
        }       
        else
            document.execCommand(style)
    }

    const copyText = async(e) => {
        console.log("copy");
    }

    const selectFont = (font) => {
        document.execCommand('fontName', false, font)
    }

    const fontSize = (size) => {
        console.log(typeof(parseInt(size)));
        document.execCommand('fontSize', false, parseInt(size))
    }

    return (
        <ToolbarContext.Provider
        value={{
            items,
            execFunc,
            copyText,
            selectFont,
            fontSize
        }}
        >
        {children}
        </ToolbarContext.Provider>
    )
}

export default ToolbarContext