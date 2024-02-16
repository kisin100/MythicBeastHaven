// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su clase
    const twitchBtn = document.querySelector('.twitch-btn');

    // URL de autorización de Twitch
    const twitchAuthUrl = 'https://id.twitch.tv/oauth2/authorize?client_id=9mv1pwbxjq33qyftx2xlsu821bwmnd&redirect_uri=https://sites.google.com/view/mbh-prueba&response_type=code&force_verify=false&scope=openid%20user:read:email%20chat:read%20moderator:read:chatters&state=sample_string&claims=%7B%22userinfo%22:%7B%22picture%22:null,%20%22email%22:null,%20%22name%22:null,%20%22user%22:%20null,%20%22preferred_username%22:%20null%7D%7D';

    // Agrega un evento de clic al botón
    twitchBtn.addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();
        // Redirige al usuario a la URL de autorización de Twitch
        window.location.href = twitchAuthUrl;
    });
});
