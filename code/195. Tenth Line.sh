# Read from the file file.txt and output the tenth line to stdout.
#!/bin/bash
tail -n+10 file.txt|head -1
