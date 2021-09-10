import React, { useEffect } from "react";
import "./index.css";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detail } from "./actions/DetailsAction";

function Sidebar() {
	const Details = useSelector((state) => state.Details);
	console.log(Details);
	const { loading, error, info } = Details;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(detail(info));
	}, [dispatch, info]);

	return (
		<div id="sidebar" className="bg-purple sm-width">
			<div className="sidebar-top"></div>
			{loading ? (
				""
			) : error ? (
				""
			) : (
				<Card
					style={{ width: "80%" }}
					className="mx-md-auto bg-purple border-0 text-white sidebar-card borde my-md-5"
				>
					<Card.Img
						variant="top"
						src="/images/woman.svg"
						className="rounded rounded-circle sidebar-img"
					/>
					<Card.Body className="text-center">
						<Card.Title>{info?.user?.name}</Card.Title>
						<Card.Text className="small user-id mt-3">
							User ID: {info?.user?.id}
						</Card.Text>
					</Card.Body>
				</Card>
			)}
		</div>
	);
}

export default Sidebar;
