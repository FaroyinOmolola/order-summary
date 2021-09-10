import React, { useEffect } from "react";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detail } from "../actions/DetailsAction";

function Profile(props) {
	const Details = useSelector((state) => state.Details);
	console.log(Details);
	const { loading, error, info } = Details;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(detail(info));
	}, [dispatch, info]);

	return (
		<div>
			{loading ? (
				"Loading..."
			) : error ? (
				"An error occured..."
			) : (
				<Container>
					<Container>
						<div className="top-bar d-flex  px-3 mb-4 justify-content-between">
							<p className="pe-3">Phone Number: </p> <p> {info?.user?.phone}</p>
						</div>
					</Container>
					<Container>
						<div className="top-bar d-flex  px-3 mb-4  justify-content-between">
							<p className="pe-3">About: </p> <p> {info?.user?.about}</p>
						</div>
					</Container>
					<Container>
						<div className="top-bar d-flex  px-3 mb-4  justify-content-between">
							<p className="pe-3">Address: </p> <p> {info?.user?.address}</p>
						</div>
					</Container>
					<Container className="mb-4 ">
						<div className="top-bar">Likes</div>
						<div className="my-3">
							{info?.user?.likes.map((like) => (
								<li
									className="list-unstyled d-inline py-2 px-3 shadow rounded-pill border-2 m-3"
									key={like}
								>
									{like}
								</li>
							))}
						</div>
					</Container>
					<Container className="mb-4 ">
						<div className="top-bar">Dislikes</div>
						<div className="my-3">
							{info?.user?.dislikes.map((dislike) => (
								<li
									className="list-unstyled d-inline py-2 px-3 shadow rounded-pill border-2 m-3"
									key={dislike}
								>
									{dislike}
								</li>
							))}
						</div>
					</Container>
				</Container>
			)}
		</div>
	);
}

export default Profile;
