import "css/global/Global.css";

import { Route, Routes as RoutesImport, BrowserRouter } from "react-router-dom";
import VotePage from "components/VotePage";

function App() {
  return (
    <BrowserRouter>
      <RoutesImport>
        <Route path="/" element={<VotePage />} />
      </RoutesImport>
    </BrowserRouter>
  );
}

export default App;
