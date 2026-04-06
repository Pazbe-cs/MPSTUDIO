# MPStudio - Diseño Web Profesional Paraguay

Landing page para empresa de desarrollo web en Paraguay, con chatbot funcional de árbol de conversación.

## 🚀 Tecnologías utilizadas

- Java 17
- Spring Boot
- Thymeleaf
- HTML / CSS / JavaScript puro
- Docker

## 📁 Estructura del proyecto
```
mpstudio/
├── src/
│   └── main/
│       ├── resources/
│       │   ├── static/
│       │   │   ├── css/
│       │   │   │   └── style.css
│       │   │   └── js/
│       │   │       ├── chat-tree.js      (datos del chatbot)
│       │   │       └── chat-assistant.js (lógica del chatbot)
│       │   └── templates/
│       │       └── index.html
├── Tareas/
│   ├── T1.md
│   ├── T2.md
│   └── T4.md
├── Dockerfile
├── docker-compose.yml
└── pom.xml
```

## ▶️ Opción 1 — Levantar con Maven

### Requisitos
- Java 17 o superior
- Maven

### Pasos
```bash
git clone https://github.com/Pazbe-cs/MPSTUDIO.git
cd MPSTUDIO
mvn spring-boot:run
```

Abrí en el navegador: http://localhost:8080

## 🐳 Opción 2 — Levantar con Docker

### Requisitos
- Docker Desktop instalado

### Pasos
```bash
git clone https://github.com/Pazbe-cs/MPSTUDIO.git
cd MPSTUDIO
docker-compose up --build
```

Abrí en el navegador: http://localhost:8080