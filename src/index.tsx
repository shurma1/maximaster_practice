import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Router, {IRouting} from "./Router.tsx";
import Loader from "./components/Loader/Loader.tsx";
import RandomColorAsync from "./pages/RandomColor/RandomColorAsync.ts";
import Layout from "./components/Layout/Layout.tsx";
import {RoutesEnum} from "./constants/routes.ts";


export const routing: IRouting[] = [
	{
		path: RoutesEnum.RandomColor,
		element: (
			<Suspense fallback={<Loader/>}>
				<RandomColorAsync/>
			</Suspense>
		),
		name: 'Случайный цвет'
	}
]

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Layout>
			<Router
				routing={routing}
			/>
		</Layout>
	</StrictMode>,
)
