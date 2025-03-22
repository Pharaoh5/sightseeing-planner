# Web-приложение для планирования посещения достопримечательностей

## Описание

Это web-приложение для планирования посещения достопримечательностей, с возможностью добавления, редактирования, удаления и отслеживания статуса достопримечательностей.

## Установка

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/your-repository-url
Перейти в директорию проекта:

bash
Копировать
Редактировать
cd your-project-directory
Установить зависимости:

bash
Копировать
Редактировать
npm install
Запустить проект:

bash
Копировать
Редактировать
npm start
Структура проекта
/src — Исходный код приложения

/public — Статические файлы

/styles — Стили

API Документация
Эндпоинты
1. GET /api/sights
Возвращает список всех достопримечательностей.

2. POST /api/sights
Создает новую достопримечательность.

json
Копировать
Редактировать
{
  "id": "string";
  "name": "Название",
  "description": "Описание",
  "rating": 4,
  "location": "адрес",
  "coordinates": { "latitude": 59.3293, "longitude": 18.0686 },
  "status": "в планах"
  "addedDate": Дата;
  "googleMapsLink": "Ссылка";
}
3. GET /api/sights/{id}
Возвращает информацию о конкретной достопримечательности.

4. PUT /api/sights/{id}
Обновляет информацию о достопримечательности.

5. DELETE /api/sights/{id}
Удаляет достопримечательность.

6. GET /api/sights/stats
Возвращает статистику по достопримечательностям.

Функциональность
Просмотр достопримечательностей: Счетчик и таблица.

Режим администратора: Создание, редактирование, удаление.

Данные: ID, название, описание, дата, рейтинг, фото, местоположение, координаты, статус.

Зависимости
React

TypeScript

Gravity UI

Axios

axios.get('/api/sights')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

axios.post('/api/sights', {
  "id": "string";
  "name": "Название",
  "description": "Описание",
  "rating": 4,
  "location": "адрес",
  "coordinates": { "latitude": 59.3293, "longitude": 18.0686 },
  "status": "в планах"
  "addedDate": Дата;
  "googleMapsLink": "Ссылка";
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

axios.delete('/api/sights/1')
  .then(response => console.log('Deleted'))
  .catch(error => console.error(error));
  
Этот документ предоставляет информацию о том, как взаимодействовать с API с использованием **Axios**, включая примеры запросов и ответа.