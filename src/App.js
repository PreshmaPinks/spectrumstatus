import "./App.css";
import SpectrumA from "./component/spectrumA";
import SpectrumB from "./component/spectrumB";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SpectrumA />,
    },
    {
      path: "/spectrumLive",
      element: <SpectrumB />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
