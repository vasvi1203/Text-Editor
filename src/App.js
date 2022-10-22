import Editor from "./components/Editor";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import {ToolbarProvider} from "./context/ToolbarContext";

function App() {
  return (
    <>
      <ToolbarProvider>
        <Header />
        <Toolbar />
        
        <div className="container">
          <Editor />
        </div>
      </ToolbarProvider>
    </>
  );
}

export default App;
