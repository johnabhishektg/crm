import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Dashboard</h2>
      <Dashboard />
    </div>
  );
}

export default App;
