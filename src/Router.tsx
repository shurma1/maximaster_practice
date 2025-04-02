import {FC, ReactElement} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


export interface IRouting {
	path: string;
	element: ReactElement | ReactElement[];
	name: string;
}

interface IRouterProps {
	routing: IRouting[];
}

const Router: FC<IRouterProps> = ({routing}) => {
	const router = createBrowserRouter(routing.map(routerElement => ({path: routerElement.path, element: routerElement.element})));
	return <RouterProvider router={router} />
};

export default Router;
