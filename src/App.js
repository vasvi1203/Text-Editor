import Editor from "./components/Editor";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <>
      <Header />
      <Toolbar />
      
      <div className="container">
        <Editor />
      </div>
    </>
  );
}

export default App;
