import { Routes,Route } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout.JSX";
function App(){
  return (<>
  <Routes>
    <Route path="/login" element={<LoginLayout />}/>
  </Routes>
</>)
}

export default App;