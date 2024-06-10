import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Weather from "../weather";
import Datecom from "../Date"



let router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/weather",
        element: <Weather />

    },
    {
        path: "/date",
        element: <Datecom />

    }
]);
export default router