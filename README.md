# 🔭 HypeLens API

> Backend service that transforms raw YouTube API payloads into curated, hype-scored video feeds.

Built with **NestJS** · **TypeScript** · **Jest**

---

## 🚀 Getting Started

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run start:dev

# Modo producción
npm run build
npm run start:prod
```

El servidor levanta en:
```
http://localhost:3000
```

---

## 📡 Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/v1/videos` | Retorna todos los videos transformados con su Nivel de Hype |

---

## 🧪 Tests

```bash
# Correr todos los tests
npm run test

# Modo watch
npm run test:watch

# Reporte de cobertura
npm run test:cov
```

| Archivo | Tests |
|---|---|
| `hype-calculator.helper.spec.ts` | 7 casos |
| `date-formatter.helper.spec.ts` | 10 casos |

---

## 🔗 Repositorios relacionados

| Repo | Descripción |
|---|---|
| [`hype-lens-api`](https://github.com/Stiven-Chacon/hype-lens-api) | Este repositorio — Backend NestJS |
| [`hype-lens-ui`](https://github.com/Stiven-Chacon/hype-lens-ui) | Frontend React + Tailwind |
