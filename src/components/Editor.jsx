function Editor() {
  return (
    <div className="myEditor" contentEditable="true">
    </div>
  )
}
// var span = document.createElement("b");

// if (window.getSelection) {
//     var sel = window.getSelection();
//     if (sel.rangeCount) {
//         var range = sel.getRangeAt(0).cloneRange();
//         range.surroundContents(span);
//         sel.removeAllRanges();
//         sel.addRange(range);
//     }
// }
export default Editor