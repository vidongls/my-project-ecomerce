import { Layout } from "antd"
import React from "react"
import Sidebar from "./Sidebar"

const { Header, Content, Footer } = Layout

const DefaultLayout = (props) => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sidebar />
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }} />
				<Content style={{ margin: "16px" }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
						{props.children}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	)
}

export default DefaultLayout
