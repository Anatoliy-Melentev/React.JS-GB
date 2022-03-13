import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AddNewChat } from "..";
import { render, screen, fireEvent } from "@testing-library/react";
import thunk from "redux-thunk";
import { mockFirebase } from 'firestore-jest-mock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("AddNewChat tests", () => {
	it("calls AddNewChat render", () => {
		const store = mockStore({ edit: false });
		render(
			<Provider store={store}>
				<AddNewChat />
			</Provider>
		);

		const btn = screen.getAllByRole("button");
		expect(btn[0]).toBeDefined();
	});
	it("calls setValue when btn clicked", () => {
		const edit = false;
		const store = mockStore({
			edit: edit,
			value: 'Новый чат',
			//changeState: changeState,
		});
		const result = render(
			<Provider store={store}>
				<AddNewChat />
			</Provider>
		);

		const btn = screen.getAllByRole("button");
		fireEvent(
			btn[1],
			new MouseEvent("click", {
				bubbles: true,
				cancelable: true,
			})
		);

		const input = screen.getByPlaceholderText("Введите название чата");
		fireEvent.change(input, {target: {value: 'aaa'}})
		expect(input.value).toBe('aaa');

		const btn2 = result.container.querySelector('.svgBtn');
		/*
			Так и не понял как по другому найти элемент
			Зачем то используются какой то не логичный поиск
			по getByPlaceholderText и совершенно непонятно что значащий getByRole
			Почему нельзя ввести что то более разумное типа getByTag и getByClass
		*/
		fireEvent(
			btn2,
			new MouseEvent("click", {
				bubbles: true,
				cancelable: true,
			})
		);
		const text = screen.getByText("Создать чат");
		expect(text).toBeDefined();
	});
});