const checkRole = (role) => {
    return (req, res, next) => {
        const { userRole } = req.body

        if (userRole !== role) {
            return res.status(403).json({ message: 'Нет доступа'})
        }

        next()
    }
}

module.exports = checkRole