import { Space, Table } from "antd"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ProductApi from "../../../Api/ProductApi"

const List = (props) => {
	const [data, setData] = useState([])
    const [check,setCheck] = useState(false)
	let user = useSelector((state) => state.login.currentUser[0])

	const columns = [
		{
			title: "Tên",
			dataIndex: "name",
			key: "name",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Ảnh",
			dataIndex: "image",
			key: "image",
		},
		{
			title: "Mô tả",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Hãng",
			key: "brand",
			dataIndex: "brand",
		},
		{
			title: "Danh mục",
			key: "category",
			dataIndex: "category",
		},
		{
			title: "Giá",
			key: "price",
			dataIndex: "price",
		},
		{
			title: "Tồn kho",
			key: "countInStock",
			dataIndex: "countInStock",
		},
		{
			title: "Chức năng",
			key: "action",
			render: (text, record) => (
				<Space size="middle">
					<a>Sừa</a>
					<a onClick={() => handleDeleteProduct(record._id)}>Xoá</a>
				</Space>
			),
		},
	]

	const handleDeleteProduct =async (id) => {
	    const res = await ProductApi.deleteProduct(id, user.token)
        if(res.status === 200) setCheck(!check)
	}

	useEffect(() => {
		const getProduct = async () => {
			let response = await ProductApi.getAll()
			setData(response.data)
		}
		getProduct()
	}, [check])

	return (
		<div>
			<Table rowKey={(record) => record._id} columns={columns} dataSource={data && data.products} />
		</div>
	)
}

export default List
