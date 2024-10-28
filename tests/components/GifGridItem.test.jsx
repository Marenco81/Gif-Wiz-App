import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"



describe('Pruebas en GifGridItem', () => {

const title = 'Saitama';
const url = 'https://one-punch.com/saitama.jpg'  

  test('debe de hacer match con el snapshot ', () => {



    const {container} = render(<GifGridItem title={title} url={url}  />)
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el url y el alt indicado', () => {
    render(<GifGridItem title={title} url={url}  />)
    // screen.debug()
    // expect( screen.getByRole('img').src).toBe(url);
    // expect( screen.getByRole('img').alt).toBe(title);

    const {alt, src} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('debe e mostrar el titulo en el componente ', () => {
    render(<GifGridItem title={title} url={url}  />)
    expect(screen.getByText(title)).toBeTruthy();
  })
  
  
  
})
