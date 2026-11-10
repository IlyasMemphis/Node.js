# Node.js coursework (historical)

This repository contains separate Node.js homework exercises under `hw-*`. It is **not** an active production system or a personal AI configuration source. Use the private [IlyasMemphis/rep](https://github.com/IlyasMemphis/rep) for active agent instructions.

Each exercise that needs dependencies keeps its own `package.json` and `package-lock.json`. After cloning, enter the relevant homework folder and run `npm ci` to restore dependencies. Node.js dependencies are no longer committed to the source tree. For coursework using a local database, copy `.env.example` to `.env` and adapt the local values; do not commit credentials.

The large historical dependency tree is still in prior Git commits. This ordinary cleanup does **not** rewrite Git history or remove any commit. Avoid checking out old versions during active development, and never paste private `.env` contents into GitHub.
