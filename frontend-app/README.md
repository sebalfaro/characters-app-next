src/
├── app/                       # Rutas y vistas (Next.js App Router)
│   ├── page.tsx               # Home page
│   └── main/page.tsx          # Pantalla principal (cards, filtros, popup)
│
├── presentation/             # UI (componentes puros, sin lógica de negocio)
│   ├── components/
│   │   ├── Card/
│   │   ├── FilterBar/
│   │   ├── PopUp/
│   │   └── ...
│   └── pages/                # Layouts y vistas si no usás app router
│
├── application/              # Casos de uso / lógica de negocio
│   ├── use-cases/
│   │   ├── getCharacters.ts
│   │   └── filterCharacters.ts
│   └── services/             # Servicios abstractos si necesitás (por ej. caching)
│
├── domain/                   # Entidades, tipos y contratos
│   ├── entities/
│   │   └── Character.ts
│   └── repositories/         # Interfaces que definen cómo se accede a datos
│       └── CharacterRepo.ts
│
├── infrastructure/           # Implementaciones reales de cosas externas
│   ├── api/                  # Llamadas HTTP reales
│   │   └── RickAndMortyAPI.ts
│   └── repositories/         # Implementaciones concretas de repos
│       └── CharacterRepoImpl.ts
│
├── constants/                # Strings, rutas, etc.
├── utils/                    # Funciones utilitarias
└── styles/                   # Estilos globales o compartidos
