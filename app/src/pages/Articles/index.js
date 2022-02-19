import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { getQuiz } from "../../store/quiz/actions";

import {
	selectArticles,
	selectArticlesLoading,
	selectError,
} from "../../store/articles/selectors";
import {
	selectQuizQuestion,
	//selectArticlesLoading,
	//selectError,
} from "../../store/quiz/selectors";

export const Articles = () => {
	const dispatch = useDispatch();
	const error = useSelector(selectError);
	const isLoading = useSelector(selectArticlesLoading);
	const articles = useSelector(selectArticles);
	const quizQuestion = useSelector(selectQuizQuestion);

	const getData = async () => {
		dispatch(getArticles());
	};

	const getDataV = async () => {
		dispatch(getQuiz());
	};

	useEffect(() => {
		getData();
		getDataV();
	}, []);

	return (
		<>
			<h3>Articles</h3>
			<button onClick={getData}>Refresh</button>
			<button onClick={getDataV}>Refresh</button>
			{error && <h5>Error: {error.message}</h5>}
			{isLoading ? (
				<CircularProgress />
			) : (
				<ul>
					{articles.map((art) => (
						<li key={art.id}>{art.title}</li>
					))}
				</ul>
			)}
		</>
	);
};