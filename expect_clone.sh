#!/usr/bin/expect -f

# Retrieve environment variables
set repositoryUrl $env(REPOSITORY_URL)
set username $env(REPOSITORY_USERNAME)
set password $env(REPOSITORY_PASSWORD)

# Clone the repository
spawn git clone $repositoryUrl
expect "Username for 'https://github.com':"
send "$username\r"
expect "Password for '$username@github.com':"
send "$password\r"
expect eof
~            
