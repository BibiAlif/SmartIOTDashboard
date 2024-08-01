import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Auth, DashboardGov, HomePublicMenu } from "@/layouts";

import SignIn from "../src/pages/auth/sign-in";
import SignUp from "../src/pages/auth/sign-up";


function App() {

  
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/dashboardGov/*" element={<DashboardGov />} />
      <Route path="/dashboardPublic/*" element={<HomePublicMenu />} />
      
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}


export default App;
