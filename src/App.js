import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Routes from "./routes/Routes";
import Loader from "./components/ui/Loader";

const App = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<Loader />}>
            <Routes />
        </Suspense>
    </BrowserRouter>
  );
};

export default App;
