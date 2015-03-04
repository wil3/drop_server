#!/bin/bash
#
# Run as sudo because of port 80
nodejs drop_server.js | tee server.log
