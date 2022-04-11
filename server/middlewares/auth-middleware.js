const ApiError = require('../exeptions/api-error');

module.exports = function(req, res, next) {
    try {

    } catch(e) {
        return next(ApiError.UnauthorisedError())
    }
}