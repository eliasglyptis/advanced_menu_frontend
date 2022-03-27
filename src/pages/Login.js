import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { React, useState } from "react";
import { signIn } from "../apis";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const onClick = () => {
		signIn(username, password);
	};

	return (
		<MainLayout>
			<Row className="justify-content-center">
				<Col lg={6} md={8}>
					<Card>
						<Card.Body>
							<h3 className="text-center">
								<b>Login</b>
							</h3>
							<Form.Group>
								<Form.Label>User Name</Form.Label>
								<Form.Control 
									type="text" placeholder="Enter Username" value={username} 
									onChange={(e) => setUsername(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Enter Password</Form.Label>
								<Form.Control
									type="password" placeholder="Enter Password" value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>

							<Button variant="standard" block onClick={onClick}>
								Sign In
							</Button>

							
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</MainLayout>
	);
};

export default Login;
