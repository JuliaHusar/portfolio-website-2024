import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import {RuinTheAuxPrivacy} from "./components/RuinTheAuxPrivacy.jsx";
import ReactDOM, {createRoot} from "react-dom/client";

export const WebRouting = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/RuinTheAuxPrivacyPolicy",
                element: <RuinTheAuxPrivacy/>
            },
        ]
    }
]);
createRoot(
    document.getElementById("root")
).render(
    <RouterProvider router={WebRouting} />,
);