// ========== SISTEMA DE HISTORIAL Y SEGUIMIENTO ==========

class HistoryManager {
    constructor() {
        this.storageKey = 'meditation-history';
        this.init();
    }

    init() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify({
                sessions: [],
                stats: {
                    totalSessions: 0,
                    totalMinutes: 0,
                    streak: 0,
                    lastSessionDate: null
                }
            }));
        }
    }

    getData() {
        return JSON.parse(localStorage.getItem(this.storageKey));
    }

    saveData(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    addSession(name, duration) {
        const data = this.getData();
        const session = {
            id: Date.now(),
            name: name,
            duration: duration,
            date: new Date().toISOString(),
            timestamp: Date.now()
        };

        data.sessions.unshift(session);
        data.stats.totalSessions++;
        data.stats.totalMinutes += duration;

        // Calcular racha
        this.updateStreak(data);

        this.saveData(data);
        return session;
    }

    updateStreak(data) {
        const today = new Date().toDateString();
        const lastDate = data.stats.lastSessionDate ?
            new Date(data.stats.lastSessionDate).toDateString() : null;

        if (lastDate === today) {
            // Ya practicó hoy, mantener racha
            return;
        }

        if (lastDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toDateString();

            if (lastDate === yesterdayStr) {
                // Continuó la racha
                data.stats.streak++;
            } else {
                // Rompió la racha
                data.stats.streak = 1;
            }
        } else {
            // Primera sesión
            data.stats.streak = 1;
        }

        data.stats.lastSessionDate = today;
    }

    getStats() {
        return this.getData().stats;
    }

    getSessions(limit = 10) {
        return this.getData().sessions.slice(0, limit);
    }

    getSessionsByDate(days = 30) {
        const sessions = this.getData().sessions;
        const now = Date.now();
        const cutoff = now - (days * 24 * 60 * 60 * 1000);

        return sessions.filter(s => s.timestamp >= cutoff);
    }
}

// ========== TEMPORIZADOR ==========

class Timer {
    constructor() {
        this.duration = 0;
        this.remaining = 0;
        this.interval = null;
        this.isPaused = false;
        this.isRunning = false;
        this.circle = document.querySelector('.timer-progress');
        this.circumference = 2 * Math.PI * 90; // r=90

        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.displayEl = document.getElementById('timer-display');
        this.labelEl = document.getElementById('timer-label');
        this.startBtn = document.getElementById('timer-start');
        this.pauseBtn = document.getElementById('timer-pause');
        this.resetBtn = document.getElementById('timer-reset');

        this.circle.style.strokeDasharray = this.circumference;
        this.circle.style.strokeDashoffset = this.circumference;
    }

    initListeners() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());

        // Presets
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const minutes = parseInt(btn.dataset.minutes);
                this.setDuration(minutes * 60);
            });
        });
    }

    setDuration(seconds) {
        this.duration = seconds;
        this.remaining = seconds;
        this.updateDisplay();
        this.updateCircle();
    }

    start() {
        if (this.remaining === 0) return;

        this.isRunning = true;
        this.isPaused = false;
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.labelEl.textContent = 'En progreso';

        this.interval = setInterval(() => {
            this.remaining--;
            this.updateDisplay();
            this.updateCircle();

            if (this.remaining <= 0) {
                this.complete();
            }
        }, 1000);

        // Sonido de inicio (simulado)
        this.playSound('start');
    }

    pause() {
        if (!this.isRunning) return;

        this.isPaused = true;
        this.isRunning = false;
        clearInterval(this.interval);

        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.labelEl.textContent = 'Pausado';
        this.startBtn.textContent = 'Continuar';
    }

    reset() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.isPaused = false;
        this.remaining = this.duration;

        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.startBtn.textContent = 'Iniciar';
        this.labelEl.textContent = 'Preparado';

        this.updateDisplay();
        this.updateCircle();
    }

    complete() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.remaining = 0;

        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.labelEl.textContent = 'Completado';

        this.updateDisplay();
        this.playSound('end');

        // Registrar sesión
        if (window.historyManager && this.duration >= 60) {
            const minutes = Math.floor(this.duration / 60);
            window.historyManager.addSession('Sesión de meditación', minutes);
        }
    }

    updateDisplay() {
        const minutes = Math.floor(this.remaining / 60);
        const seconds = this.remaining % 60;
        this.displayEl.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateCircle() {
        const progress = this.duration > 0 ?
            (this.duration - this.remaining) / this.duration : 0;
        const offset = this.circumference - (progress * this.circumference);
        this.circle.style.strokeDashoffset = offset;
    }

    playSound(type) {
        // Simulación de sonido con console (en producción usar Web Audio API)
        console.log(`🔔 Sonido: ${type}`);
    }
}

// ========== RESPIRACIÓN GUIADA ==========

class BreathingGuide {
    constructor() {
        this.patterns = {
            '478': {
                name: '4-7-8 (Relajación)',
                steps: [
                    { phase: 'inhale', duration: 4, text: 'Inhala' },
                    { phase: 'hold', duration: 7, text: 'Sostén' },
                    { phase: 'exhale', duration: 8, text: 'Exhala' }
                ]
            },
            'box': {
                name: 'Box (Enfoque)',
                steps: [
                    { phase: 'inhale', duration: 4, text: 'Inhala' },
                    { phase: 'hold', duration: 4, text: 'Sostén' },
                    { phase: 'exhale', duration: 4, text: 'Exhala' },
                    { phase: 'hold', duration: 4, text: 'Sostén' }
                ]
            },
            'simple': {
                name: 'Simple (Básico)',
                steps: [
                    { phase: 'inhale', duration: 4, text: 'Inhala' },
                    { phase: 'exhale', duration: 4, text: 'Exhala' }
                ]
            }
        };

        this.currentPattern = '478';
        this.isActive = false;
        this.currentStep = 0;
        this.timeout = null;

        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.circle = document.getElementById('breathing-circle');
        this.text = document.getElementById('breathing-text');
        this.startBtn = document.getElementById('breathing-start');
        this.stopBtn = document.getElementById('breathing-stop');
    }

    initListeners() {
        this.startBtn.addEventListener('click', () => this.start());
        this.stopBtn.addEventListener('click', () => this.stop());

        document.querySelectorAll('.pattern-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.pattern-btn').forEach(b =>
                    b.classList.remove('active'));
                btn.classList.add('active');
                this.currentPattern = btn.dataset.pattern;
                if (this.isActive) {
                    this.stop();
                    this.start();
                }
            });
        });
    }

    start() {
        this.isActive = true;
        this.currentStep = 0;
        this.startBtn.disabled = true;
        this.stopBtn.disabled = false;
        this.runCycle();
    }

    stop() {
        this.isActive = false;
        clearTimeout(this.timeout);
        this.startBtn.disabled = false;
        this.stopBtn.disabled = true;
        this.circle.className = 'breathing-circle';
        this.text.textContent = 'Inhala';
    }

    runCycle() {
        if (!this.isActive) return;

        const pattern = this.patterns[this.currentPattern];
        const step = pattern.steps[this.currentStep];

        // Actualizar UI
        this.text.textContent = step.text;
        this.circle.className = `breathing-circle ${step.phase}`;

        // Siguiente paso
        this.timeout = setTimeout(() => {
            this.currentStep = (this.currentStep + 1) % pattern.steps.length;
            this.runCycle();
        }, step.duration * 1000);
    }
}

// ========== MODO OSCURO ==========

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.toggleBtn = document.getElementById('theme-toggle');
        this.themeIcon = this.toggleBtn.querySelector('.theme-icon');

        this.init();
        this.initListeners();
    }

    init() {
        if (this.currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
            this.themeIcon.textContent = '☀️';
        }
    }

    initListeners() {
        this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        if (this.currentTheme === 'light') {
            this.setDark();
        } else {
            this.setLight();
        }
    }

    setDark() {
        document.body.classList.add('dark-theme');
        this.themeIcon.textContent = '☀️';
        this.currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    }

    setLight() {
        document.body.classList.remove('dark-theme');
        this.themeIcon.textContent = '🌙';
        this.currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
}

// ========== GESTIÓN DE MODALES ==========

class ModalManager {
    constructor() {
        this.modals = {
            timer: document.getElementById('timer-modal'),
            breathing: document.getElementById('breathing-modal'),
            history: document.getElementById('history-modal'),
            guide: document.getElementById('guide-modal')
        };

        this.initListeners();
    }

    initListeners() {
        // Botones flotantes
        document.getElementById('breathing-btn').addEventListener('click', () =>
            this.open('breathing'));
        document.getElementById('history-btn').addEventListener('click', () =>
            this.open('history'));

        // Botones de cerrar
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                this.close(modal.id.replace('-modal', ''));
            });
        });

        // Cerrar al hacer click fuera
        Object.values(this.modals).forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.close(modal.id.replace('-modal', ''));
                }
            });
        });

        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                Object.keys(this.modals).forEach(key => this.close(key));
            }
        });
    }

    open(modalName) {
        const modal = this.modals[modalName];
        if (modal) {
            modal.classList.add('active');

            // Actualizar contenido del historial si se abre ese modal
            if (modalName === 'history' && window.historyManager) {
                updateHistoryDisplay();
            }
        }
    }

    close(modalName) {
        const modal = this.modals[modalName];
        if (modal) {
            modal.classList.remove('active');
        }
    }
}

// ========== GESTOR DE GUÍA PASO A PASO ==========

class GuideManager {
    constructor() {
        this.currentExercise = null;
        this.currentStep = 0;
        this.totalSteps = 0;

        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.iconEl = document.getElementById('guide-icon');
        this.titleEl = document.getElementById('guide-title');
        this.levelEl = document.getElementById('guide-level');
        this.descriptionEl = document.getElementById('guide-description');
        this.benefitsListEl = document.getElementById('guide-benefits-list');
        this.stepContentEl = document.getElementById('step-content');
        this.currentStepEl = document.getElementById('current-step');
        this.totalStepsEl = document.getElementById('total-steps');
        this.progressFillEl = document.getElementById('step-progress');
        this.prevBtn = document.getElementById('prev-step');
        this.nextBtn = document.getElementById('next-step');
        this.startSessionBtn = document.getElementById('start-guided-session');
    }

    initListeners() {
        this.prevBtn.addEventListener('click', () => this.previousStep());
        this.nextBtn.addEventListener('click', () => this.nextStep());

        this.startSessionBtn.addEventListener('click', () => {
            if (this.currentExercise && window.modalManager) {
                window.modalManager.close('guide');
                window.modalManager.open('timer');
                if (window.timer) {
                    window.timer.setDuration(this.currentExercise.duration * 60);
                }
            }
        });
    }

    showGuide(exercise) {
        this.currentExercise = exercise;
        this.currentStep = 0;
        this.totalSteps = exercise.steps ? exercise.steps.length : 0;

        // Actualizar información general
        this.iconEl.textContent = exercise.icon;
        this.titleEl.textContent = exercise.name;
        this.levelEl.textContent = exercise.level || 'Principiante';
        this.descriptionEl.textContent = exercise.description || exercise.notes;

        // Actualizar beneficios
        this.benefitsListEl.innerHTML = '';
        if (exercise.benefits && exercise.benefits.length > 0) {
            exercise.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                this.benefitsListEl.appendChild(li);
            });
        }

        // Actualizar pasos
        if (this.totalSteps > 0) {
            this.totalStepsEl.textContent = this.totalSteps;
            this.showStep(0);
        }

        // Abrir modal
        if (window.modalManager) {
            window.modalManager.open('guide');
        }
    }

    showStep(stepIndex) {
        if (!this.currentExercise || !this.currentExercise.steps) return;

        this.currentStep = stepIndex;
        const step = this.currentExercise.steps[stepIndex];

        // Actualizar contenido del paso
        this.stepContentEl.textContent = `${stepIndex + 1}. ${step}`;
        this.currentStepEl.textContent = stepIndex + 1;

        // Actualizar barra de progreso
        const progress = ((stepIndex + 1) / this.totalSteps) * 100;
        this.progressFillEl.style.width = `${progress}%`;

        // Actualizar botones
        this.prevBtn.disabled = stepIndex === 0;
        this.nextBtn.disabled = stepIndex === this.totalSteps - 1;

        if (stepIndex === this.totalSteps - 1) {
            this.nextBtn.textContent = 'Finalizado ✓';
        } else {
            this.nextBtn.textContent = 'Siguiente →';
        }
    }

    nextStep() {
        if (this.currentStep < this.totalSteps - 1) {
            this.showStep(this.currentStep + 1);
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.showStep(this.currentStep - 1);
        }
    }
}

// ========== MOSTRAR HISTORIAL ==========

function updateHistoryDisplay() {
    const stats = window.historyManager.getStats();
    const sessions = window.historyManager.getSessions(10);
    const recentSessions = window.historyManager.getSessionsByDate(30);

    // Actualizar estadísticas
    document.getElementById('streak-days').textContent = stats.streak;
    document.getElementById('total-sessions').textContent = stats.totalSessions;
    document.getElementById('total-minutes').textContent = stats.totalMinutes;

    // Crear calendario (últimos 30 días)
    const calendar = document.getElementById('practice-calendar');
    calendar.innerHTML = '';

    const sessionDates = new Set(
        recentSessions.map(s => new Date(s.date).toDateString())
    );

    const today = new Date();
    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toDateString();

        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = date.getDate();

        if (sessionDates.has(dateStr)) {
            dayEl.classList.add('has-session');
        }

        if (dateStr === today.toDateString()) {
            dayEl.classList.add('today');
        }

        dayEl.title = date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long'
        });

        calendar.appendChild(dayEl);
    }

    // Mostrar sesiones recientes
    const sessionsList = document.getElementById('sessions-list');
    sessionsList.innerHTML = '';

    if (sessions.length === 0) {
        sessionsList.innerHTML = '<p style="text-align: center; color: var(--text-soft); padding: 20px;">No hay sesiones registradas aún</p>';
        return;
    }

    sessions.forEach(session => {
        const sessionEl = document.createElement('div');
        sessionEl.className = 'session-item';

        const date = new Date(session.date);
        const dateStr = date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });

        sessionEl.innerHTML = `
            <div class="session-info">
                <div class="session-name">${session.name}</div>
                <div class="session-date">${dateStr}</div>
            </div>
            <div class="session-duration">${session.duration} min</div>
        `;

        sessionsList.appendChild(sessionEl);
    });
}

// ========== AGREGAR BOTONES A TARJETAS ==========

function addTimerToCards() {
    // Modificar createExerciseCard para agregar botones
    const originalCreateCard = window.createExerciseCard;

    window.createExerciseCard = function(exercise) {
        const card = originalCreateCard.call(this, exercise);

        // Contenedor de botones
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.cssText = `
            display: flex;
            gap: 8px;
            margin-top: 12px;
        `;

        // Botón de Ver Guía
        const guideBtn = document.createElement('button');
        guideBtn.className = 'card-action-btn';
        guideBtn.innerHTML = '📖 Ver Guía';
        guideBtn.style.cssText = `
            flex: 1;
            padding: 10px;
            border: 1px solid var(--glass-border);
            border-radius: var(--border-radius-small);
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: white;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-fast);
        `;

        guideBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(157, 141, 206, 0.3)';
        });

        guideBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });

        guideBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.guideManager) {
                window.guideManager.showGuide(exercise);
            }
        });

        // Botón de Iniciar Sesión
        const startBtn = document.createElement('button');
        startBtn.className = 'card-action-btn';
        startBtn.innerHTML = '⏱️ Iniciar';
        startBtn.style.cssText = `
            flex: 1;
            padding: 10px;
            border: 1px solid var(--glass-border);
            border-radius: var(--border-radius-small);
            background: var(--glass-bg);
            color: var(--text-light);
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-fast);
        `;

        startBtn.addEventListener('mouseenter', function() {
            this.style.background = 'var(--glass-bg-hover)';
            this.style.transform = 'translateY(-2px)';
        });

        startBtn.addEventListener('mouseleave', function() {
            this.style.background = 'var(--glass-bg)';
            this.style.transform = 'translateY(0)';
        });

        startBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.modalManager.open('timer');
            if (window.timer) {
                window.timer.setDuration(exercise.duration * 60);
            }
        });

        buttonsContainer.appendChild(guideBtn);
        buttonsContainer.appendChild(startBtn);
        card.appendChild(buttonsContainer);
        return card;
    };
}

// ========== INICIALIZACIÓN ==========

document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
        // Inicializar todos los sistemas
        window.historyManager = new HistoryManager();
        window.timer = new Timer();
        window.breathingGuide = new BreathingGuide();
        window.themeManager = new ThemeManager();
        window.modalManager = new ModalManager();
        window.guideManager = new GuideManager();

        // Agregar botones a las tarjetas
        addTimerToCards();

        console.log('✨ Todas las funcionalidades cargadas correctamente!');
        console.log('📖 Ahora las visualizaciones incluyen guías detalladas paso a paso');
    }, 100);
});
