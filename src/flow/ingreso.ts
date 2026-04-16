import { addKeyword} from '@builderbot/bot';

export const flowIngreso = addKeyword(['ingreso']).addAnswer(
    [
        '🖥️ *Ingreso 2026*\n',

        'Te damos la Bienvenida a la Fcultad de Humanidades y Ciencias Sociales\n',

        '*¿CÓMO ME INSCRIBO POR PRIMERA VEZ?* \n',
        'Si sos ingresante y nunca te inscribiste en alguna carrera de nuestra Facultad, o de otra unidad académica de la Universidad Nacional de Jujuy (UNJu), tenes que preinscribirte a través del Sistema SIU Guaraní Preinscripción.\n',

        'Si ya sos alumno de esta Facultad o si te inscribiste alguna vez en otra carrera, tenes que ingresar con tu usuario y clave al Sistema SIU Guaraní Alumnos y preinscribirte desde la sección “Preinscripción a Propuestas”.\n',

        'La preinscripción es un trámite que se realiza únicamente de manera on line. Las preinscripciones para el Ingreso 2025 se encontrarán abiertas a partir del 8 de octubre de 2025.\n',

        '💻 *REQUISITOS DE INGRESO DE CARRERAS DE GRADO*\n',
        '✔ _Requisitos Obligatorios_\n',

        '1️⃣ Documento Nacional de Identidad (original)\n',
        '2️⃣ Título Secundario (original) o Constancia de Título en Trámite (original): Los títulos extranjeros deberán estar debidamente legalizados y convalidados (consultar en Dirección Alumnos)\n',
        '3️⃣ Formulario de Pre-inscripción: https://preinscripcion.unju.edu.ar/preinscripcion/alumnoscentral/\n',

        '❗ Importante: La documentación a presentar debe ser original, no deben llevar fotocopias, ya que el personal verifica la documentación, la escanea y la devuelve en el momento.\n',

        '❗ Los aspirantes que adeuden materias del nivel medio serán inscriptos provisoriamente. Por Resolución C.S. N°20/15, se establece hasta el 31 de mayo de cada año de ingreso, la aprobación de las materias adeudadas, fecha límite para efectivizar la inscripción definitiva.\n',

        'Para más información: https://www.fhycs.unju.edu.ar/ingreso/index.html\n',
        'Si queres saber nuestras Carreras de Grado, escribí *Carrera* \n',

    ]).addAnswer(['💻 *REQUISITOS DE INGRESO DE POSGRADO*\n',
        '*Ingresa en:* https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_carreras.php \n',
        'Si queres saber nuestras Carreras de Grado, escribí *Posgrado*'])
        
    .addAnswer(['📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])