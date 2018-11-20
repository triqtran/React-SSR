module.exports = (helmet, styles = [], content) => { return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${helmet.meta.toString()}
    ${helmet.title.toString()}
    ${helmet.link.toString()}
    <style>${[...styles].join('')}</style>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="client.bundle.js"></script>
  </body>
</html>`
}
