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

	deleteProduct(id, user) {
		const urlParam = `products/${id}`
        
        const config = {
			headers: {
				Authorization: `Bearer ${user}`,
			},
		}

		return requestClient.delete(urlParam,config)
	},

	update(id, data) {
		const urlParam = `products/${id}`
		return requestClient.put(urlParam, data)
	},

	add(data, user) {
		const urlParam = `products`
		// const user = localStorage.getItem("user")

		const config = {
			headers: {
				Authorization: `Bearer ${user}`,
			},
		}

		return requestClient.post(urlParam, data, config)
	},
    upload(data) {
		const urlParam = `upload`

		return requestClient.post(urlParam, data)
	},
}

export default ProductApi
