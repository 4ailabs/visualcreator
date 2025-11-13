// Variables globales
let currentView = 'daily';
let currentDay = null;
let currentStage = null;

// Inicialización cuando carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Configurar listeners para las pestañas de vista
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // Configurar listeners para los botones de días
    const dayButtons = document.querySelectorAll('.day-btn');
    dayButtons.forEach(btn => {
        btn.addEventListener('click', () => selectDay(btn.dataset.day));
    });

    // Configurar listeners para los botones de etapas
    const stageButtons = document.querySelectorAll('.stage-btn');
    stageButtons.forEach(btn => {
        btn.addEventListener('click', () => selectStage(btn.dataset.stage));
    });

    // Seleccionar el primer día por defecto
    selectDay('lunes');
}

// Cambiar entre vista diaria y vista por etapas
function switchView(view) {
    currentView = view;

    // Actualizar botones de pestaña
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Mostrar/ocultar contenedores
    document.querySelectorAll('.view-container').forEach(container => {
        container.classList.remove('active');
    });

    if (view === 'daily') {
        document.getElementById('daily-view').classList.add('active');
        if (currentDay) {
            displayDailyExercises(currentDay);
        }
    } else {
        document.getElementById('stages-view').classList.add('active');
        if (currentStage) {
            displayStageExercises(currentStage);
        } else {
            selectStage('fase1'); // Seleccionar primera fase por defecto
        }
    }
}

// Seleccionar un día específico
function selectDay(day) {
    currentDay = day;

    // Actualizar botones de día
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.day === day);
    });

    // Mostrar ejercicios del día
    displayDailyExercises(day);
}

// Seleccionar una etapa específica
function selectStage(stage) {
    currentStage = stage;

    // Actualizar botones de etapa
    document.querySelectorAll('.stage-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.stage === stage);
    });

    // Mostrar ejercicios de la etapa
    displayStageExercises(stage);
}

// Mostrar ejercicios de un día
function displayDailyExercises(day) {
    const routine = dailyRoutines[day];
    if (!routine) return;

    // Actualizar título
    document.getElementById('current-day-title').textContent = routine.name;

    // Renderizar ejercicios
    const container = document.getElementById('exercises-container');
    container.innerHTML = '';

    routine.exercises.forEach(exercise => {
        const card = createExerciseCard(exercise);
        container.appendChild(card);
    });

    // Actualizar estadísticas
    updateStats(routine.exercises);
}

// Mostrar ejercicios de una etapa
function displayStageExercises(stage) {
    const routine = stageRoutines[stage];
    if (!routine) return;

    // Actualizar título e información
    document.getElementById('current-stage-title').textContent = routine.name;
    document.getElementById('stage-description').textContent = routine.description;
    document.getElementById('stage-duration').textContent =
        `Duración: ${routine.duration} | Nivel: ${routine.level}`;

    // Renderizar ejercicios
    const container = document.getElementById('stage-exercises-container');
    container.innerHTML = '';

    routine.exercises.forEach(exercise => {
        const card = createExerciseCard(exercise);
        container.appendChild(card);
    });

    // Actualizar estadísticas
    updateStats(routine.exercises);
}

// Crear tarjeta de visualización
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = 'exercise-card visualization-card';
    card.style.animation = 'fadeIn 0.4s ease';

    card.innerHTML = `
        <div class="exercise-header">
            <span class="exercise-icon">${exercise.icon}</span>
            <h3 class="exercise-name">${exercise.name}</h3>
        </div>
        <div class="exercise-details">
            <div class="exercise-detail">
                <span class="detail-label">Sesiones:</span>
                <span class="detail-value">${exercise.sets}</span>
            </div>
            <div class="exercise-detail">
                <span class="detail-label">Repeticiones:</span>
                <span class="detail-value">${exercise.reps}</span>
            </div>
            <div class="exercise-detail">
                <span class="detail-label">Duración:</span>
                <span class="detail-value">${exercise.duration} min</span>
            </div>
        </div>
        ${exercise.notes ? `<div class="exercise-notes">✨ ${exercise.notes}</div>` : ''}
    `;

    // Efecto de hover
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });

    return card;
}

// Actualizar panel de estadísticas
function updateStats(exercises) {
    const totalExercises = exercises.length;
    const totalDuration = exercises.reduce((sum, ex) => sum + ex.duration, 0);

    // Determinar nivel de práctica según duración total
    let practiceLevel = 'Principiante';
    if (totalDuration > 60) {
        practiceLevel = 'Avanzado';
    } else if (totalDuration > 30) {
        practiceLevel = 'Intermedio';
    }

    // Animación de números
    animateValue('total-exercises', 0, totalExercises, 500);
    animateValue('total-duration', 0, totalDuration, 500);

    // Actualizar nivel de práctica
    document.getElementById('practice-level').textContent = practiceLevel;
}

// Animar valores numéricos
function animateValue(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }

        if (elementId === 'total-duration') {
            element.textContent = Math.round(current) + ' min';
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Función para exportar rutina (funcionalidad extra)
function exportRoutine() {
    let data;
    if (currentView === 'daily' && currentDay) {
        data = dailyRoutines[currentDay];
    } else if (currentView === 'stages' && currentStage) {
        data = stageRoutines[currentStage];
    }

    if (data) {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `rutina-${currentView}-${currentDay || currentStage}.json`;
        a.click();
    }
}

// Función para imprimir rutina (funcionalidad extra)
function printRoutine() {
    window.print();
}

// Atajos de teclado
document.addEventListener('keydown', function(e) {
    // Flecha izquierda/derecha para navegar entre días
    if (currentView === 'daily') {
        const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
        const currentIndex = days.indexOf(currentDay);

        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            selectDay(days[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < days.length - 1) {
            selectDay(days[currentIndex + 1]);
        }
    }

    // Flecha izquierda/derecha para navegar entre etapas
    if (currentView === 'stages') {
        const stages = ['fase1', 'fase2', 'fase3', 'fase4'];
        const currentIndex = stages.indexOf(currentStage);

        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            selectStage(stages[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < stages.length - 1) {
            selectStage(stages[currentIndex + 1]);
        }
    }

    // Tecla 1 para vista diaria, tecla 2 para vista por etapas
    if (e.key === '1') {
        switchView('daily');
    } else if (e.key === '2') {
        switchView('stages');
    }
});

// Persistencia de selección en localStorage
window.addEventListener('beforeunload', function() {
    localStorage.setItem('exerciseApp', JSON.stringify({
        currentView,
        currentDay,
        currentStage
    }));
});

// Restaurar estado guardado
window.addEventListener('load', function() {
    const saved = localStorage.getItem('exerciseApp');
    if (saved) {
        const state = JSON.parse(saved);
        if (state.currentView) {
            switchView(state.currentView);
        }
        if (state.currentDay) {
            selectDay(state.currentDay);
        }
        if (state.currentStage) {
            selectStage(state.currentStage);
        }
    }
});

// Animación de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('🧘‍♀️ Visualizaciones Guiadas Mentales cargado correctamente!');
console.log('Atajos de teclado:');
console.log('- Tecla 1: Vista Diaria');
console.log('- Tecla 2: Vista por Etapas');
console.log('- Flechas ← →: Navegar entre días/etapas');
