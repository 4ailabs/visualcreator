// Datos de rutinas de ejercicio organizadas por día
const dailyRoutines = {
    lunes: {
        name: "Lunes - Pecho y Tríceps",
        exercises: [
            {
                name: "Press de Banca",
                icon: "🏋️",
                sets: 4,
                reps: "8-12",
                duration: 15,
                calories: 80,
                notes: "Mantén la espalda pegada al banco. Controla el descenso."
            },
            {
                name: "Press Inclinado con Mancuernas",
                icon: "💪",
                sets: 3,
                reps: "10-12",
                duration: 12,
                calories: 65,
                notes: "Inclinación de 30-45 grados. Movimiento controlado."
            },
            {
                name: "Aperturas con Mancuernas",
                icon: "🤸",
                sets: 3,
                reps: "12-15",
                duration: 10,
                calories: 55,
                notes: "Mantén una ligera flexión en los codos."
            },
            {
                name: "Fondos en Paralelas",
                icon: "🏃",
                sets: 3,
                reps: "8-12",
                duration: 10,
                calories: 70,
                notes: "Inclínate hacia adelante para trabajar más pecho."
            },
            {
                name: "Extensiones de Tríceps",
                icon: "💪",
                sets: 3,
                reps: "10-12",
                duration: 10,
                calories: 45,
                notes: "Mantén los codos fijos y estables."
            }
        ]
    },
    martes: {
        name: "Martes - Espalda y Bíceps",
        exercises: [
            {
                name: "Dominadas",
                icon: "🏋️",
                sets: 4,
                reps: "6-10",
                duration: 12,
                calories: 85,
                notes: "Agarre pronado. Pecho hacia la barra."
            },
            {
                name: "Remo con Barra",
                icon: "💪",
                sets: 4,
                reps: "8-10",
                duration: 15,
                calories: 75,
                notes: "Mantén la espalda recta. Tira hacia el abdomen."
            },
            {
                name: "Jalón al Pecho",
                icon: "🤸",
                sets: 3,
                reps: "10-12",
                duration: 12,
                calories: 60,
                notes: "Contrae los dorsales en cada repetición."
            },
            {
                name: "Remo con Mancuerna",
                icon: "🏃",
                sets: 3,
                reps: "10-12",
                duration: 10,
                calories: 55,
                notes: "Una mano a la vez. Estabiliza el core."
            },
            {
                name: "Curl de Bíceps con Barra",
                icon: "💪",
                sets: 3,
                reps: "10-12",
                duration: 10,
                calories: 40,
                notes: "Codos pegados al cuerpo. Sin balanceo."
            },
            {
                name: "Curl Martillo",
                icon: "🏋️",
                sets: 3,
                reps: "12-15",
                duration: 8,
                calories: 35,
                notes: "Agarre neutro. Movimiento controlado."
            }
        ]
    },
    miercoles: {
        name: "Miércoles - Piernas",
        exercises: [
            {
                name: "Sentadilla con Barra",
                icon: "🏋️",
                sets: 4,
                reps: "8-12",
                duration: 20,
                calories: 120,
                notes: "Profundidad hasta paralelo. Espalda recta."
            },
            {
                name: "Prensa de Piernas",
                icon: "💪",
                sets: 4,
                reps: "10-12",
                duration: 15,
                calories: 100,
                notes: "Rodillas alineadas con los pies."
            },
            {
                name: "Peso Muerto Rumano",
                icon: "🤸",
                sets: 3,
                reps: "10-12",
                duration: 12,
                calories: 90,
                notes: "Mantén la barra cerca del cuerpo."
            },
            {
                name: "Extensiones de Cuádriceps",
                icon: "🏃",
                sets: 3,
                reps: "12-15",
                duration: 10,
                calories: 60,
                notes: "Contracción máxima en la parte superior."
            },
            {
                name: "Curl Femoral",
                icon: "💪",
                sets: 3,
                reps: "12-15",
                duration: 10,
                calories: 55,
                notes: "Movimiento lento y controlado."
            },
            {
                name: "Elevaciones de Gemelos",
                icon: "🏋️",
                sets: 4,
                reps: "15-20",
                duration: 10,
                calories: 45,
                notes: "Rango completo de movimiento."
            }
        ]
    },
    jueves: {
        name: "Jueves - Hombros y Abdomen",
        exercises: [
            {
                name: "Press Militar",
                icon: "🏋️",
                sets: 4,
                reps: "8-10",
                duration: 15,
                calories: 70,
                notes: "Barra por delante. Core apretado."
            },
            {
                name: "Elevaciones Laterales",
                icon: "💪",
                sets: 4,
                reps: "12-15",
                duration: 12,
                calories: 50,
                notes: "Codos ligeramente flexionados."
            },
            {
                name: "Elevaciones Frontales",
                icon: "🤸",
                sets: 3,
                reps: "12-15",
                duration: 10,
                calories: 45,
                notes: "Hasta la altura de los ojos."
            },
            {
                name: "Pájaros",
                icon: "🏃",
                sets: 3,
                reps: "12-15",
                duration: 10,
                calories: 40,
                notes: "Trabaja el deltoides posterior."
            },
            {
                name: "Plancha Abdominal",
                icon: "🧘",
                sets: 3,
                reps: "60 seg",
                duration: 5,
                calories: 30,
                notes: "Cuerpo en línea recta."
            },
            {
                name: "Crunch Abdominal",
                icon: "🤸",
                sets: 3,
                reps: "15-20",
                duration: 8,
                calories: 25,
                notes: "Concentración en el abdomen."
            }
        ]
    },
    viernes: {
        name: "Viernes - Full Body",
        exercises: [
            {
                name: "Peso Muerto",
                icon: "🏋️",
                sets: 4,
                reps: "6-8",
                duration: 18,
                calories: 110,
                notes: "Movimiento rey. Técnica perfecta."
            },
            {
                name: "Press de Banca Inclinado",
                icon: "💪",
                sets: 3,
                reps: "8-10",
                duration: 12,
                calories: 65,
                notes: "Trabajo del pecho superior."
            },
            {
                name: "Sentadilla Frontal",
                icon: "🤸",
                sets: 3,
                reps: "8-10",
                duration: 15,
                calories: 95,
                notes: "Mantén el torso erguido."
            },
            {
                name: "Remo en Polea",
                icon: "🏃",
                sets: 3,
                reps: "10-12",
                duration: 12,
                calories: 60,
                notes: "Retrae las escápulas."
            },
            {
                name: "Burpees",
                icon: "🔥",
                sets: 3,
                reps: "10-15",
                duration: 10,
                calories: 80,
                notes: "Ejercicio cardiovascular intenso."
            }
        ]
    },
    sabado: {
        name: "Sábado - Cardio y Core",
        exercises: [
            {
                name: "Carrera Continua",
                icon: "🏃",
                sets: 1,
                reps: "30 min",
                duration: 30,
                calories: 300,
                notes: "Ritmo moderado. 70% FCM."
            },
            {
                name: "Mountain Climbers",
                icon: "⛰️",
                sets: 4,
                reps: "30 seg",
                duration: 8,
                calories: 60,
                notes: "Ritmo rápido. Core activado."
            },
            {
                name: "Russian Twists",
                icon: "🔄",
                sets: 3,
                reps: "20-30",
                duration: 8,
                calories: 40,
                notes: "Rota el torso completamente."
            },
            {
                name: "Plancha Lateral",
                icon: "🧘",
                sets: 3,
                reps: "30 seg",
                duration: 6,
                calories: 25,
                notes: "Cada lado. Mantén alineación."
            },
            {
                name: "Bicicleta Abdominal",
                icon: "🚴",
                sets: 3,
                reps: "20-30",
                duration: 8,
                calories: 35,
                notes: "Codo a rodilla opuesta."
            }
        ]
    },
    domingo: {
        name: "Domingo - Descanso Activo",
        exercises: [
            {
                name: "Caminata",
                icon: "🚶",
                sets: 1,
                reps: "45 min",
                duration: 45,
                calories: 200,
                notes: "Ritmo ligero. Recuperación activa."
            },
            {
                name: "Estiramientos Dinámicos",
                icon: "🧘",
                sets: 1,
                reps: "15 min",
                duration: 15,
                calories: 30,
                notes: "Todo el cuerpo. Movilidad articular."
            },
            {
                name: "Yoga Suave",
                icon: "🧘‍♀️",
                sets: 1,
                reps: "20 min",
                duration: 20,
                calories: 50,
                notes: "Enfócate en la respiración."
            },
            {
                name: "Foam Rolling",
                icon: "🎯",
                sets: 1,
                reps: "15 min",
                duration: 15,
                calories: 20,
                notes: "Liberación miofascial. Todos los grupos musculares."
            }
        ]
    }
};

// Datos de rutinas organizadas por etapas/fases
const stageRoutines = {
    fase1: {
        name: "Fase 1: Adaptación Anatómica",
        description: "Construcción de base muscular y aprendizaje de técnica",
        duration: "4 semanas",
        level: "Principiante",
        exercises: [
            {
                name: "Sentadilla con Peso Corporal",
                icon: "🏋️",
                sets: 3,
                reps: "12-15",
                duration: 10,
                calories: 60,
                notes: "Aprende la técnica correcta sin peso adicional."
            },
            {
                name: "Flexiones de Brazos",
                icon: "💪",
                sets: 3,
                reps: "8-12",
                duration: 8,
                calories: 50,
                notes: "Modifica en rodillas si es necesario."
            },
            {
                name: "Remo Invertido",
                icon: "🤸",
                sets: 3,
                reps: "8-10",
                duration: 10,
                calories: 45,
                notes: "Usa una barra baja o anillas."
            },
            {
                name: "Plancha",
                icon: "🧘",
                sets: 3,
                reps: "30-45 seg",
                duration: 6,
                calories: 30,
                notes: "Construye fuerza core fundamental."
            },
            {
                name: "Zancadas",
                icon: "🏃",
                sets: 3,
                reps: "10-12",
                duration: 12,
                calories: 70,
                notes: "Alterna las piernas. Sin peso."
            },
            {
                name: "Superman",
                icon: "🦸",
                sets: 3,
                reps: "12-15",
                duration: 8,
                calories: 35,
                notes: "Fortalece la zona lumbar."
            }
        ]
    },
    fase2: {
        name: "Fase 2: Desarrollo de Fuerza",
        description: "Incremento de cargas y volumen de entrenamiento",
        duration: "6 semanas",
        level: "Intermedio",
        exercises: [
            {
                name: "Sentadilla con Barra",
                icon: "🏋️",
                sets: 4,
                reps: "8-10",
                duration: 18,
                calories: 110,
                notes: "Incrementa el peso progresivamente."
            },
            {
                name: "Press de Banca",
                icon: "💪",
                sets: 4,
                reps: "8-10",
                duration: 15,
                calories: 80,
                notes: "Enfócate en la potencia."
            },
            {
                name: "Peso Muerto",
                icon: "🤸",
                sets: 4,
                reps: "6-8",
                duration: 18,
                calories: 120,
                notes: "Técnica perfecta es crucial."
            },
            {
                name: "Press Militar",
                icon: "🏃",
                sets: 3,
                reps: "8-10",
                duration: 12,
                calories: 65,
                notes: "Desarrolla fuerza en hombros."
            },
            {
                name: "Dominadas Lastradas",
                icon: "💪",
                sets: 4,
                reps: "6-8",
                duration: 12,
                calories: 90,
                notes: "Añade peso cuando sea posible."
            },
            {
                name: "Remo con Barra",
                icon: "🏋️",
                sets: 4,
                reps: "8-10",
                duration: 15,
                calories: 75,
                notes: "Construye espalda gruesa."
            }
        ]
    },
    fase3: {
        name: "Fase 3: Hipertrofia Muscular",
        description: "Maximización del crecimiento muscular",
        duration: "8 semanas",
        level: "Intermedio-Avanzado",
        exercises: [
            {
                name: "Press Inclinado con Mancuernas",
                icon: "🏋️",
                sets: 4,
                reps: "10-12",
                duration: 15,
                calories: 75,
                notes: "Tiempo bajo tensión. 3-1-3."
            },
            {
                name: "Sentadilla Hack",
                icon: "💪",
                sets: 4,
                reps: "10-12",
                duration: 16,
                calories: 95,
                notes: "Congestión muscular máxima."
            },
            {
                name: "Jalón Agarre Cerrado",
                icon: "🤸",
                sets: 4,
                reps: "12-15",
                duration: 12,
                calories: 60,
                notes: "Aprieta la contracción."
            },
            {
                name: "Curl Predicador",
                icon: "💪",
                sets: 4,
                reps: "10-12",
                duration: 12,
                calories: 45,
                notes: "Aislamiento total del bíceps."
            },
            {
                name: "Extensiones de Tríceps Acostado",
                icon: "🏃",
                sets: 4,
                reps: "10-12",
                duration: 12,
                calories: 50,
                notes: "Rango completo de movimiento."
            },
            {
                name: "Elevaciones Laterales con Cable",
                icon: "🤸",
                sets: 4,
                reps: "12-15",
                duration: 12,
                calories: 48,
                notes: "Tensión constante en deltoides."
            },
            {
                name: "Curl Femoral Acostado",
                icon: "🏋️",
                sets: 4,
                reps: "12-15",
                duration: 12,
                calories: 60,
                notes: "Pausa en la contracción."
            }
        ]
    },
    fase4: {
        name: "Fase 4: Potencia y Rendimiento",
        description: "Desarrollo de explosividad y máximo rendimiento atlético",
        duration: "6 semanas",
        level: "Avanzado",
        exercises: [
            {
                name: "Cargadas de Potencia",
                icon: "⚡",
                sets: 5,
                reps: "3-5",
                duration: 20,
                calories: 130,
                notes: "Movimiento olímpico explosivo."
            },
            {
                name: "Sentadilla con Salto",
                icon: "🏋️",
                sets: 4,
                reps: "5-8",
                duration: 15,
                calories: 100,
                notes: "Máxima potencia en cada rep."
            },
            {
                name: "Press de Banca Explosivo",
                icon: "💪",
                sets: 5,
                reps: "3-5",
                duration: 15,
                calories: 85,
                notes: "Acelera la barra en cada rep."
            },
            {
                name: "Box Jumps",
                icon: "📦",
                sets: 4,
                reps: "6-8",
                duration: 12,
                calories: 90,
                notes: "Aterrizaje suave. Potencia máxima."
            },
            {
                name: "Arrancadas",
                icon: "⚡",
                sets: 5,
                reps: "2-3",
                duration: 20,
                calories: 140,
                notes: "Técnica impecable requerida."
            },
            {
                name: "Sprints",
                icon: "🏃‍♂️",
                sets: 6,
                reps: "50m",
                duration: 18,
                calories: 150,
                notes: "Descanso completo entre series."
            },
            {
                name: "Medicine Ball Slams",
                icon: "🏀",
                sets: 4,
                reps: "8-10",
                duration: 10,
                calories: 75,
                notes: "Explosión total del core."
            }
        ]
    }
};
