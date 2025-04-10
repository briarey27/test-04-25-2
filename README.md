# 🚀 React 19 + TypeScript + Vite + RTK Query

## 📦 Описание проекта

Тестовое задание

---

## 🛠️ Используемые технологии и библиотеки

| Библиотека/Технология         | Назначение |
|:------------------------------|:-----------|
| **React 19**                  | Построение пользовательского интерфейса |
| **TypeScript**                | Статическая типизация |
| **Vite**                      | Быстрая сборка и разработка |
| **Redux Toolkit + RTK Query** | Глобальное состояние и API-запросы |
| **React Router v7**           | Маршрутизация |
| **Scss**                      | Стилизация через SCSS |
| **ESLint + Prettier**         | Проверка и автоформатирование кода |
| **vite-plugin-svgr**          | Импорт SVG как React-компоненты |

> Все библиотеки выбраны для повышения производительности, улучшения DX (developer experience) и обеспечения масштабируемости проекта.

---

## 🚀 Как запустить проект

1. **Клонировать репозиторий:**
   ```bash
   git clone https://github.com/briarey27/test-04-25-2.git
   cd test-04-25-2
   ```

2. **Установить зависимости:**
   ```bash
   npm install
   # или
   yarn install
   ```

3. **Запустить проект в режиме разработки:**
   ```bash
   npm run dev
   ```

4. **Собрать проект для продакшена:**
   ```bash
   npm run build
   ```

5. **Предпросмотр production-сборки:**
   ```bash
   npm run preview
   ```

6. **Проверка кода линтером:**
   ```bash
   npm run lint
   ```

---

## ⚙️ Основные скрипты

| Команда | Описание |
|:--------|:---------|
| `npm run dev` | Запустить локальный dev-сервер |
| `npm run build` | Сборка проекта в production |
| `npm run preview` | Локальный просмотр production-сборки |
| `npm run lint` | Проверка кода с помощью ESLint |

---

## 💡 Оптимизации проекта

- **RTK Query**: автоматическое кеширование и обновление данных без ручного управления состоянием загрузки.
- **Vite**: быстрая сборка проекта с HMR (горячая перезагрузка модулей).
- **TypeScript**: строгая типизация пропсов, стейта и API-запросов.
- **Debounce логика**: оптимизация частых событий ввода пользователя.
- **React.memo**: предотвращение лишних ререндеров.
- **vite-plugin-svgr**: эффективная работа с SVG-иконками как React-компонентами.
- **Scss**: использование вложенных стилей и переменных.
- **ESLint + Prettier**: автоматическая проверка качества и форматирование кода.

---

## 🗂️ Структура проекта

```bash
```bash
src/
│
├── app/                # Инициализация приложения (провайдеры, глобальные стили)
│   ├── providers/      # Провайдеры (стор, роутинг и т.д.)
│   ├── styles/         # Глобальные стили
│   └── App.tsx         # Корневой компонент приложения
│
├── entities/           # Базовые бизнес-сущности (пользователи)
│   └── user/
│
├── pages/              # Страницы приложения
│   ├── MainPage/
│   ├── NotFoundPage/
│   └── UserPage/
│
├── shared/             # Переиспользуемые модули
│   ├── assets/         # Статические ресурсы (иконки, изображения)
│   ├── config/         # Конфигурация проекта
│   ├── hooks/          # Кастомные хуки
│   └── ui/             # Универсальные UI-компоненты
│
├── widgets/            # Виджеты (крупные UI-блоки)
│   ├── CurrentUser/
│   │   ├── ui/         # UI-компоненты виджета CurrentUser
│   │   └── index.tsx
│   └── Users/
│       ├── ui/         # UI-компоненты виджета Users
│       ├── utils/      # Вспомогательные функции
│       └── index.tsx
│
├── main.tsx            # Точка входа в приложение
└── index.html          # HTML-шаблон
```

---

## 📃 Лицензия

[MIT]