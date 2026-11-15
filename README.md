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
  Operating System  : Windows_NT (win32)
  Hostname          : LAPTOP-VQ6ONGTM

  [ MEMORY ]
----------------------------------------------------
  Total Memory      : 23.43 GB
  Used Memory       : 10.89 GB
  Free Memory       : 12.54 GB
  Free Memory %     : 53.53%
  Free Bar          : [################..............] 54% free

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
