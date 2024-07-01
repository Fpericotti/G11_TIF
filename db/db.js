const mysql = require('mysql2');

// Se crea la conexión con los datos del servidor de la base de datos.
const conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '' 
});

conn.connect((err) => {
    // Conexión con el servidor de la base de datos.
    if (err) {
        console.error('Error al conectar con la base de datos. ',err);
        return;
    }
    console.log('Conexión con la base de datos exitosa.');

    // Se crea la base de datos en caso de que no exista.
    conn.query("CREATE DATABASE IF NOT EXISTS G11_TIF", (err, results) => {
        if (err) {
            console.error('Error al crear la base de datos. ',err);
            return;
        }
        console.log('Base de datos creada con éxito.');

        // Se selecciona la base de datos para su uso.
        conn.changeUser({ database: 'G11_TIF' }, (err) => {
            if (err) {
                console.error('Error al cambiar a G11_TIF. ',err);
                return;
            }
            console.log('Base de datos seleccionada correctamente.');
            const createProductoQuery = `
                CREATE TABLE IF NOT EXISTS producto (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    descripcion VARCHAR(255) NOT NULL,
                    precio DECIMAL(10,2) NOT NULL
                );
            `;
            
            conn.query(createProductoQuery,(err,results) => {
                if (err) {
                    console.error('Error al crear tabla Producto. ',err);
                    return;
                }
            });
            console.log('Producto creada correctamente.')


            const createClienteQuery = `
                CREATE TABLE IF NOT EXISTS cliente (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    telefono INT NOT NULL
                )
            `;

            conn.query(createClienteQuery, (err,results) => {
                if (err) {
                    console.error('Error al crear tabla Cliente. ',err);
                    return;
                }
            });
            console.log('Cliente creada correctamente.')


            const createVentaQuery = `
                CREATE TABLE IF NOT EXISTS venta (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    id_cliente INT NOT NULL,
                    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
                    medio_pago VARCHAR(40) NOT NULL,
                    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
                )
            `;

            conn.query(createVentaQuery, (err,results) => {
                if (err) {
                    console.error('Error al crear tabla Venta. ',err);
                    return;
                }
            });
            console.log('Venta creada correctamente.')


            const createDetalleVentaQuery = `
                CREATE TABLE IF NOT EXISTS detalle_venta (
                    id_venta INT,
                    id_producto INT,
                    cantidad INT NOT NULL,
                    observaciones VARCHAR(255),
                    PRIMARY KEY (id_venta, id_producto),
                    FOREIGN KEY (id_venta) REFERENCES venta(id),
                    FOREIGN KEY (id_producto) REFERENCES producto(id)
                )
            `;

            conn.query(createDetalleVentaQuery, (err,results) => {
                if (err) {
                    console.error('Error al crear tabla Detalle_Venta. ',err);
                    return;
                }
            });
            console.log('Detalle_Venta creada correctamente.')

        })
    });
});

module.exports = conn;