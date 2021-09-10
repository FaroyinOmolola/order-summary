import React, { useEffect } from "react";
import "../index.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detail } from "../actions/DetailsAction";

function Order(props) {
	const Details = useSelector((state) => state.Details);
	console.log(Details);
	const { loading, error, info } = Details;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(detail(info));
	}, [dispatch, info]);

	const total = () => {
		let _total = 0;
		info?.items.map((item) => {
			return (_total +=
				item.price * item.quantity +
				(item.tax_pct / 100) * item.price * item.quantity);
		});
		return _total;
	};
	return (
		<div>
			{loading ? (
				"Loading..."
			) : error ? (
				"An error occured..."
			) : (
				<div>
					<Container>
						<div className="top-bar">Ordered from</div>
						<Card
							style={{ width: "100%" }}
							className="bg-light border-0"
						>
							<Row>
								<Col sm={2}>
									<Card.Img
										variant="top"
										className="restaurant-img"
										src="/images/restaurant-logo.png"
									/>
								</Col>
								<Col sm={10}>
									<Card.Body>
										<Card.Title>
											{info?.restaurant?.name}
										</Card.Title>
										<Card.Text className="small">
											<span>
												{info?.restaurant?.street}
											</span>
											<br />
											<span>
												{info?.restaurant?.city} -{" "}
												{info?.restaurant?.state}
											</span>
											<br />
											<span>
												({info?.restaurant?.zipcode})
											</span>
										</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Container>
					<Container>
						<div className="top-bar">Order</div>
						<Row className="p-3">
							{info?.items.map((item) => (
								<Col key={item.name} className="mx-auto my-2">
									<Card
										style={{ minWidth: "220px" }}
										className=""
									>
										<Card.Header className="pb-0 ">
											<h5>{item.name}</h5>
											<p className="small">
												{item.category}
											</p>
										</Card.Header>
										<Card.Body>
											<Card.Text>
												Quantity: {item.quantity}
											</Card.Text>
											<Card.Text>
												Price: {item.currency}{" "}
												{" " +
													item.price * item.quantity}
											</Card.Text>
											<Card.Text>
												Tax: {item.tax_pct}%
											</Card.Text>
										</Card.Body>
										<Card.Footer>
											Total: {item.currency}{" "}
											{item.price * item.quantity +
												(item.tax_pct / 100) *
													item.price *
													item.quantity}
										</Card.Footer>
									</Card>
								</Col>
							))}
						</Row>
					</Container>
					<Container>
						<div className="top-bar d-flex  px-3 justify-content-between">
							<p>Total bill</p> <p> INR {total()}</p>
						</div>
					</Container>
				</div>
			)}
		</div>
	);
}

export default Order;
