import React, { useState } from "react"
import { Layout, Spin } from "antd"
import Header from "./Header"
import Footer from "./Footer"

const { Content } = Layout

export const DefaultLayout = (props: any) => {
	const [loading] = useState(false)

	return (
		<Layout className="main-layout">
			<Header />
			<Content className="maint-content">
				<Spin tip={"Đang tải..."} spinning={loading}>
					{props.children}
				</Spin>
			</Content>
			<Footer />
		</Layout>
	)
}
