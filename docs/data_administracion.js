const mallaAdministracion = [
    // Semestre 1
    { id: 'ADM-1011', nombre: 'Instituciones, Org. y Principios de Adm.', semestre: 1, horas: 6, prerequisitos: [] },
    { id: 'ADM-1012', nombre: 'Problemas Socioeconómicos Argentinos', semestre: 1, horas: 6, prerequisitos: [] },
    { id: 'ADM-1013', nombre: 'Matemática I', semestre: 1, horas: 8, prerequisitos: [] },
    // Semestre 2
    { id: 'ADM-1014', nombre: 'Economía I', semestre: 2, horas: 8, prerequisitos: ['ADM-1012', 'ADM-1013'] },
    { id: 'ADM-1015', nombre: 'Historia del Pensamiento Social y Político', semestre: 2, horas: 6, prerequisitos: ['ADM-1012'] },
    { id: 'ADM-1016', nombre: 'Contabilidad I', semestre: 2, horas: 8, prerequisitos: [] },
    // Semestre 3
    { id: 'ADM-1021', nombre: 'Economía II', semestre: 3, horas: 6, prerequisitos: ['ADM-1014'] },
    { id: 'ADM-1022', nombre: 'Derecho Constitucional y Administrativo', semestre: 3, horas: 3, prerequisitos: ['ADM-1015'] },
    { id: 'ADM-1023', nombre: 'Derecho Civil y Comercial', semestre: 3, horas: 3, prerequisitos: ['ADM-1015'] },
    { id: 'ADM-1024', nombre: 'Estadística I', semestre: 3, horas: 8, prerequisitos: ['ADM-1013'] },
    // Semestre 4
    { id: 'ADM-1025', nombre: 'Estructura Económica Arg. y Mundial', semestre: 4, horas: 6, prerequisitos: ['ADM-1021'] },
    { id: 'ADM-1026', nombre: 'Derecho Laboral I', semestre: 4, horas: 6, prerequisitos: ['ADM-1022'] },
    { id: 'ADM-1027', nombre: 'Matemática Financiera', semestre: 4, horas: 8, prerequisitos: ['ADM-1013'] },
    // Semestre 5
    { id: 'ADM-1131', nombre: 'Teoría de la Administración', semestre: 5, horas: 6, prerequisitos: ['ADM-1011'] },
    { id: 'ADM-1132', nombre: 'Teoría de las Instituciones y Org.', semestre: 5, horas: 6, prerequisitos: ['ADM-1011'] },
    { id: 'ADM-1133', nombre: 'Psicosociología de las Organizaciones', semestre: 5, horas: 6, prerequisitos: ['ADM-1011'] },
    { id: 'ADM-1134', nombre: 'Sistemas Administrativos', semestre: 5, horas: 6, prerequisitos: ['ADM-1011'] },
    // Semestre 6
    { id: 'ADM-1135', nombre: 'Organización Estatal y Políticas Públicas', semestre: 6, horas: 6, prerequisitos: ['ADM-1012'] },
    { id: 'ADM-1136', nombre: 'Estadística para Administradores', semestre: 6, horas: 8, prerequisitos: ['ADM-1024'] },
    // Semestre 7
    { id: 'ADM-1141', nombre: 'Administración Estratégica', semestre: 7, horas: 6, prerequisitos: ['ADM-1134'] },
    { id: 'ADM-1142', nombre: 'Administración Financiera', semestre: 7, horas: 8, prerequisitos: ['ADM-1027', 'ADM-1131'] },
    { id: 'ADM-1143', nombre: 'Administración de Personal', semestre: 7, horas: 6, prerequisitos: ['ADM-1131'] },
    // Semestre 8
    { id: 'ADM-1144', nombre: 'Tecnología de la Información', semestre: 8, horas: 6, prerequisitos: ['ADM-1131'] },
    { id: 'ADM-1145', nombre: 'Sistema Público de Adm. Fin. y Control', semestre: 8, horas: 6, prerequisitos: ['ADM-1135'] },
    { id: 'ADM-1146', nombre: 'Costos para la Toma de Decisiones', semestre: 8, horas: 8, prerequisitos: ['ADM-1016', 'ADM-1136'] },
    // Semestre 9
    { id: 'ADM-1151', nombre: 'Gestión de RRHH en el Sector Público', semestre: 9, horas: 6, prerequisitos: ['ADM-1135'] },
    { id: 'ADM-1152', nombre: 'Administración de la Producción', semestre: 9, horas: 6, prerequisitos: ['ADM-1016', 'ADM-1136'] },
    { id: 'ADM-1153', nombre: 'Form. y Eval. Econ. y Social de Proyectos', semestre: 9, horas: 8, prerequisitos: ['ADM-1027'] },
    // Semestre 10
    { id: 'ADM-1154', nombre: 'Comercialización', semestre: 10, horas: 6, prerequisitos: ['ADM-1141'] },
    { id: 'ADM-1155', nombre: 'Dirección y Gestión de Org. de la Econ. Social', semestre: 10, horas: 6, prerequisitos: ['ADM-1141'] },
    { id: 'ADM-1156', nombre: 'Administración de Empresas Públicas', semestre: 10, horas: 3, prerequisitos: ['ADM-1135'] },
    { id: 'ADM-1157', nombre: 'Taller de Análisis de Casos', semestre: 10, horas: 3, prerequisitos: ['ADM-1141', 'ADM-1142', 'ADM-1143'] },
    // Semestre 11 (Ciclo Formación Profesional)
    { id: 'ADM-1161', nombre: 'Idioma Optativo Nivel I', semestre: 11, horas: 3, prerequisitos: [] },
    { id: 'ADM-1162', nombre: 'Idioma Optativo Nivel II', semestre: 11, horas: 3, prerequisitos: ['ADM-1161'] },
    { id: 'ADM-1163', nombre: 'Seminario Taller Optativo', semestre: 11, horas: 3, prerequisitos: [] },
    { id: 'ADM-1164', nombre: 'Taller de Pasantía y Práctica Pre-profesional', semestre: 11, horas: 12, prerequisitos: ['ADM-1011', 'ADM-1012', 'ADM-1013', 'ADM-1014', 'ADM-1015', 'ADM-1016', 'ADM-1021', 'ADM-1022', 'ADM-1023', 'ADM-1024', 'ADM-1025', 'ADM-1026', 'ADM-1027'] }
];