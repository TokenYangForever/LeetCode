# Read from the file words.txt and output the word frequency list to stdout.
tr -s "\t| " "\n" <words.txt|sort |uniq -c | sort -k1 -r|awk '{print $2,$1}' 
