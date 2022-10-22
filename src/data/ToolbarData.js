const ToolbarData = [
    {
        "id": 1,
        "type": "button",
        "col": {
                "xs": [12, 0],
                "sm": [5, 0],
                "md": [4, 0],
                "lg": [3, 0],
                "xxl": [2, 0]
        },
        "icons": ["fa-solid fa-arrow-rotate-left", "fa-solid fa-arrow-rotate-right", "fa-regular fa-copy", "fa-regular fa-paste", "fa-solid fa-file-lines"],
        "names": ["undo", "redo", "copy", "paste", "selectAll"]
    },
    {
        "id": 2,
        "type": "form1",
        "col": {
                "xs": [4, 2],
                "sm": [3, 0],
                "md": [2, 0],
                "lg": [3, 0],
                "xxl": [1, 0]
        },
        "options": ["Arial", "Calibri", "Times New Roman", "Cambria Math", "Algerian"],
        "names": ["font"]
    },
    {
        "id": 3,
        "type": "form2",
        "col": {
                "xs": [4, 0],
                "sm": [3, 0],
                "md": [2, 0],
                "lg": [3, 0],
                "xxl": [1, 0]
        },
        "names": ["fontSize"]
    },
    {
        "id": 4,
        "type": "button",
        "col": {
            "xs": [12, 0],
            "sm": [5, 0],
            "md": [4, 0],
            "lg": [3, 0],
            "xxl": [2, 0]
        },
        "icons": ["fa-solid fa-bold", "fa-solid fa-italic", "fa-solid fa-underline", "fa-solid fa-a border-bottom border-3", "fa-solid fa-highlighter border-bottom border-3"],
        "names": ["bold", "italic", "underline", "text-color", "highlight-color"]
    },
    {
        "id": 5,
        "type": "button",
        "col": {
            "xs": [12, 0],
            "sm": [6, 1],
            "md": [4, 0],
            "lg": [3, 0],
            "xxl": [2, 0]
        },
        "icons": ["fa-solid fa-align-left", "fa-solid fa-align-center", "fa-solid fa-align-right", "fa-solid fa-align-justify", "fa-solid fa-arrow-down-wide-short"],
        "names": ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "spacing"]
    },
    {
        "id": 6,
        "type": "button",
        "col": {
            "xs": [12, 0],
            "sm": [5, 0],
            "md": [4, 0],
            "lg": [4, 1],
            "xxl": [2, 0]
        },
        "icons": ["fa-solid fa-list-ul", "fa-solid fa-list-ol", "fa-solid fa-outdent", "fa-solid fa-indent"],
        "names": ["insertUnorderedList", "insertOrderedList", "outdent", "indent"]
    },        
    {
        "id": 7,
        "type": "button",
        "col": {
            "xs": [12, 0],
            "sm": [6, 1],
            "md": [4, 0],
            "lg": [3, 1],
            "xxl": [2, 0]
        },
        "icons": ["fa-solid fa-link", "fa-regular fa-comment-dots", "fa-regular fa-image", "fa-solid fa-print", "fa-solid fa-spell-check"],
        "names": ["link", "comment", "image", "print", "spell-check"]
    },        
]

export default ToolbarData