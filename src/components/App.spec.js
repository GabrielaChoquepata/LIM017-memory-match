import {App} from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true)
  });

  it('Debería imprimir 16 tarjetas',()=>{
    const cards = App()
    const result = cards.querySelectorAll('.containerCard')
    expect(result.length).toBe(16);
  });
});