import { React, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaRegUser, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useHistory } from "react-router-dom"
// import '../../media/css/style.css'
import logo from "../../media/img/logo.png"
import { searchData } from "../../Slice/ProductSearchSlice"
import HeaderCart from "./HeaderCart"
import HeaderMenuMoblie from "./HeaderMenuMoblie"

function Header(props) {
	const [showMenu, setShowMenu] = useState(false)
	const [showLogin, setShowLogin] = useState(true)
	const [scroll, setScroll] = useState(false)
	const [search, setSearch] = useState(false)
	const dispatch = useDispatch()
	const history = useHistory()
	const { register, handleSubmit } = useForm()
	let user = useSelector((state) => state.login.currentUser[0])

	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY > 300)
		}
		window.addEventListener("scroll", handleScroll)

		const checkLogin = () => {
			if (user !== undefined) {
				setShowLogin(false)
			}
		}
		checkLogin()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const handleMenu = () => {
		setShowMenu(!showMenu)
	}

	const onSubmit = (data) => {
		// console.log(data)
		let searchString = data.search
		const action = searchData(searchString)
		dispatch(action)
		history.push(`/shop`)
	}

	const handleOpenSearch = () => {
		setSearch(true)
	}

	const handleCloseSearch = (e) => {
		e.stopPropagation()
		setSearch(false)
	}

	return (
		<>
			<div className={scroll ? "header active" : "header"}>
				<div className="header-logo">
					<div className="header-logo__humberger">
						<span></span>
					</div>
					<div className="header-logo__logo">
						<Link to={"/home"}>
							<img src={logo} alt="" />
						</Link>
					</div>
				</div>

				<ul className="header-list">
					<li>
						<NavLink to={"/home"}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"/shop"}>Shop</NavLink>
					</li>
					<li>
						<NavLink to={"/products"}>Products</NavLink>
					</li>
					<li>
						<NavLink to={"/blog"}>Blog</NavLink>
					</li>
					<li>
						<NavLink to={"#"}>Pages</NavLink>
						<div className="header-dropdown">
							<ul>
								<li>
									<Link to="/contact">Contact Us</Link>
								</li>
								{showLogin ? (
									<>
										<li>
											<Link to="/login">login</Link>
										</li>
										<li>
											<Link to="/register">Register</Link>
										</li>
									</>
								) : null}

								<li>
									<Link to="/cart">Shoping Cart</Link>
								</li>
								<li>
									<Link to="/checkout">Checkout</Link>
								</li>
								<li>
									<Link to="/wishlist">Wishlist</Link>
								</li>
								<li>
									<Link to="/compare">Compare</Link>
								</li>
								<li>
									<Link to="/">Order Success</Link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<NavLink to={"/contact"}>Contact</NavLink>
					</li>
				</ul>
				<div className="mobile-wrapbtn">
					<ul className="header-options">
						<li className="btn-search" onClick={handleOpenSearch}>
							<FaSearch />
						</li>
						{search && (
							<div className="search">
								<div className="search-inner">
									<FaTimes className="search-close" onClick={handleCloseSearch} />
									<div className="search-cell">
										<form onSubmit={handleSubmit(onSubmit)}>
											<div className="search-field">
												<input placeholder="Search Entire Store..." {...register("search", { required: true })} />
											</div>
											<button type="submit" className="btn">
												<FaSearch />
											</button>
										</form>
									</div>
								</div>
							</div>
						)}
						<li className="btn-user">
							<Link style={{ color: "inherit" }} to={showLogin ? "/login" : "/profile"}>
								<FaRegUser />
							</Link>
						</li>
						<li className="btn-cart">
							<FaShoppingCart />
							<HeaderCart />
						</li>
					</ul>
					<div className={showMenu ? "menu-mobile active" : "menu-mobile"} onClick={handleMenu}>
						<span></span>
					</div>
				</div>
				{showMenu ? <HeaderMenuMoblie /> : null}
			</div>
		</>
	)
}

export default Header
