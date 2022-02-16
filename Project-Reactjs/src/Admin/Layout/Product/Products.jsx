import { Button } from "antd"
import React, { useState } from "react"
import DefaultLayout from "../../Component/DefaultLayout"
import ModalAddProduct from "./components/ModalAddProduct"
import List from "./List"

const Product = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		setIsModalVisible(false)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}



	return (
		<DefaultLayout>
			<div className="flex j-between" style={{ marginBottom: 16 }}>
				<h2>Danh sách sản phẩm</h2>
				<Button variant="outlined" onClick={showModal} style={{ fontSize: 14 }}>
					Thêm sản phẩm
				</Button>
			</div>
			<ModalAddProduct isModalVisible={isModalVisible} handleCancel={handleCancel} handleOk={handleOk} />
			<List/>
		</DefaultLayout>
	)
}

export default Product
