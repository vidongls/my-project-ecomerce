import axios from "axios"
import requestClient from "./requestClient"

const ProductApi = {
	getAll() {
		const urlParam = "products"
		return requestClient.get(urlParam)
	},

	getOne(id) {
		const urlParam = `products/${id}`
		return requestClient.get(urlParam)
	},

	deleteProduct(id) {
		const urlParam = `products/${id}`
		return requestClient.delete(urlParam)
	},

	update(id, data) {
		const urlParam = `products/${id}`
		return requestClient.put(urlParam, data)
	},

	add(data) {
		const urlParam = `products`
		const user = localStorage.getItem("user")

		const config = {
			headers: {
				Authorization: `Bearer ${user[0].token}`,
			},
		}

		return requestClient.post(urlParam, data, config)
	},
}

export default ProductApi
