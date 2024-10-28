import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en componente AddCategory', () => {

  test('debe de cambiar el valor en la caja de texto', () => {

    render(<AddCategory onNewCategory={ () => {} } />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: {value: 'saitama'}});

    expect(input.value).toBe('saitama');

    // screen.debug();
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    // screen.debug();
    expect(input.value).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    
  });

  test('no debe llamar el onNewCategory si el input está vacio', () => {
    const inputValue = '';

    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    expect(onNewCategory.length).toBeLessThan(1);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  })
  
  
  
})
