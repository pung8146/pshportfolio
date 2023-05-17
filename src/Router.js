import { createBrowserRouter} from "react-router-dom"
import App from "./App"

// 페이지 컴포넌트들
import Main from "./pages/Main";
import Project from "./pages/ProjectPage";
import Skiles from "./pages/Skiles";
import Hire from "./pages/Hire";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/project",
                element: <Project/>,
            },
        ],
        },
    ]);


export default router;