import { 
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";
import { Todos } from "./pages/Todos";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { AuthProvider } from "./contexts/authContext";
import { PrivateRoute } from "./components/privateRoute";

export function RoutesApp() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<SignIn />} /> 
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<SignIn />}/>
                    <Route path="/todos" element={
                        <PrivateRoute>
                            <Todos />
                        </PrivateRoute>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
};