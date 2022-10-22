import { useState, createContext } from "react"
import ToolbarData from "../data/ToolbarData"

const ToolbarContext = createContext()

export const ToolbarProvider = ({ children }) => {
    const [items, setItems] = useState(ToolbarData)

    const execFunc = (style) => {
        // console.log(style);
        // if (window.getSelection) {
        //     var selectedText = window.getSelection();
        //     if (selectedText.rangeCount) {
        //         var range = selectedText.getRangeAt(0);
        //         // var parent = range.commonAncestorContainer.parentNode;
        //         // console.log(parent.innerHTML.includes("<i>"));
        //         // console.log(parent);
        //         // console.log(parent.nodeName);
        //         console.log(range.toString());

        //         const startNode = selectedText.anchorNode
        //         const startOffset = selectedText.anchorOffset
        //         const spNode = startNode.parentNode
        //         const sppNode = spNode.parentNode

        //         const endNode = selectedText.focusNode
        //         const endOffset = selectedText.focusOffset
        //         const epNode = endNode.parentNode
        //         const eppNode = epNode.parentNode
                
        //         console.log(startNode);
        //         console.log(startOffset);
        //         console.log(spNode);
        //         console.log(sppNode);

        //         console.log(endNode);
        //         console.log(endOffset);
        //         console.log(epNode);
        //         console.log(eppNode);

                // var element = ""
                // if(style === "bold" || style === "italic" || style === "underline") {
                //     element = document.createElement(style[0])
                //     const element_content = document.createTextNode(selectedText.toString())
                //     element.appendChild(element_content)
                //     range.deleteContents()
                //     range.insertNode(element)
                // }

                // alignment
                // else {
                //     element = document.createElement("div")
                //     element.style.textAlign = "right"
                //     element.appendChild(range.extractContents())
                //     range.deleteContents()
                //     range.insertNode(element)
                // }
                
                // if(spNode.nodeName === "B" && epNode.nodeName === "B") {
                //     const b1 = document.createElement("b")
                //     const b1_content = document.createTextNode(startNode.textContent + endNode.textContent.slice(0, endOffset))
                //     b1.appendChild(b1_content)
                //     sppNode.replaceChild(b1, spNode)
                //     endNode.textContent = endNode.textContent.replace(endNode.textContent.slice(0, endOffset), "")
                // }

                // else if(spNode.nodeName === "B") {
                //     const b1 = document.createElement("b")
                //     const b1_content = document.createTextNode(startNode.textContent + endNode.textContent.slice(0, endOffset))
                //     b1.appendChild(b1_content)
                //     sppNode.replaceChild(b1, spNode)
                //     endNode.textContent = endNode.textContent.replace(endNode.textContent.slice(0, endOffset), "")
                // }

                // else if(epNode.nodeName === "B") {
                //     const b1 = document.createElement("b")
                //     const b1_content = document.createTextNode(startNode.textContent.slice(startOffset, ) + endNode.textContent)
                //     b1.appendChild(b1_content)
                //     eppNode.replaceChild(b1, epNode)
                //     startNode.textContent = startNode.textContent.replace(startNode.textContent.slice(startOffset, ), "")
                // }

                // else if(spNode.nodeName !== "B") {
                //     const b1 = document.createElement("b")
                //     const b1_content = document.createTextNode(selectedText.toString())
                //     b1.appendChild(b1_content)
                //     range.deleteContents()
                //     range.insertNode(b1)
                // }                

                // console.log(range.startContainer.parentElement);
                // if(span.style.fontWeight === "bold") {
                //     console.log("bold");
                // }
                // span.appendChild(range.extractContents());
                // range.insertNode(span);
        //     }
        // }

        document.execCommand(style)
    }

    const copyText = async(e) => {
        console.log("copy");
    }

    const selectFont = (e) => {
        document.execCommand('fontName', false, e.target.value)
    }

    return (
        <ToolbarContext.Provider
        value={{
            items,
            execFunc,
            copyText,
            selectFont
        }}
        >
        {children}
        </ToolbarContext.Provider>
    )
}

export default ToolbarContext