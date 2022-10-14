import DropdownItem from "./DropdownItem"

function DropdownList() {
    const menu = [
        {
            "id": 1,
            "name": "File",
            "content": [
                {
                    "items": ["New", "Open", "Save", "Download", "Rename", "Print"],
                    "icons": ["fa-regular fa-file", "fa-regular fa-folder-open", "fa-regular fa-floppy-disk", "fa-regular fa-circle-down","fa-regular fa-pen-to-square", "fa-solid fa-print"]
                }
            ]
        },
        {
            "id": 2,
            "name": "Edit",
            "content": [
                {
                    "items": ["Undo", "Redo", "Copy", "Paste", "Select all"],
                    "icons": ["fa-solid fa-arrow-rotate-left", "fa-solid fa-arrow-rotate-right", "fa-regular fa-copy", "fa-regular fa-paste","fa-solid fa-file-lines"]
                }
            ]
        },
        {
            "id": 3,
            "name": "View",
            "content": [
                {
                    "items": ["Show ruler", "Show comments", "Fullscreen"],
                    "icons": ["fa-solid fa-ruler-combined", "fa-regular fa-comment-dots", "fa-solid fa-expand"]
                }
            ]
        },
        {
            "id": 4,
            "name": "Insert",
            "content": [
                {
                    "items": ["Image", "Table", "Drawing", "Emoji", "Horizontal line", "Special characters", "Equation", "Link"],
                    "icons": ["fa-regular fa-image", "fa-solid fa-table-cells", "fa-solid fa-draw-polygon", "fa-regular fa-face-laugh", "fa-solid fa-minus","fa-solid fa-section","fa-solid fa-equals", "fa-solid fa-link"], 
                }
            ]
        },
        {
            "id": 5,
            "name": "Format",
            "content": [
                {
                    "items": ["Text", "Paragraph styles", "Align & indent", "Line & paragraph spacing", "Columns", "Bullets & numbering", "Headers & footers", "Page orientation"],
                    "icons": ["fa-solid fa-font", "fa-solid fa-paragraph", "fa-solid fa-indent", "fa-solid fa-arrow-down-wide-short", "fa-regular fa-file-lines", "fa-solid fa-list-ol", "fa-solid fa-pager","fa-solid fa-file-arrow-up"]
                }
            ]
        },
        {
            "id": 6,
            "name": "Tools",
            "content": [
                {
                    "items": ["Spelling & grammar", "Word count", "Translate"],
                    "icons": ["fa-solid fa-spell-check", "fa-regular fa-file-word", "fa-solid fa-language"]
                }
            ]
        },
        {
            "id": 7,
            "name": "Help",
            "content": [
                {
                    "items": ["Keyboard Shortcuts"],
                    "icons": ["fa-regular fa-keyboard"]
                }
            ]
        },
    ]

    return (
        <>
            {menu.map((item) => (
                <DropdownItem key = {item.id} name = {item.name} content = {item.content}/>
            ))}
        </>
    )
}

export default DropdownList