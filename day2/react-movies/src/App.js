import './App.css';
import CallOut from "./components/CallOut";
import Header from "./components/Header";

function App() {

  // JSX
  return (
    <div>
      {/* we can send data via props like so (they look like html attributes) */}
      <Header dayTitle="Friday" size="large" />

      <CallOut />

      <CallOut />


      <Header />

      <CallOut />


      <Header />



      <Header />

    </div>
  );
}

export default App;
