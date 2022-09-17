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
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/signin" element={<SignIn />} /> 
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<SignIn />}/>
                    <Route path="/" element={
                        <PrivateRoute>
                            <Todos />
                        </PrivateRoute>
                    } />
                </Routes>
            </AuthProvider>
        </Router>
    );
};