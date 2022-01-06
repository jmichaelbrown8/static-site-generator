module.exports = {generateHTML};

function generateHTML({ name, location, github, linkedIn }) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>${name}'s Portfolio</title>
        </head>
        <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${name}</h1>
            <p class="lead">I am from ${location}.</p>
            <h3><span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${github}</li>
            <li class="list-group-item">LinkedIn: ${linkedIn}</li>
            </ul>
        </div>
        </div>
        </body>
        </html>
    `;
}