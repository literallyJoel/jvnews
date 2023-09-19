import * as elements from "typed-html";

const BaseHTML = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale:1.0">
    <title>JVNews</title>
    <script src="https://unpkg.com/htmx.org@1.9.3"></script>
    <script type="module">
        import { tw } from 'https://cdn.skypack.dev/twind'
    </script>
    <script type="module" src="https://cdn.skypack.dev/twind/shim"></script>
</head>
<body>
    ${children}
</body>
</html>
`;

export default BaseHTML;
