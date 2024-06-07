// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // Define the destination URL
// const destinationUrl = 'http://www.unibyts.com/'; // Replace with your desired URL

// // Check if the request is from a mobile device
// function isMobile(userAgent) {
//     return /Mobile|Android|Silk|Kindle|BlackBerry|Opera Mini|Opera Mobi/i.test(userAgent);
// }

// app.get('/redirect', (req, res) => {
//     const userAgent = req.headers['user-agent'];
//     if (isMobile(userAgent)) {
//         // Mobile device detected, perform the redirection
//         res.redirect(302, destinationUrl);
//     } else {
//         // Not a mobile device
//         res.send('Please open this link on a mobile device.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define the destination URL
const destinationUrl = 'http://www.unibyts.com/'; // Replace with your desired URL

// Check if the request is from a mobile device
function isMobile(userAgent) {
    return /Mobile|Android|Silk|Kindle|BlackBerry|Opera Mini|Opera Mobi/i.test(userAgent);
}

app.get('/redirect', (req, res) => {
    const userAgent = req.headers['user-agent'];
    if (isMobile(userAgent)) {
        // Serve an HTML page with a JavaScript redirection
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Redirecting...</title>
                <script type="text/javascript">
                    // This script will force the redirection to open in the default browser
                    window.onload = function() {
                        window.location.href = '${destinationUrl}';
                    };
                </script>
            </head>
            <body>
                <p>Redirecting...</p>
            </body>
            </html>
        `);
    } else {
        // Not a mobile device
        res.send('Please open this link on a mobile device.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
