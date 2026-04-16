import { addKeyword} from '@builderbot/bot';

export const flowHorariosCarreras = addKeyword(['horarios']).addAnswer(
    [
        '🕤 *Horarios Cursadas 2026*\n',

        '1️⃣ Aquí podes consultar el horario de las siguientes materias disponibles\n',
        '2️⃣ Si no ves todos los horarios, a la brevedad se irá actualizando\n',
        '3️⃣ Consultalo en: https://preinscripcion.unju.edu.ar/preinscripcion/alumnoscentral/\n',

    ])
        .addAnswer(['📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])