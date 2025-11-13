// Datos de rutinas de visualización mental organizadas por día
const dailyRoutines = {
    lunes: {
        name: "Lunes - Energía y Motivación",
        exercises: [
            {
                name: "Visualización del Sol Interior",
                icon: "☀️",
                sets: 1,
                reps: "3 ciclos",
                duration: 10,
                calories: 0,
                notes: "Imagina un sol brillante en tu pecho que irradia energía dorada a todo tu cuerpo."
            },
            {
                name: "Escalera de Logros",
                icon: "🏔️",
                sets: 1,
                reps: "1 sesión",
                duration: 15,
                calories: 0,
                notes: "Visualízate subiendo una escalera donde cada peldaño representa un logro que vas a conseguir."
            },
            {
                name: "Río de Creatividad",
                icon: "🌊",
                sets: 1,
                reps: "2 ciclos",
                duration: 12,
                calories: 0,
                notes: "Observa un río de luz que fluye desde el universo hacia tu mente, trayendo ideas creativas."
            },
            {
                name: "Afirmaciones en el Espejo Mental",
                icon: "💎",
                sets: 3,
                reps: "5 afirmaciones",
                duration: 8,
                calories: 0,
                notes: "Mírate en un espejo mental y repite afirmaciones positivas con convicción."
            },
            {
                name: "Jardín de Posibilidades",
                icon: "🌺",
                sets: 1,
                reps: "1 sesión",
                duration: 20,
                calories: 0,
                notes: "Camina por un jardín donde cada flor representa una oportunidad que se abre para ti."
            }
        ]
    },
    martes: {
        name: "Martes - Sanación y Equilibrio",
        exercises: [
            {
                name: "Luz Sanadora Violeta",
                icon: "💜",
                sets: 1,
                reps: "4 ciclos",
                duration: 15,
                calories: 0,
                notes: "Visualiza una luz violeta que recorre tu cuerpo sanando cada célula."
            },
            {
                name: "Baño en Cascada Cristalina",
                icon: "💧",
                sets: 1,
                reps: "1 sesión",
                duration: 18,
                calories: 0,
                notes: "Imagínate bajo una cascada de agua cristalina que limpia toda tensión y dolor."
            },
            {
                name: "Equilibrio de Chakras",
                icon: "🌈",
                sets: 1,
                reps: "7 chakras",
                duration: 20,
                calories: 0,
                notes: "Visualiza cada chakra girando en balance perfecto con sus colores correspondientes."
            },
            {
                name: "Abrazo del Ángel Guardián",
                icon: "😇",
                sets: 1,
                reps: "3 ciclos",
                duration: 12,
                calories: 0,
                notes: "Siente la presencia protectora de tu ángel guardián rodeándote con amor."
            },
            {
                name: "Respiración del Océano",
                icon: "🌊",
                sets: 1,
                reps: "10 respiraciones",
                duration: 10,
                calories: 0,
                notes: "Sincroniza tu respiración con las olas del océano, inhalando paz y exhalando estrés."
            },
            {
                name: "Sanación del Niño Interior",
                icon: "🧸",
                sets: 1,
                reps: "1 sesión",
                duration: 15,
                calories: 0,
                notes: "Encuentra a tu niño interior y bríndale amor, comprensión y sanación."
            }
        ]
    },
    miercoles: {
        name: "Miércoles - Abundancia y Prosperidad",
        exercises: [
            {
                name: "Lluvia de Oro",
                icon: "✨",
                sets: 1,
                reps: "5 ciclos",
                duration: 12,
                calories: 0,
                notes: "Visualiza una lluvia de monedas doradas cayendo sobre ti, representando abundancia infinita."
            },
            {
                name: "El Jardín de la Abundancia",
                icon: "🌳",
                sets: 1,
                reps: "1 sesión",
                duration: 20,
                calories: 0,
                notes: "Camina por un jardín donde cada planta representa diferentes formas de abundancia en tu vida."
            },
            {
                name: "Imán de Prosperidad",
                icon: "🧲",
                sets: 1,
                reps: "3 ciclos",
                duration: 15,
                calories: 0,
                notes: "Activa un imán en tu corazón que atrae oportunidades y prosperidad."
            },
            {
                name: "Cofre del Tesoro Interior",
                icon: "💰",
                sets: 1,
                reps: "1 sesión",
                duration: 18,
                calories: 0,
                notes: "Descubre un cofre dentro de ti lleno de tesoros: talentos, habilidades y riquezas."
            },
            {
                name: "Río de Abundancia",
                icon: "🌊",
                sets: 1,
                reps: "2 ciclos",
                duration: 10,
                calories: 0,
                notes: "Sumérgete en un río de abundancia que fluye constantemente hacia ti."
            },
            {
                name: "Semillas de Prosperidad",
                icon: "🌱",
                sets: 1,
                reps: "1 sesión",
                duration: 14,
                calories: 0,
                notes: "Planta semillas mentales de tus metas financieras y obsérvalas crecer."
            }
        ]
    },
    jueves: {
        name: "Jueves - Amor y Relaciones",
        exercises: [
            {
                name: "Corazón Radiante",
                icon: "❤️",
                sets: 1,
                reps: "4 ciclos",
                duration: 12,
                calories: 0,
                notes: "Visualiza tu corazón como un sol rosado que irradia amor incondicional."
            },
            {
                name: "Puente del Perdón",
                icon: "🌉",
                sets: 1,
                reps: "1 sesión",
                duration: 18,
                calories: 0,
                notes: "Cruza un puente imaginario hacia el perdón de otros y de ti mismo."
            },
            {
                name: "Círculo de Seres Queridos",
                icon: "👨‍👩‍👧‍👦",
                sets: 1,
                reps: "1 sesión",
                duration: 15,
                calories: 0,
                notes: "Reúnete en espíritu con tus seres queridos en un círculo de amor y conexión."
            },
            {
                name: "Jardín del Amor Propio",
                icon: "🌹",
                sets: 1,
                reps: "3 ciclos",
                duration: 16,
                calories: 0,
                notes: "Cultiva flores de amor propio, aceptación y valoración personal."
            },
            {
                name: "Aura de Atracción",
                icon: "✨",
                sets: 1,
                reps: "2 ciclos",
                duration: 10,
                calories: 0,
                notes: "Expande tu aura con luz rosada que atrae relaciones armoniosas."
            },
            {
                name: "Abrazo Universal",
                icon: "🤗",
                sets: 1,
                reps: "1 sesión",
                duration: 12,
                calories: 0,
                notes: "Siente el abrazo amoroso del universo que te envuelve y te protege."
            }
        ]
    },
    viernes: {
        name: "Viernes - Liberación y Transformación",
        exercises: [
            {
                name: "Fuego Transmutador",
                icon: "🔥",
                sets: 1,
                reps: "3 ciclos",
                duration: 15,
                calories: 0,
                notes: "Visualiza un fuego violeta que transforma todas tus preocupaciones en luz."
            },
            {
                name: "Mariposa de Transformación",
                icon: "🦋",
                sets: 1,
                reps: "1 sesión",
                duration: 20,
                calories: 0,
                notes: "Experimenta tu metamorfosis: sales del capullo convertido en una mariposa libre."
            },
            {
                name: "Limpieza de Cuerdas Energéticas",
                icon: "✂️",
                sets: 1,
                reps: "1 sesión",
                duration: 18,
                calories: 0,
                notes: "Corta las cuerdas que te atan a situaciones o personas que ya no te sirven."
            },
            {
                name: "Soltar Globos al Cielo",
                icon: "🎈",
                sets: 1,
                reps: "5 globos",
                duration: 12,
                calories: 0,
                notes: "Cada globo representa algo que sueltas: miedos, culpas, resentimientos..."
            },
            {
                name: "Baño de Luz Purificadora",
                icon: "🌟",
                sets: 1,
                reps: "2 ciclos",
                duration: 14,
                calories: 0,
                notes: "Sumérgete en un océano de luz blanca que purifica todo tu ser."
            }
        ]
    },
    sabado: {
        name: "Sábado - Conexión Espiritual",
        exercises: [
            {
                name: "Elevación al Templo Interior",
                icon: "🏛️",
                sets: 1,
                reps: "1 sesión",
                duration: 25,
                calories: 0,
                notes: "Asciende a tu templo interior, un lugar sagrado de paz y sabiduría infinita."
            },
            {
                name: "Encuentro con el Yo Superior",
                icon: "👁️",
                sets: 1,
                reps: "1 sesión",
                duration: 20,
                calories: 0,
                notes: "Dialoga con tu yo superior y recibe su guía y sabiduría."
            },
            {
                name: "Conexión con la Tierra",
                icon: "🌍",
                sets: 1,
                reps: "3 ciclos",
                duration: 15,
                calories: 0,
                notes: "Enraízate profundamente en la tierra y siente su energía nutritiva."
            },
            {
                name: "Portal de Luz Cósmica",
                icon: "🌌",
                sets: 1,
                reps: "1 sesión",
                duration: 18,
                calories: 0,
                notes: "Atraviesa un portal hacia dimensiones superiores de consciencia."
            },
            {
                name: "Meditación de la Estrella",
                icon: "⭐",
                sets: 1,
                reps: "2 ciclos",
                duration: 16,
                calories: 0,
                notes: "Conviértete en una estrella brillante en el cosmos, irradiando tu luz única."
            }
        ]
    },
    domingo: {
        name: "Domingo - Paz y Relajación Profunda",
        exercises: [
            {
                name: "Playa de la Tranquilidad",
                icon: "🏖️",
                sets: 1,
                reps: "1 sesión",
                duration: 30,
                calories: 0,
                notes: "Recuéstate en una playa paradisíaca sintiendo el sol, la brisa y las olas."
            },
            {
                name: "Flotación en Nubes",
                icon: "☁️",
                sets: 1,
                reps: "2 ciclos",
                duration: 20,
                calories: 0,
                notes: "Flota entre nubes suaves, sintiéndote liviano y completamente relajado."
            },
            {
                name: "Jardín Zen Mental",
                icon: "🎋",
                sets: 1,
                reps: "1 sesión",
                duration: 18,
                calories: 0,
                notes: "Pasea por un jardín zen donde cada elemento te invita a la contemplación serena."
            },
            {
                name: "Respiración de la Paz",
                icon: "🕊️",
                sets: 1,
                reps: "10 respiraciones",
                duration: 12,
                calories: 0,
                notes: "Cada inhalación trae paz, cada exhalación libera cualquier inquietud."
            },
            {
                name: "Cápsula de Sanación",
                icon: "💫",
                sets: 1,
                reps: "1 sesión",
                duration: 25,
                calories: 0,
                notes: "Entra en una cápsula de luz que restaura completamente tu energía vital."
            }
        ]
    }
};

// Datos de rutinas organizadas por etapas/fases
const stageRoutines = {
    fase1: {
        name: "Fase 1: Despertar Consciente",
        description: "Introducción a la visualización y desarrollo de la imaginación consciente",
        duration: "4 semanas",
        level: "Principiante",
        exercises: [
            {
                name: "Respiración Consciente Básica",
                icon: "🌬️",
                sets: 1,
                reps: "10 respiraciones",
                duration: 8,
                calories: 0,
                notes: "Aprende a observar tu respiración sin modificarla, solo siendo consciente."
            },
            {
                name: "Visualización del Color",
                icon: "🎨",
                sets: 1,
                reps: "3 colores",
                duration: 10,
                calories: 0,
                notes: "Imagina colores simples: rojo, azul, verde. Observa su intensidad."
            },
            {
                name: "Escáner Corporal",
                icon: "🧘",
                sets: 1,
                reps: "1 sesión",
                duration: 15,
                calories: 0,
                notes: "Recorre mentalmente cada parte de tu cuerpo, notando sensaciones."
            },
            {
                name: "Lugar Seguro",
                icon: "🏡",
                sets: 1,
                reps: "1 sesión",
                duration: 12,
                calories: 0,
                notes: "Crea un espacio mental seguro al que puedas regresar cuando lo necesites."
            },
            {
                name: "Observación de Pensamientos",
                icon: "💭",
                sets: 1,
                reps: "5 minutos",
                duration: 10,
                calories: 0,
                notes: "Observa tus pensamientos como nubes que pasan, sin juzgarlos."
            },
            {
                name: "Anclaje al Presente",
                icon: "⚓",
                sets: 3,
                reps: "1 minuto",
                duration: 8,
                calories: 0,
                notes: "Usa tus sentidos para anclarte en el momento presente."
            }
        ]
    },
    fase2: {
        name: "Fase 2: Profundización",
        description: "Desarrollo de visualizaciones más complejas y sostenidas",
        duration: "6 semanas",
        level: "Intermedio",
        exercises: [
            {
                name: "Visualización del Bosque Encantado",
                icon: "🌲",
                sets: 1,
                reps: "1 sesión",
                duration: 20,
                calories: 0,
                notes: "Explora un bosque mágico con todos tus sentidos internos activados."
            },
            {
                name: "Viaje al Templo del Corazón",
                icon: "💖",
                sets: 1,
                reps: "1 sesión",
                duration: 25,
                calories: 0,
                notes: "Desciende a las profundidades de tu corazón y descubre su sabiduría."
            },
            {
                name: "Diálogo con la Sabiduría Interior",
                icon: "🧙",
                sets: 1,
                reps: "1 sesión",
                duration: 18,
                calories: 0,
                notes: "Encuentra a tu guía interior y hazle las preguntas que necesitas responder."
            },
            {
                name: "Sanación de Memorias",
                icon: "🕰️",
                sets: 1,
                reps: "1 memoria",
                duration: 22,
                calories: 0,
                notes: "Trabaja con una memoria dolorosa, transformándola con luz y comprensión."
            },
            {
                name: "Expansión del Aura",
                icon: "🌟",
                sets: 1,
                reps: "3 ciclos",
                duration: 15,
                calories: 0,
                notes: "Expande conscientemente tu campo energético con intención."
            },
            {
                name: "Vuelo del Águila",
                icon: "🦅",
                sets: 1,
                reps: "1 sesión",
                duration: 20,
                calories: 0,
                notes: "Experimenta volar como un águila, viendo tu vida desde una perspectiva superior."
            }
        ]
    },
    fase3: {
        name: "Fase 3: Maestría Creativa",
        description: "Visualizaciones avanzadas para manifestación y transformación profunda",
        duration: "8 semanas",
        level: "Intermedio-Avanzado",
        exercises: [
            {
                name: "Arquitectura del Futuro Deseado",
                icon: "🏗️",
                sets: 1,
                reps: "1 sesión",
                duration: 30,
                calories: 0,
                notes: "Construye con detalle tu realidad futura ideal en todos sus aspectos."
            },
            {
                name: "Reprogramación de Creencias",
                icon: "🔄",
                sets: 1,
                reps: "3 creencias",
                duration: 25,
                calories: 0,
                notes: "Identifica y transforma creencias limitantes en creencias potenciadoras."
            },
            {
                name: "Viaje a Vidas Pasadas",
                icon: "🔮",
                sets: 1,
                reps: "1 sesión",
                duration: 35,
                calories: 0,
                notes: "Explora memorias más allá de esta vida para comprender patrones profundos."
            },
            {
                name: "Encuentro con Arquetipos",
                icon: "👤",
                sets: 1,
                reps: "1 arquetipo",
                duration: 28,
                calories: 0,
                notes: "Conecta con arquetipos universales: el guerrero, el sabio, el sanador..."
            },
            {
                name: "Laboratorio de Manifestación",
                icon: "⚗️",
                sets: 1,
                reps: "1 sesión",
                duration: 30,
                calories: 0,
                notes: "Crea en tu laboratorio interno la realidad que deseas manifestar."
            },
            {
                name: "Fusión con tu Ser Multidimensional",
                icon: "🌈",
                sets: 1,
                reps: "1 sesión",
                duration: 32,
                calories: 0,
                notes: "Integra todos los aspectos de tu ser en todas las dimensiones."
            },
            {
                name: "Portal del Tiempo",
                icon: "⏳",
                sets: 1,
                reps: "1 sesión",
                duration: 27,
                calories: 0,
                notes: "Viaja mental y emocionalmente a través del tiempo para sanar y evolucionar."
            }
        ]
    },
    fase4: {
        name: "Fase 4: Conciencia Expandida",
        description: "Visualizaciones místicas para estados alterados de consciencia",
        duration: "6 semanas",
        level: "Avanzado",
        exercises: [
            {
                name: "Disolución en el Todo",
                icon: "∞",
                sets: 1,
                reps: "1 sesión",
                duration: 40,
                calories: 0,
                notes: "Experimenta la disolución de tu identidad separada en la unidad cósmica."
            },
            {
                name: "Activación del Tercer Ojo",
                icon: "👁️‍🗨️",
                sets: 1,
                reps: "3 ciclos",
                duration: 30,
                calories: 0,
                notes: "Abre y activa tu percepción extrasensorial y visión interior."
            },
            {
                name: "Consejo de Maestros Ascendidos",
                icon: "🌟",
                sets: 1,
                reps: "1 sesión",
                duration: 35,
                calories: 0,
                notes: "Asiste a un consejo de seres iluminados que te ofrecen sabiduría trascendental."
            },
            {
                name: "Viaje a la Fuente Original",
                icon: "✨",
                sets: 1,
                reps: "1 sesión",
                duration: 45,
                calories: 0,
                notes: "Regresa a la fuente de toda creación y recuerda tu verdadera naturaleza."
            },
            {
                name: "Merkaba de Luz",
                icon: "⭐",
                sets: 1,
                reps: "1 sesión",
                duration: 38,
                calories: 0,
                notes: "Activa tu vehículo de luz merkaba para viajar entre dimensiones."
            },
            {
                name: "Silencio Absoluto",
                icon: "🤫",
                sets: 1,
                reps: "1 sesión",
                duration: 50,
                calories: 0,
                notes: "Alcanza el estado de vacío mental completo donde todo es posible."
            },
            {
                name: "Integración Cósmica",
                icon: "🌌",
                sets: 1,
                reps: "1 sesión",
                duration: 42,
                calories: 0,
                notes: "Integra todas las experiencias y sabidurías en tu ser cotidiano."
            }
        ]
    }
};
