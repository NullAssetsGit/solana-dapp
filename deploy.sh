#!/bin/bash
echo "🚀 Deploy Solana DApp to Netlify"

# Установка зависимостей
npm install

# Сборка
npm run build

# Деплой
netlify deploy --prod --dir=dist

echo "✅ Готово! Сайт: $(netlify open)"