# System Health \& Path Logger

A Node.js command-line script for a local IT service desk. It prints:

* Total memory
* Free memory and free memory percentage
* File name, folder and file extension of a log path

Built with only the built-in `os` and `path` modules (no installs needed).

## Run

```bash
# Default path: /var/logs/system/diagnostics.log
node system-health-logger.js

# Any other file
node system-health-logger.js /home/user/notes.txt
node system-health-logger.js "My Documents/report.final.pdf"

# Or with npm
npm start
```

## Sample Output

```

====================================================

&#x20;       SYSTEM HEALTH \& PATH LOGGER

====================================================



&#x20; \[ SYSTEM INFO ]

\----------------------------------------------------

&#x20; Operating System  : Windows\_NT (win32)

&#x20; Hostname          : LAPTOP-VQ6ONGTM



&#x20; \[ MEMORY ]

\----------------------------------------------------

&#x20; Total Memory      : 23.43 GB

&#x20; Used Memory       : 10.91 GB

&#x20; Free Memory       : 12.52 GB

&#x20; Free Memory %     : 53.43%

&#x20; Free Bar          : \[################..............] 53% free



&#x20; \[ LOG FILE PATH ]

\----------------------------------------------------

&#x20; Full Path         : /var/logs/system/diagnostics.log

&#x20; Folder            : /var/logs/system

&#x20; File Name         : diagnostics.log

&#x20; File Extension    : .log



====================================================
```

## Requirements

Node.js 14 or later.

