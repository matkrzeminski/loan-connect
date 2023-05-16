FROM python:3.11

ENV PYTHONUNBUFFERED 1

ENV PYTHONPATH "${PYTHONPATH}:/backend"

WORKDIR /backend

COPY ./backend/requirements.txt /backend/

RUN pip install --no-deps --no-cache-dir -r requirements.txt

COPY ./backend /backend/

RUN chmod +x /backend/wait-for-it.sh
RUN chmod +x /backend/entrypoint.sh

CMD ["/backend/entrypoint.sh"]
