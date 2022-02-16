import { Button, Modal, Input, Form, Select, notification } from "antd"
import React, { useState } from "react"
import { Upload } from "antd"
import ProductApi from "../../../../Api/ProductApi"
import { useSelector } from "react-redux"
import {
    CheckOutlined,
    CloseOutlined,
    LoadingOutlined,
    PlusOutlined,
} from '@ant-design/icons'

const { Option } = Select
const ModalAddProduct = ({ isModalVisible, handleOk, handleCancel }) => {
	const [form] = Form.useForm()
	const [imageUrl, setImageUrl] = useState()
	const [isLoadingUpload, setIsLoadingUpload] = useState(false)

	let user = useSelector((state) => state.login.currentUser[0])

	function beforeUpload(file) {
		setIsLoadingUpload(true)

		ProductApi.upload(file)
			.then((response) => {
				const image = response.data
				setImageUrl(image)
				form.setFieldsValue({ image })
			})
			.catch((error) => {
				notification.error({
					message: error.message,
				})
			})
			.finally(() => {
				setIsLoadingUpload(false)
			})

		return false
	}
	const uploadButton = (
		<div>
			{isLoadingUpload ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	)
	const onFinish = async () => {
		const response = await form.validateFields()
		console.log(response)
		ProductApi.add(response, user.token)
	}

	return (
		<Modal
			title="Thêm sản phẩm"
			visible={isModalVisible}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={[
				<Button key="back" onClick={handleCancel}>
					Huỷ
				</Button>,
				<Button key="submit" type="primary" onClick={onFinish}>
					Thêm
				</Button>,
			]}
		>
			<Form
				name="basic"
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 18 }}
				initialValues={{ remember: true }}
				form={form}
				autoComplete="off"
			>
				<Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true, message: "Type..." }]}>
					<Input />
				</Form.Item>

				<Form.Item label="Anh" rules={[{ required: true, message: "Type..." }]}>
					<Upload
						name="avatar"
						listType="picture-card"
						className="avatar-uploader"
						showUploadList={false}
						beforeUpload={beforeUpload}
					>
						{imageUrl ? <img src={imageUrl} alt="avatar" className="pd-8 width-100pc" style={{ width: "100%" }} /> : uploadButton}
					</Upload>
					<Input />
				</Form.Item>
				<Form.Item label="Mô tả" name="description" rules={[{ required: true, message: "Type..." }]}>
					<Input />
				</Form.Item>
				<Form.Item label="Hãng" name="brand" rules={[{ required: true, message: "Type..." }]}>
					<Select placeholder="Chọn hãng sản xuất">
						<Option value="yamaha">Yamaha</Option>
						<Option value="honda">Honda</Option>
						<Option value="suzuki">Suzuki</Option>
						<Option value="sym">SYM</Option>
						<Option value="kawasaki">Kawasaki</Option>
						<Option value="other">Khác</Option>
					</Select>
				</Form.Item>
				<Form.Item label="Danh mục" name="category" rules={[{ required: true, message: "Type..." }]}>
					<Select placeholder="Chọn danh mục">
						<Option value="so">Xe số</Option>
						<Option value="ga">Xe tay ga</Option>
						<Option value="contay">Xe côn tay</Option>
					</Select>
				</Form.Item>
				<Form.Item label="Giá" name="price" rules={[{ required: true, message: "Type..." }]}>
					<Input />
				</Form.Item>
				<Form.Item label="Số lượng" name="countInStock" rules={[{ required: true, message: "Type..." }]}>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default ModalAddProduct
