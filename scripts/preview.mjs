import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain", ".ico": "image/x-icon", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
createServer(async (request, response) => {
    try {
        const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
        let file = resolve(root, "." + pathname);
        if (file !== root && !file.startsWith(root + sep)) {
            response.writeHead(403).end();
            return;
        }
        if (pathname.endsWith("/")) file = resolve(file, "index.html");
        else if (!extname(file)) {
            try { await stat(file + ".html"); file += ".html"; }
            catch { file = resolve(file, "index.html"); }
        }
        let content;
        try { content = await readFile(file); }
        catch {
            file = resolve(root, "404.html");
            content = await readFile(file);
            response.statusCode = 404;
        }
        response.setHeader("Content-Type", types[extname(file)] || "application/octet-stream");
        response.end(content);
    } catch {
        response.writeHead(400).end("Unable to serve request. Run npm run build first.");
    }
}).listen(3000, "127.0.0.1", () => console.log("Static preview: http://localhost:3000"));
