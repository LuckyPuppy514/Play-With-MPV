const http = require("http");
const { exec } = require("child_process");

////////////////////// Variables that you can adjust ///////////////////////////
// First attempted port to listen to. If it has been in use, try the next port
// until the first available one.
const start_port = 1234;
// Automatically search when left null
const path_to_mpv = null;
/////////////////////////////////  End   ///////////////////////////////////////

let mpv_exec = path_to_mpv;
let port = start_port;

async function get_exec(path, fallback) {
  if (path != null) {
    if (path.startsWith("~")) {
      path = path.replace("~", os.homedir());
    }
    await fs.access(path, fs.constants.X_OK, (err) => {
      if (err) {
        console.error(
          `No executable at ${path} or hava no permission to access.`
        );
      } else {
        console.log(`[INFO] Using ${path}`);
        return path;
      }
    });
  } else {
    return fallback;
  }
}

function open_mpv(args) {
  console.log(`[INFO] Passed in ${args}`)
  exec(
    mpv_exec + " " + args.substring("mpv://".length),
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution error: ${error}`);
        return;
      }
      console.log(stdout);
      console.error(stderr);
    }
  );
}

async function main() {
  mpv_exec = await get_exec(path_to_mpv, "mpv");

  const server = http.createServer(function (req, res) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (body.startsWith("mpv://")) {
        open_mpv(body);
      } else {
        console.log(`[WARN] Sorry, but only 'mpv://' is supported now. Current request: ${body}`)
      }
    });

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
  });

  server.on("error", (e) => {
    if (e.code == "EADDRINUSE") {
      port++;
      if (port <= 65535) {
        server.listen(port);
      } else {
        throw new Error(
          "No available ports. Please try a smaller 'start_port' value in 'server.js'"
        );
      }
    } else {
      throw new Error(`Unhandled error: ${e.message}`);
    }
  });

  server.on("listening", () => {
    console.log(`[INFO] Listening on localhost:${port}`);
  });

  server.listen(port);
}

main();
