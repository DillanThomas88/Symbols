import "./output.css";
import React, { useState } from "react";
import { SinglePage } from "./components/Utility/SinglePage";
import { Home } from "./pages/Home";

function App() {
  const [tab] = useState("home");
  // const onClick = (e) => setTab(e.target.textContent);

  const mountPage = () => {
    switch (tab) {
      case "home":
        return <>{<Home />}</>;
      case "projects":
        return <>projects</>;
      case "contact":
        return <>contact</>;
      case "resume":
        return <>resume</>;
      // 404 page
      default:
        return (
          <div className="h-full grid content-center justify-center text-xl">
            <div className="text-center text-5xl">- 404 -</div>
            <div>page not found</div>
          </div>
        );
    }
  };

  return (
    <SinglePage
      // eslint-disable-next-line react/style-prop-object
      style={
        "font-default text-slate-800 bg-neutral-900 flex flex-col items-center justify-start"
      }
    >
      {mountPage()}
    </SinglePage>
  );
}

export default App;
