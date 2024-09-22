import app from './app';
import sequelize from './database';

const PORT = process.env.PORT || 5000;

sequelize.authenticate().then(()=> {
    console.log('Conexion a la base de datos exitosa');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}).catch((error)=> {
    console.error('Error al conectar a la base de datos', error);
}); 

// ... (código anterior)

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });

export default sequelize;
