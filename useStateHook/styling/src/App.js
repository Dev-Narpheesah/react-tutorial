import "./App.css";

import Content from "./Content";

import Footer from "./Footer";

import Header from "./Header";

function App() {
  // const name = "Hayzed";

  const handleNameChange = () => {
    const names = ["Fulani", "Eef", "Hoyee"];

    const int = Math.floor(Math.random() * 3);

    return names[int];
  };
  return (
    <div className="App">
      <Header title = "Welcome to props"/>

      <Content />

      <Footer />
    </div>
  );
}

export default App;
