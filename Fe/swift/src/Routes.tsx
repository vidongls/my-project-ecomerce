import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Screen/Home"
interface Props {}

const AppRoutes = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default AppRoutes
