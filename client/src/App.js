import "./App.css";
import Header from "./Header";
import Tale from "./Tale";

function App() {
  return (
    <main>
      <Header />

      <div className="tales">
        <Tale />
        <Tale />
      </div>
    </main>
  );
}

export default App;
