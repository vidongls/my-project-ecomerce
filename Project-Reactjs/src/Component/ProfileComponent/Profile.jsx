import React from "react"
import Avatar from "@mui/material/Avatar"
import { useSelector } from "react-redux"
import { FaRegUser, FaRegEnvelope } from "react-icons/fa"
import { Button } from "@mui/material"
import { useHistory } from "react-router-dom"
import { useSnackbar } from "notistack"

function Profile(props) {
	const user = useSelector((state) => state.login.currentUser[0])

	const history = useHistory()

	const { enqueueSnackbar } = useSnackbar()

	const handleLogout = () => {
		localStorage.removeItem("user")
		enqueueSnackbar("Đăng xuất thành công", {
			anchorOrigin: {
				vertical: "top",
				horizontal: "left",
			},
			autoHideDuration: 3000,
			variant: "success",
		})
		history.push("/home")
	}

	return (
		<div className="profile">
			<div className="container">
				<div className="profile-wrapper">
					<div className="profile-header">
						<h3>
							<Avatar
								src="/broken-image.jpg"
								sx={{
									width: "100px",
									height: "100px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							/>
						</h3>
					</div>
					<div className="profile-content">
						<div className="profile-text">
							<FaRegUser />
							<span>Email: </span>
							{user.email}
						</div>
						<div className="profile-text">
							<FaRegEnvelope />
							<span>Username: </span>
							{user.userName}
						</div>
						<div className="flex j-center">
							<Button onClick={handleLogout}>Logout!</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
