const { User } = require('../models/index.js')

const checkPasswordChange = async (req, res, next) => {
    const {userId} = req.body

    const user = await User.findByPk(userId)
    if (user.mustChangePassword) {
        return res.status(400).json({ message: 'Вы должны сменить пароль' })
    }

    next()
}

module.exports = checkPasswordChange;