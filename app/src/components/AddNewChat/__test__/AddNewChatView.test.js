import React from 'react';
import { AddNewChatView } from "../AddNewChatView";
import { render, screen, fireEvent } from "@testing-library/react";

describe("AddNewChatView tests", () => {
	it("render without edit mode", () => {
		const edit = false, value = '', setValue = jest.fn(), changeState = jest.fn();

		render(<AddNewChatView edit={edit} value={value} setValue={setValue} changeState={changeState} />);

		const text = screen.getByText("Создать чат");
		expect(text).toBeDefined();
	});
	it("render with edit mode", () => {
		const edit = true, value = 'Новый чат', setValue = jest.fn(), changeState = jest.fn();

		render(<AddNewChatView edit={edit} value={value} setValue={setValue} changeState={changeState} />);

		const placeholder = screen.getByPlaceholderText("Введите название чата");
		expect(placeholder).toBeDefined();
		const valueScreen = screen.getByDisplayValue("Новый чат");
		expect(valueScreen).toBeDefined();
	});
	it("calls changeState when btn clicked", () => {
		const edit = false, value = 'Новый чат', setValue = jest.fn(), changeStateFn = jest.fn();

		render(<AddNewChatView edit={edit} value={value} setValue={setValue} changeState={changeStateFn} />);

		const btn = screen.getAllByRole("button");
		fireEvent(
			btn[1],
			new MouseEvent("click", {
				bubbles: true,
				cancelable: true,
			})
		);

		expect(changeStateFn).toHaveBeenCalledTimes(1);
	});
});

