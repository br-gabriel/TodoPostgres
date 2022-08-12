import { 
    BrowserRouter as Router, 
    Route, 
    Routes 
} from "react-router-dom";

import { Todos } from "./pages/Todos";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

export function RoutesApp() {
    // const Private = ({Item}) => {
    //     const signed = true;
    //     return signed > 0 ? <Item /> : <SignIn />;
    // };

    return (
        <Router>
            <Routes>
                <Route path="/todos" element={<Todos />} />
                <Route exact path="/" element={<SignIn />} /> 
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<SignIn />}/>
            </Routes>
        </Router>
    );
};