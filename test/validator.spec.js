import {esValida, enmascararTarjeta} from '../src/validator.js';


describe('esValida', () => {
  it('debería ser un objeto', () => {
    expect(typeof esValida).toBe('object');
  });

  describe('esValida', () => {
    it('debería ser una función', () => {
      expect(typeof esValida).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(esValida('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(esValida('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(esValida('1234567890')).toBe(false);
    });
  });

  describe('enmascararTarjeta', () => {
    it('debería ser una función', () => {
      expect(typeof enmascararTarjeta).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(enmascararTarjeta('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(enmascararTarjeta('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(enmascararTarjeta('helloworld')).toBe('######orld');
    });
  });
});
