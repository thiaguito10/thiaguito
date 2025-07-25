const mallaLaboratorio = [
    // 1er cuatrimestre
    { id: 'LAB-1', nombre: 'Introducción a la Biotecnología y a los Laboratorios', semestre: 1, horas: 4, prerequisitos: [] },
    { id: 'LAB-2', nombre: 'Matemática I', semestre: 1, horas: 4, prerequisitos: [] },
    { id: 'LAB-3', nombre: 'Biología general', semestre: 1, horas: 5, prerequisitos: [] },
    { id: 'LAB-4', nombre: 'Introducción a la química', semestre: 1, horas: 2, prerequisitos: [] },
    // 2do cuatrimestre
    { id: 'LAB-5', nombre: 'Química General e Inorgánica', semestre: 2, horas: 4, prerequisitos: ['LAB-4'] },
    { id: 'LAB-6', nombre: 'Laboratorio de Análisis Ambiental', semestre: 2, horas: 4, prerequisitos: ['LAB-4','LAB-2'] },
    { id: 'LAB-7', nombre: 'Matemática II', semestre: 2, horas: 4, prerequisitos: ['LAB-2'] },
    { id: 'LAB-8', nombre: 'Higiene y Seguridad', semestre: 2, horas: 2, prerequisitos: ['LAB-4'] },
    { id: 'LAB-9', nombre: 'Nuevos Entornos y Lenguajes', semestre: 2, horas: 2, prerequisitos: [] },
    { id: 'LAB-10', nombre: 'Inglés I', semestre: 2, horas: 2, prerequisitos: [] },
    // 3er cuatrimestre
    { id: 'LAB-11', nombre: 'Microbiología general', semestre: 3, horas: 6, prerequisitos: ['LAB-3','LAB-5','LAB-6'] },
    { id: 'LAB-12', nombre: 'Química Orgánica', semestre: 3, horas: 6, prerequisitos: ['LAB-5'] },
    { id: 'LAB-13', nombre: 'Física', semestre: 3, horas: 5, prerequisitos: ['LAB-7'] },
     // 4to cuatrimestre
    { id: 'LAB-14', nombre: 'Asignatura Unahur I', semestre: 4, horas: 2, prerequisitos: [] },
    { id: 'LAB-15', nombre: 'Laboratorio de Química Instrumental y Analítica', semestre: 4, horas: 4, prerequisitos: ['LAB-5', 'LAB-17'] },
    { id: 'LAB-16', nombre: 'Gestión de la Calidad', semestre: 4, horas: 4, prerequisitos: ['LAB-8'] },
    { id: 'LAB-17', nombre: 'Bioquímica I', semestre: 4, horas: 6, prerequisitos: ['LAB-12'] },
    // 5to cuatrimestre
    { id: 'LAB-18', nombre: 'Laboratorio de Análisis de Alimentos, Medicamentos y Cosméticos', semestre: 5, horas: 4, prerequisitos: ['LAB-11', 'LAB-16'] },
    { id: 'LAB-19', nombre: 'Introducción a la Biología Celular y Molecular', semestre: 5, horas: 5, prerequisitos: ['LAB-17'] },
    { id: 'LAB-20', nombre: 'Laboratorio de Técnicas Inmunológicas y de Biología molecular', semestre: 5, horas: 4, prerequisitos: ['LAB-17'] },
    { id: 'LAB-21', nombre: 'Laboratorio de Análisis Clínicos', semestre: 5, horas: 4, prerequisitos: ['LAB-15', 'LAB-16'] },
    { id: 'LAB-22', nombre: 'Laboratorio de Producción Vegetal', semestre: 5, horas: 4, prerequisitos: ['LAB-11'] }
];