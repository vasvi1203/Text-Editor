import ColorModal from "./components/ColorModal";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import { ToolbarProvider } from "./context/ToolbarContext";
import { useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <>
      <ToolbarProvider>
        <Header />
        <Toolbar />
        <ColorModal isOpen = { isOpen }/>
        
        <div className="container">
          <Editor />
        </div>
      </ToolbarProvider>
    </>
  );
}

export default App;
