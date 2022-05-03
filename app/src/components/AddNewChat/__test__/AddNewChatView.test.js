import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddNewChatView } from '../AddNewChatView';

describe('AddNewChatView tests', () => {
  it('render without edit mode', () => {
    const edit = false; const value = ''; const setValue = jest.fn(); const
      changeState = jest.fn();

    render(<AddNewChatView edit={edit} value={value} setValue={setValue} changeState={changeState} />);

    const text = screen.getByText('Создать чат');
    expect(text).toBeDefined();
  });
  it('render with edit mode', () => {
    const edit = true; const value = 'Новый чат'; const setValue = jest.fn(); const
      changeState = jest.fn();

    render(<AddNewChatView edit={edit} value={value} setValue={setValue} changeState={changeState} />);

    const placeholder = screen.getByPlaceholderText('Введите название чата');
    expect(placeholder).toBeDefined();
    const valueScreen = screen.getByDisplayValue('Новый чат');
    expect(valueScreen).toBeDefined();
  });
  it('calls changeState when btn clicked', () => {
    const edit = false; const value = 'Новый чат'; const setValue = jest.fn(); const
      changeStateFn = jest.fn();

    render(<AddNewChatView edit={edit} value={value} setValue={setValue} changeState={changeStateFn} />);

    const btn = screen.getAllByRole('button');
    fireEvent(
      btn[1],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(changeStateFn).toHaveBeenCalledTimes(1);
  });
});
