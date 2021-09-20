<h1>Projeto back-end CRUD para cadastro de pessoas</h1>

<h3>Técnologias usadas</h3>
<ul>
  <li>Sequelize ORM</li>
  <li>Express</li>
  <li>Nodemon</li>
  <li>Mysql</li>
</ul>


<h3>Passo a passo</h3>

<p>Abra o arquivo /src/config/database.js no editor e editor e atualize os dados de acordo com o localhost do seu banco</p>
module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'db_pessoas',
    define: {
      timestamps: true,
    },
  };

<p>Abra o console após fazer o clone e execute os seguintes comandos:</p>
<p>npm install</p>
<p>npx sequelize-cli db:create</p>
<p>npx sequelize db:migrate</p>
<p>npm run dev</p>
