#!/bin/bash

initialize () {
    if [ $1 -a $1 = "pip" ]; then
        echo "===== Pip Install ====="
        pip install -r env/requirements.txt
    fi

    python application/manage.py syncdb --noinput
    python application/manage.py migrate
}

echo "##### Initialize Start #####"

# For Production
if [ $1 -a $1 = "production" ]; then
    source .env.production
    initialize $2
fi

# For Develop
if [ $1 -a $1 = "develop" ]; then
    source .env.develop

    echo "===== DB Setup ====="
    echo "DROP DATABASE IF EXISTS $DB_NAME;" | mysql -u$DB_USER -p$DB_PASS -h $DB_HOST
    echo "CREATE DATABASE $DB_NAME DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;" | mysql -u$DB_USER -p$DB_PASS -h $DB_HOST

    initialize $2
fi

# For Local
if [ $1 -a $1 = "local" ]; then
    source .env.local

    echo "===== DB Setup ====="
    echo "DROP DATABASE IF EXISTS $DB_NAME;" | mysql -u$DB_USER -p$DB_PASS -h $DB_HOST
    echo "CREATE DATABASE $DB_NAME DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;" | mysql -u$DB_USER -p$DB_PASS -h $DB_HOST

    initialize $2
fi

echo "##### Initialize Done #####"
