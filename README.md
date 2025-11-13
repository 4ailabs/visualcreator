# Visualizador de Rutinas de Ejercicio

Una aplicación web moderna e interactiva para visualizar rutinas de ejercicio, tanto por día de la semana como por fases de entrenamiento progresivo.

## Características

### Vista Diaria
- **7 días de rutinas completas** organizadas por grupos musculares
- Lunes: Pecho y Tríceps
- Martes: Espalda y Bíceps
- Miércoles: Piernas
- Jueves: Hombros y Abdomen
- Viernes: Full Body
- Sábado: Cardio y Core
- Domingo: Descanso Activo

### Vista por Etapas
- **Fase 1**: Adaptación Anatómica (4 semanas) - Nivel Principiante
- **Fase 2**: Desarrollo de Fuerza (6 semanas) - Nivel Intermedio
- **Fase 3**: Hipertrofia Muscular (8 semanas) - Nivel Intermedio-Avanzado
- **Fase 4**: Potencia y Rendimiento (6 semanas) - Nivel Avanzado

### Funcionalidades

- **Visualización Intuitiva**: Tarjetas de ejercicio con toda la información relevante
- **Panel de Estadísticas**: Visualiza el total de ejercicios, duración y calorías estimadas
- **Diseño Responsivo**: Funciona perfectamente en móviles, tablets y escritorio
- **Atajos de Teclado**: Navega rápidamente entre rutinas
- **Persistencia**: Guarda tu última selección en el navegador
- **Animaciones Suaves**: Transiciones elegantes y profesionales

## Detalles de cada Ejercicio

Cada ejercicio incluye:
- Icono identificativo
- Nombre del ejercicio
- Número de series
- Repeticiones recomendadas
- Duración estimada
- Calorías aproximadas
- Notas técnicas importantes

## Uso

1. **Abrir la aplicación**: Simplemente abre `index.html` en tu navegador
2. **Cambiar de vista**: Usa los botones superiores o las teclas 1 (Diaria) y 2 (Etapas)
3. **Seleccionar día/fase**: Haz clic en los botones de navegación
4. **Navegar con teclado**: Usa las flechas ← → para moverte entre días o fases

## Atajos de Teclado

- **Tecla 1**: Cambiar a Vista Diaria
- **Tecla 2**: Cambiar a Vista por Etapas
- **Flecha ←**: Día/Fase anterior
- **Flecha →**: Día/Fase siguiente

## Estructura del Proyecto

```
visualcreator/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño responsivo
├── app.js             # Lógica de la aplicación
├── data.js            # Datos de rutinas de ejercicio
└── README.md          # Documentación
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con gradientes, backdrop-filter y animaciones
- **JavaScript (Vanilla)**: Lógica de aplicación sin dependencias
- **LocalStorage**: Persistencia de datos del usuario

## Personalización

### Agregar nuevos ejercicios

Edita `data.js` y añade ejercicios a los objetos `dailyRoutines` o `stageRoutines`:

```javascript
{
    name: "Nombre del Ejercicio",
    icon: "🏋️",
    sets: 4,
    reps: "8-12",
    duration: 15,
    calories: 80,
    notes: "Notas técnicas importantes"
}
```

### Modificar colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #50c878;
    --accent-color: #ff6b6b;
}
```

## Características Destacadas

- **Sin dependencias**: No requiere frameworks ni librerías externas
- **Offline-ready**: Funciona sin conexión a internet
- **Ligero**: Carga rápida y rendimiento óptimo
- **Accesible**: Diseño pensado para todos los usuarios
- **Mantenible**: Código limpio y bien documentado

## Futuras Mejoras Sugeridas

- [ ] Sistema de usuario y login
- [ ] Guardado de progreso y historial
- [ ] Cronómetro integrado para ejercicios
- [ ] Videos demostrativos de cada ejercicio
- [ ] Calculadora de peso personalizado
- [ ] Exportación a PDF
- [ ] Modo oscuro/claro
- [ ] Notificaciones de entrenamiento
- [ ] Integración con calendario
- [ ] Gráficas de progreso

## Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:
1. Haz un fork del repositorio
2. Crea una rama para tu función
3. Realiza tus cambios
4. Envía un pull request

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Soporte

Para preguntas, sugerencias o reportar problemas, por favor abre un issue en el repositorio.

---

**¡Empieza tu transformación hoy mismo!** 💪🏋️‍♂️
