module.exports = {
    checkAdminLoggedIn: (req, res, next) => {
        if (req.user && req.user.type === "admin")
            return next();
        res.status(401).send({ err: "You must be an admin to do that!" });
    },

    checkMemberLoggedIn: (req, res, next) => {
        if (req.user && req.user.type === "user")
            return next();
        res.status(401).send({ err: "You must be a Gym Member to do that!" });
    },
};