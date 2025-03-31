import {Suspense} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RandomColorAsync from "./pages/RandomColor/RandomColorAsync.ts";
import Loader from "./components/Loader/Loader.tsx";

const router = createBrowserRouter([
	{
		path: '/randomColor',
		element: (
			<Suspense fallback={<Loader/>}>
				<RandomColorAsync/>
			</Suspense>
		),
	},
]);

const Router = () => {
	return <RouterProvider router={router} />
};

export default Router;
