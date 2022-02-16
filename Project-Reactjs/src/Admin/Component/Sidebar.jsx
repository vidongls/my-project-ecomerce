import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons"
import { Layout, Menu } from "antd"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const { Sider} = Layout
const { SubMenu } = Menu

const Sidebar = () => {
	const [collapsed, setCollappsed] = useState(false)

	const handleToggle = () => {
		setCollappsed(!collapsed)
	}

	return (
		<>
			<Sider collapsible collapsed={collapsed} onCollapse={handleToggle}>
				<div className="logo" />
				<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
					<Menu.Item key="1" icon={<PieChartOutlined />}>
						<Link to={"/admin"}>Trang điều khiển</Link>
					</Menu.Item>
					<Menu.Item key="2" icon={<DesktopOutlined />}>
						<Link to={"/admin/products"}>Sản phẩm</Link>
					</Menu.Item>
					<SubMenu key="sub1" icon={<UserOutlined />} title="User">
						<Menu.Item key="3">Tom</Menu.Item>
						<Menu.Item key="4">Bill</Menu.Item>
						<Menu.Item key="5">Alex</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
						<Menu.Item key="6">Team 1</Menu.Item>
						<Menu.Item key="8">Team 2</Menu.Item>
					</SubMenu>
					<Menu.Item key="9" icon={<FileOutlined />}>
						Files
					</Menu.Item>
				</Menu>
			</Sider>
		</>
	)
}

export default Sidebar
