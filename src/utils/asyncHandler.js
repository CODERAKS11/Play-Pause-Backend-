//method banayega aur export kar dega
//2 type ka asyncHandler ho sakta hai 1)promise 2)try catch
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
        //we need more to handle error, so we use ApiError.js in utils
    }
};
export {asyncHandler}







export {asyncHandler}