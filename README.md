## Next Js + Docker App

### Informacion sobre la App

Esta aplicación frontend esta desarrollada utilizando Next Js + Typescript + Tailwind y Docker siguiendo los conceptos de Clean Architecture.
De acuerdo con este equema, la aplicación se divide en capas, donde las capas de Dominio y App son agnosticas del Framework

```
src/
├── domain/                   # Entidades, modelos,repositorios, contratos, por ej:
│   ├── entities/
│   │   └── Character.ts
│   └── repositories/
│       └── CharacterRepository.ts
│
├── application/              # Casos de uso / lógica de negocio
│   ├── use-cases/
│   │   ├── searchCharacter.use-case.ts
│   │   └── getCharacterById.use-case.ts
│
├── infrastructure/           # Implementaciones
│   ├── api/                  # Llamadas HTTP reales
│   │   └── adapters/
|	|		└── htt.adapter.ts
│   └── repositories/         # Implementaciones concretas de repos
│       └── CharacterApiRepository.ts
│
├── presentation/             # UI (componentes puros, sin lógica de negocio)
│   ├── components/
│   │   ├── Card/
│   │   ├── FilterBar/
│   │   ├── PopUp/
│   │   └── ...
│
├── app/                      # Rutas y vistas (Next.js App Router)
│   ├── page.tsx              # Welcome page
│   └── Home/page.tsx         # Home principal (cards, filtros, popup)
│
└── utils/                    # Funciones utilitarias

```

Consume la API pública [Ricky & Morty](https://rickandmortyapi.com/)

También utiliza una librería de componentes UI desarrollada para esta app

```
npm i react-character-card
```

### Ejecutar la App

**_Requerimientos_** - Tener Docker disponible en el sistema - renombrar el archivo **.env.example** a **.env**

**dev mode**: Para ejecutar la app en modo de desarrollo, correr el siguiente comando

    npm run dev

Este comando creará los contenedores en watch mode en el puerto **3002** y mostará logs los de la app Next/Typescript en en la terminal

**prod mode**: Para ejecutar la app en modo de produccion, correr el siguiente comando

    npm run dev

Este comando realizara el build de la app y la pondra en escucha en el puerto **3000**

### Detener la App

**dev mode**: Para detener la app en modo de desarrollo, correr el siguiente comando en la lína de comandos

```
ctrl + c
npm run stop
```

**prod mode**: Para detener la app modo de produccion, correr el siguiente comando

    npm run stop
