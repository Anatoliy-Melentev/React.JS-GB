import { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import { logIn, signUp } from "../../services/firebase";

export const AuthForm = ({ isSignUp }) => {
	const
		[pass, setPass] = useState(''),
		[email, setEmail] = useState(''),
		[error, setError] = useState('');

	const
		handleSubmit = async (e) => {
			e.preventDefault();
			if (!pass || !email) return;

			if (isSignUp) {
				await handleSignUp();
			} else {
				await handleSignIn();
			}

			setEmail('');
			setPass('');
		};

	const handleSignUp = async () => {
		try {
			await signUp(email, pass);
		} catch (e) {
			setError(e.message)
		}
	};

	const handleSignIn = async () => {
		try {
			await logIn(email, pass);
		} catch (e) {
			setError(e.message)
		}
	};

	return (
		<>
			<form className="form-msg container" onSubmit={handleSubmit}>
				<TextField size="small" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
				<br />
				<TextField size="small" placeholder="Name" value={pass} onChange={e => setPass(e.target.value)} />
				<IconButton sx={{ width: 50, height: 50 }} aria-label="upload picture" type="submit">
					<Send />
				</IconButton>
				{error && <span>{error}</span>}
			</form>
		</>
	);
};