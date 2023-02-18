# «Guitar shop»

* Студент: [Константин Суриков](https://up.htmlacademy.ru/nodejs-api/2/user/598165).

---

## 🚧 TODO:
- Фронт сильно не готов, есть только логин и регистрация
- Нет cli и оповещения по имейлу

## Памятка

### 1. Файл environments/.api.env

- `PORT` —  порт апи сервера (3330)
- `JWT_SECRET` — jwt секрет


### 2. Запуск проекта
1. Установит зависимости
    ``` bash
    npm install
    ```
2. Запустит докер
    ``` bash
    docker-compose up
    ```
3. Сохранит таблицы в БД 
    ```bash
    nx run api:db-migrate
    ```
4. Сохранит данные в БД
    ```bash
    nx run api:db-fill
    ```
5. Запустит апи-сервер
    ```bash
    nx serve api
    ```
6. Запустит веб-сервер
    ```bash
    nx serve webapp
    ```
7. Open API
    ```bash
    http://localhost:3330/spec
    ```
---

<a href="https://htmlacademy.ru/profession/fullstack"><img align="left" width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/nodejs/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[Node.js. Профессиональная разработка REST API](https://htmlacademy.ru/profession/fullstack)» от [HTML Academy](https://htmlacademy.ru).
