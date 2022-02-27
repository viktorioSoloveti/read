<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<h4>Описание</h4>
<p>Иммитация Back-end предназначенная для получения навыков работы с HTTP-запросами. Позволяет получать, добавлять и изменять данные. Базируется на технологии Nest</p>

<h4>Запуск</h4>

Для запуска необходимо выполнить команды:

> `npm instal`

> `npm run start`

<p>Back-end доступен по URL: </p>

> `/api/cities`

<h4>Доступные запросы</h4>

Получить список городов: `get(/api/cities)`

Получить город по ID: `get(/api/cities/id)`

Добавить город в список: `post(/api/cities, data)`

Обновить город в списке `patch(/api/cities/id, data)`

Удалить город из списка `delete(/api/cities/id)`

