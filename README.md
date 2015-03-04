# drop_server
Simple Node.js server to drop data

Install and Run
---------------
1. sudo apt-get update
2. sudo apt-get install nodejs
3. chmod a+x start.sh
4. sudo ./start.sh

API
---

##### Test fo network connectivity, report IP address
* GET /api/ping
##### Drop text information	
* POST /api/scan
##### Drop files
* POST /api/drop

Warning!
-------
This server is incredible insecure and can allow others to drop malicious content on your server. Use only temporary under supervision for testing.


License
-------

    Copyright (C) 2015 William Koch

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
