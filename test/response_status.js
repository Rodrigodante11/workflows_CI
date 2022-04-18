//  const Utils =  require('../src/utils/utils')
//  const Constants = require('../src/utils/Constants')
 
//  test('Status Code Ok Case undefineid', () => {
//     const result =  Utils.responseStatus(undefined)
//      expect(result).toEqual(200);
//  });

//  test('Status Code BAD Request Case Error Validation', () => {
//     const result =  Utils.responseStatus(Constants.ErrorValidation.name)
//      expect(result).toEqual(400);
//  });

//  test('Status Code Error Duplicate Error Validation', () => {
//     const result =  Utils.responseStatus(Constants.ErrorDuplicate.name)
//      expect(result).toEqual(409);
//  });

//  test('Status Code Error Not found Error Validation', () => {
//     const result =  Utils.responseStatus(Constants.ErrorNotFound.name)
//      expect(result).toEqual(404);
//  });
//  test('Status Code Error Imternal server error Error Validation', () => {
//     const result =  Utils.responseStatus("")
//      expect(result).toEqual(500);
//  });
