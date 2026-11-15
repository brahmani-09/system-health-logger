# System Health & Path Logger

A Node.js command-line script for a local IT service desk. It prints:

- Total memory
- Free memory and free memory percentage
- File name, folder and file extension of a log path

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
        SYSTEM HEALTH & PATH LOGGER
====================================================

  [ SYSTEM INFO ]
----------------------------------------------------
  Operating System  : Linux (linux)
  Hostname          : vm

  [ MEMORY ]
----------------------------------------------------
  Total Memory      : 3.90 GB
  Used Memory       : 0.20 GB
  Free Memory       : 3.70 GB
  Free Memory %     : 94.79%
  Free Bar          : [############################..] 95% free

  [ LOG FILE PATH ]
----------------------------------------------------
  Full Path         : /var/logs/system/diagnostics.log
  Folder            : /var/logs/system
  File Name         : diagnostics.log
  File Extension    : .log

====================================================
```

## Requirements

Node.js 14 or later.
