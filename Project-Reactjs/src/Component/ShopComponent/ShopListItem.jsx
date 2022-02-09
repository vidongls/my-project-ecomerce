import TabPanel from "@material-ui/lab/TabPanel"
import { React, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductApi from "../../Api/ProductApi"
import { refreshList } from "../../Slice/ProductSortSlice"
import HomeItemAction from "../HomeComponent/HomeItemAction"
import Pagination from "../Pagination/Pagination"

function ShopListItem(props) {
	const [products, setProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [productPerPage] = useState(6)
	let search = useSelector((state) => state.search.data)
	const dispatch = useDispatch()
	let sortBrand = useSelector((state) => state.sort.brand)
	let sortSize = useSelector((state) => state.sort.size)
	let sortCategory = useSelector((state) => state.sort.category)
	let sortPrice = useSelector((state) => state.sort.price)
	let sortColor = useSelector((state) => state.sort.color)
	// console.log(sortColor)

	useEffect(() => {
		const getProducts = async () => {
			let newArr = []
			const productItems = await ProductApi.getAll()
			let data = productItems.data
			// setProducts(data)
			newArr = [...data]

			// console.log(as)

			// console.log(sortColor)
			//Filter brand
			let list = data.filter(
				(item) =>
					(!sortBrand.length || sortBrand.includes(item.brand)) &&
					(!sortSize.length || sortSize.includes(item.size)) &&
					(!sortCategory.length || sortCategory.some((ai) => item.category.indexOf(ai) >= 0)) &&
					(!sortColor.length || sortColor.some((val) => item.colors && item.colors.includes(val))) &&
					(!sortPrice.minPrice || sortPrice.minPrice <= +item.mainPrice) &&
					(!sortPrice.maxPrice || sortPrice.maxPrice >= +item.mainPrice)
			)

			// console.log(list)

			newArr = [...list]

			//Search item
			if (search.length !== 0) {
				let SearchItems = data.filter((item) => {
					return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
				})
				newArr = [...SearchItems]
			}
			setProducts(newArr)
			// console.log(newArr)
		}
		getProducts()
	}, [search, sortBrand, sortSize, sortCategory, sortPrice, sortColor])

	//Refresh list
	useEffect(() => {
		const refresh = () => {
			const action = refreshList()
			dispatch(action)
		}
		refresh()

		// return () => {
		//   refresh()
		// }
	}, [dispatch])

	const indexOfLastProducts = currentPage * productPerPage
	const indexOfFirstProducts = indexOfLastProducts - productPerPage

	let currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts)
	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<>
			<div className="shop-list">
				<TabPanel
					value="0"
					style={{
						padding: "0px",
					}}
				>
					<div className="product-list">
						{currentProducts &&
							currentProducts.map((item, index) => {
								return (
									<div
										className="product-item"
										key={index}
										style={{
											padding: "0px",
										}}
									>
										<div className="product-img">
											<Link to={`/details/${item.id}`}>
												<img
													alt=""
													style={{
														minHeight: "unset",
													}}
													src={item.img1}
													className="product-img__first"
												></img>
												<img
													alt=""
													style={{
														minHeight: "unset",
													}}
													src={item.img2}
													className="product-img__secondary"
												></img>
											</Link>

											<HomeItemAction id={item.id} />
											<div className="product-tag">
												<span className={item.new === true ? "new" : null}>{item.new === true ? "new" : null}</span>
												<span className={item.new === true ? "sale" : null}>{item.new === true ? "new" : null}</span>
											</div>
										</div>
										<div className="product-content">
											<div className="product-category">
												<Link to={`/details/${item.id}`}>Decor, {item.brand} </Link>
											</div>
											<h4>
												<Link to={`/details/${item.id}`}>{item.name}</Link>
											</h4>
											<div className="product-meta">
												<span>${item.mainPrice}.00 USD</span>
												<span className="old-price">{item.price !== undefined ? "$" + item.price + ".00 USD" : null}</span>
											</div>
										</div>
									</div>
								)
							})}
					</div>
				</TabPanel>
				<TabPanel
					className="shop-list-fulldetail"
					value="1"
					style={{
						padding: "0px",
					}}
				>
					<div className="product-list">
						{currentProducts &&
							currentProducts.map((item, index) => {
								return (
									<div
										className="product-item"
										key={index}
										style={{
											padding: "0px",
										}}
									>
										<Link to={`/details/${item.id}`} className="product-img">
											<img alt="" src={item.img1} className="product-img__first"></img>
											<img alt="" src={item.img2} className="product-img__secondary"></img>
											<div className="product-tag">
												<span className={item.new === true ? "new" : null}>{item.new === true ? "new" : null}</span>
												<span className={item.new === true ? "sale" : null}>{item.new === true ? "new" : null}</span>
											</div>
										</Link>
										<div className="product-content">
											<div className="product-category">
												<Link to={`/details/${item.id}`}>Decor, {item.brand} </Link>
											</div>
											<h4>
												<Link to={`/details/${item.id}`}>{item.name}</Link>
											</h4>
											<div className="product-meta">
												<span>${item.mainPrice}.00 USD</span>
												<span className="old-price">{item.price !== undefined ? "$" + item.price + ".00 USD" : null}</span>
											</div>
											<p>
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
												rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
												explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
												consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
											</p>
											<HomeItemAction id={item.id} />
										</div>
									</div>
								)
							})}
					</div>
				</TabPanel>
				<Pagination productPerPage={productPerPage} totalProduct={products.length} paginate={paginate} />
			</div>
		</>
	)
}

export default ShopListItem
