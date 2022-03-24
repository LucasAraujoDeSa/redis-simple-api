const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('blog', 'root', 'pass', {
  host: 'localhost',
  dialect: 'mysql' 
});


sequelize.authenticate().then(() => {
  console.log(' ✅ database connection has been estabilished successfully !!!')
}).catch((error) => {
  console.error(' ❌ unable to connect do database', error)
})

module.exports = {
  sequelize
}
