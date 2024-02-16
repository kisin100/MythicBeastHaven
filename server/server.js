const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta de autorización de Twitch
app.get('/auth/twitch/callback', async (req, res) => {
    try {
        const { code } = req.query;

        // Intercambio de código de autorización por token de acceso
        const response = await axios.post('https://id.twitch.tv/oauth2/token', {
            client_id: '9mv1pwbxjq33qyftx2xlsu821bwmnd',
            code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://sites.google.com/view/mbh-prueba/exec'
        });

        const { access_token } = response.data;

        // Obtener datos del usuario desde Twitch
        const userResponse = await axios.get('https://api.twitch.tv/helix/users', {
            headers: {
                'Client-ID': '9mv1pwbxjq33qyftx2xlsu821bwmnd',
                'Authorization': `Bearer ${access_token}`
            }
        });

        const userData = userResponse.data.data[0];

        // Aquí puedes utilizar los datos del usuario para crear un perfil en tu sistema
        console.log('Datos del usuario:', userData);

        res.send('Perfil creado exitosamente.');
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).send('Error al crear el perfil.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
