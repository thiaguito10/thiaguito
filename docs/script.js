document.addEventListener('DOMContentLoaded', () => {

    // Objeto que mapea el nombre de la carrera con su variable de datos y nombre completo
    const carreras = {
        administracion: { data: mallaAdministracion, nombre: 'Lic. en Administración (UNM)' },
        laboratorio: { data: mallaLaboratorio, nombre: 'Tec. en Laboratorios (UNAHUR)' },
        abogacia: { data: mallaAbogacia, nombre: 'Abogacía (UNO)' },
        biotecnologia: { data: mallaBiotecnologia, nombre: 'Lic. en Biotecnología (UNAHUR)' }
    };

    // --- VARIABLES Y ELEMENTOS DEL DOM ---
    const h1Titulo = document.querySelector('header h1');
    const mallaContainer = document.getElementById('malla-container');
    const creditosAprobadosEl = document.getElementById('horas-aprobadas');
    const porcentajeCarreraEl = document.getElementById('porcentaje-carrera');
    const carreraProgressBarEl = document.getElementById('carrera-progress-bar');
    const resetButton = document.getElementById('reset-button');
    
    // Variables que guardarán el estado de la carrera activa
    let mallaDataActual = [];
    let ramosAprobados = [];

    /**
     * Carga y renderiza la malla de una carrera específica.
     * @param {string} nombreCarrera - La clave de la carrera (ej: 'administracion').
     */
    function cargarCarrera(nombreCarrera) {
        mallaDataActual = carreras[nombreCarrera].data;
        h1Titulo.textContent = carreras[nombreCarrera].nombre;
        cargarProgreso(nombreCarrera);
        renderMalla();
    }

    /**
     * Dibuja la malla de la carrera activa en la página.
     */
    function renderMalla() {
        mallaContainer.innerHTML = '';
        if (!mallaDataActual) return;

        const maxSemestre = Math.max(...mallaDataActual.map(r => r.semestre));

        for (let i = 1; i <= maxSemestre; i++) {
            const semestreContainer = document.createElement('div');
            semestreContainer.className = 'semestre-container';
            const semestreHeader = document.createElement('div');
            semestreHeader.className = 'semestre-header';
            semestreHeader.textContent = `Cuatrimestre ${i}`;
            semestreContainer.appendChild(semestreHeader);

            mallaDataActual.filter(r => r.semestre === i).forEach(ramo => {
                if (ramo.esTitulo) {
                    const tituloEl = document.createElement('div');
                    tituloEl.className = 'titulo-intermedio';
                    tituloEl.textContent = ramo.nombre;
                    semestreContainer.appendChild(tituloEl);
                } else {
                    const ramoEl = document.createElement('div');
                    ramoEl.className = 'ramo';
                    ramoEl.dataset.id = ramo.id;
                    ramoEl.innerHTML = `<div class="ramo-nombre">${ramo.nombre}</div><div class="ramo-info">${ramo.horas} hs | ID: ${ramo.id}</div>`;
                    ramoEl.addEventListener('click', () => onRamoClick(ramo.id));
                    semestreContainer.appendChild(ramoEl);
                }
            });
            mallaContainer.appendChild(semestreContainer);
        }
        actualizarEstadoRamos();
    }

    /**
     * Maneja el clic en una materia para aprobarla o desaprobarla.
     */
    function onRamoClick(ramoId) {
        const yaAprobado = ramosAprobados.includes(ramoId);
        const puedeCursar = verificarPrerequisitos(ramoId);

        if (yaAprobado) {
            ramosAprobados = ramosAprobados.filter(id => id !== ramoId);
        } else if (puedeCursar) {
            ramosAprobados.push(ramoId);
        } else {
            const ramoEl = document.querySelector(`.ramo[data-id='${ramoId}']`);
            if (ramoEl) {
                ramoEl.classList.add('shake-animation');
                setTimeout(() => ramoEl.classList.remove('shake-animation'), 500);
            }
        }
        actualizarEstadoRamos();
    }

    /**
     * Verifica si se cumplen los prerrequisitos para cursar una materia.
     */
    function verificarPrerequisitos(ramoId) {
        const ramo = mallaDataActual.find(r => r.id === ramoId);
        if (!ramo || !ramo.prerequisitos || ramo.prerequisitos.length === 0) return true;
        return ramo.prerequisitos.every(prereqId => ramosAprobados.includes(prereqId));
    }

    /**
     * Actualiza la apariencia de las materias y los contadores de progreso.
     */
    function actualizarEstadoRamos() {
        let totalHoras = 0;
        if (!mallaDataActual) return;

        mallaDataActual.forEach(ramo => {
            if (ramo.esTitulo) return; // Saltea los elementos de título
            const ramoEl = document.querySelector(`.ramo[data-id='${ramo.id}']`);
            if (!ramoEl) return;
            ramoEl.classList.remove('aprobado', 'bloqueado');
            if (ramosAprobados.includes(ramo.id)) {
                ramoEl.classList.add('aprobado');
                totalHoras += ramo.horas;
            } else if (!verificarPrerequisitos(ramo.id)) {
                ramoEl.classList.add('bloqueado');
            }
        });

        creditosAprobadosEl.textContent = totalHoras;
        const totalMaterias = mallaDataActual.filter(r => !r.esTitulo).length; // No contar los títulos para el porcentaje
        const materiasAprobadas = ramosAprobados.length;
        const porcentaje = totalMaterias > 0 ? (materiasAprobadas / totalMaterias) * 100 : 0;
        
        porcentajeCarreraEl.textContent = porcentaje.toFixed(1);
        carreraProgressBarEl.style.width = `${porcentaje}%`;
        carreraProgressBarEl.textContent = `${porcentaje.toFixed(0)}%`;

        const nombreCarreraActiva = Object.keys(carreras).find(key => carreras[key].data === mallaDataActual);
        guardarProgreso(nombreCarreraActiva);
    }
    
    /**
     * Guarda el progreso de la carrera especificada en la memoria del navegador.
     */
    function guardarProgreso(nombreCarrera) {
        if (!nombreCarrera) return;
        localStorage.setItem(`progreso_${nombreCarrera}`, JSON.stringify(ramosAprobados));
    }

    /**
     * Carga el progreso guardado de la carrera especificada.
     */
    function cargarProgreso(nombreCarrera) {
        const progresoGuardado = localStorage.getItem(`progreso_${nombreCarrera}`);
        ramosAprobados = progresoGuardado ? JSON.parse(progresoGuardado) : [];
    }

    // --- INICIALIZACIÓN ---

    // Evento para el botón de reiniciar
    resetButton.addEventListener('click', () => {
        const nombreCarreraActiva = Object.keys(carreras).find(key => carreras[key].data === mallaDataActual)?.nombre || "esta carrera";
        if (confirm(`¿Estás seguro de que querés borrar el progreso de ${nombreCarreraActiva}?`)) {
            ramosAprobados = [];
            actualizarEstadoRamos();
        }
    });

    // Lee el parámetro 'carrera' de la URL para saber qué malla mostrar
    const params = new URLSearchParams(window.location.search);
    const carreraSeleccionada = params.get('carrera');

    // Carga la carrera que viene en la URL, o 'administracion' como opción por defecto
    if (carreraSeleccionada && carreras[carreraSeleccionada]) {
        cargarCarrera(carreraSeleccionada);
    } else {
        cargarCarrera('administracion');
    }
});