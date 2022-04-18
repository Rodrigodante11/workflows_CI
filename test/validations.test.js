const Constants = require('../src/utils/Constants');
const Validation =  require('../src/utils/validations');


test('Caso Valido', () => {
   const result =  Validation.create({
        nome : "carro_test",
        color : "branca",
        doorQtd: "4",
        license_plate: "45GT34A"
    });
    expect(result).toEqual(undefined);
});

test('Caso invalido doorQtd como int ', () => {
    const result =  Validation.create({
         nome : "carro_test",
         color : "branca",
         doorQtd: 4,
         license_plate: "45GT34A"
     });
     expect(result).toEqual(Constants.ErrorValidation);
 });

 test('Caso invalido enviado id ', () => {
    const result =  Validation.create({
         id: 2,
         nome : "carro_test",
         color : "branca",
         doorQtd: 4,
         license_plate: "45GT34A"
     });
     expect(result).toEqual(Constants.ErrorValidation);
 });

test('Caso invalido - retirando nome', () => {
    const result =  Validation.create({
         color : "branca",
         doorQtd: "4",
         license_plate: "45GT34A"
     });
     expect(result.name).toEqual(Constants.ErrorValidation.name);
 });

 test('Caso invalido - retirando color', () => {
    const result =  Validation.create({
         nome : "carro_test",
         doorQtd: "4",
         license_plate: "45GT34A"
     });
     expect(result.color).toEqual(Constants.ErrorValidation.color);
 });

 test('Caso invalido - retirando doorQtd', () => {
    const result =  Validation.create({
         nome : "carro_test",
         color : "branca",
         license_plate: "45GT34A"
     });
     expect(result.doorQtd).toEqual(Constants.ErrorValidation.doorQtd);
 });
 test('Caso invalido - retirando license_plate', () => {
    const result =  Validation.create({
         nome : "carro_test",
         color : "branca",
         color : "branca",
     });
     expect(result.license_plate).toEqual(Constants.ErrorValidation.license_plate);
 });


