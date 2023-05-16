#!/bin/bash

/backend/wait-for-it.sh -t 15 $DB_HOST:$DB_PORT

alembic upgrade head
uvicorn app.main:app --host=$HOST --port=$BACKEND_PORT
