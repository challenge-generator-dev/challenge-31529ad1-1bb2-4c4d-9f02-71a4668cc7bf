import dotenv from 'dotenv';
import app from './app';

// Cargar variables de entorno desde .env
dotenv.config();

const PORT = process.env.PORT || 3000;

// Función para iniciar el servidor
const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

// Iniciar el servidor
startServer();

// Exportar la aplicación para testing
export default app;