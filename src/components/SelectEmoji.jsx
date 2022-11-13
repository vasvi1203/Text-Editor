import EmojiPicker from 'emoji-picker-react'

function SelectEmoji({ isEmojiOpen }) {
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  
  const insertEmoji = (emoji) => {
    let sel, range;
    if(window.getSelection) {
      sel = window.getSelection();
      if(sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();

        const el = document.createElement("span");
        el.innerHTML = emoji;

        let frag = document.createDocumentFragment(), node, lastNode;

        while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);

        // Preserve the selection
        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      } else if(document.selection && document.selection.type !== "Control") {
          // IE < 9
          document.selection.createRange().pasteHTML(emoji);
      }
    }
  }

  const onEmojiClick = (emojiData, event) => {
    // setChosenEmoji(emojiData);

    insertEmoji(`${emojiData.emoji}`)
  };

  return (
    <>
      {/* { chosenEmoji ? (
        <span>Your Emoji: 
          <Emoji
            unified={chosenEmoji.unified}
            emojiStyle={EmojiStyle.NATIVE}
          />
          {chosenEmoji.emoji}
        </span>
      ) : null } */}
      
      { isEmojiOpen && <EmojiPicker theme='dark' onEmojiClick={onEmojiClick} /> }
    </>
  )
}

export default SelectEmoji