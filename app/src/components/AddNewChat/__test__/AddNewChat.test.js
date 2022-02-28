import React, { useEffect, useState } from 'react';
import {Provider, useDispatch} from 'react-redux';
import configureStore from 'redux-mock-store';
import { initChatsTracking } from "../../../store/chats/actions";
import { set } from "firebase/database";
import { getChatsRefById, getMessagesRefByChatId } from "../../../services/firebase";
import { AddNewChatView } from "./../AddNewChatView";
import { AddNewChat } from "..";
import { render, screen, fireEvent } from "@testing-library/react";

const mockStore = configureStore([]);

describe("AddNewChat tests", () => {
	it("calls AddNewChat render", () => {
		const mockDispatch = jest.fn();
		let store;
		store = mockStore({
			edit: false,
			value: '',
		});
		render(
			<Provider store={store} useDispatch={mockDispatch}>
				<AddNewChat />
			</Provider>
		);

		const div = screen.getAllByRole("div");
		expect(div).toBeDefined();
	});
});