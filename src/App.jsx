
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-10 bg-white dark:bg-gray-900 text-black dark:text-white transition-all">
        <Header dark={dark} setDark={setDark} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

