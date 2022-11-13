import ColorModal from "./components/ColorModal";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import { ToolbarProvider } from "./context/ToolbarContext";
import { useSelector } from "react-redux";
import SelectEmoji from "./components/SelectEmoji";

function App() {
  const { isModalOpen } = useSelector((state) => state.modal);
  const { isEmojiOpen } = useSelector((state) => state.emoji);

  return (
    <>
      <ToolbarProvider>
        <Header />
        <Toolbar />
        <ColorModal isModalOpen = { isModalOpen }/>
        
        <div className="container">
          <Editor />
        </div>

        <div className="selectEmoji">
          <SelectEmoji isEmojiOpen = { isEmojiOpen } />
        </div>

      </ToolbarProvider>
    </>
  );
}

export default App;
