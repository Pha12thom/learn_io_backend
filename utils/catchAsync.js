// Higher-order function to catch async errors
module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => next(err));
    };
};