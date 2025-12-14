import { lazy, Suspense } from "react";

import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <LoadingProvider>
      <div className="app-root">
        <Suspense fallback={null}>
          <CharacterModel />
          <MainContainer />
        </Suspense>
      </div>
    </LoadingProvider>
  );
};

export default App;
