import { RouterProvider, createHashRouter } from "react-router-dom";
import { URL } from "./constants/DireccionesWeb";
import PaginaPrincipal from "./routes/PaginaPrincipal";

const router = createHashRouter([
  {
    path: URL.HOME,
    element: <PaginaPrincipal/>
  },
  {
    path: URL.LOGIN,
    element: <></>
  },
  {
    path: URL.REGISTER,
    element: <></>
  }
]);

export default function App() {
	return (
		<RouterProvider router={router}/>
	)
}