import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowEspecializacionEnEducacionPromocionDeLaSalud = addKeyword(['12']).addAnswer([
    '📄 *Especialización en Educación y Promoción de la Salud*',

    '\n📅 *DURACION*',
    'Un (1) año y medio organizado en Tres (3) cuatrimestres de cursado, que se complementará con la elaboración y presentación del Trabajo Final Integrador (TFI).',

    '\n📚 *PLAN DE ESTUDIO*',
    'El plan de estudios es semi estructurado. Está integrado por 6 asignaturas correspondientes a un Ciclo formativo obligatorio, 3 asignaturas electivas integradas al Ciclo orientado y el cursado de un ciclo metodológico con el Taller de Trabajo Final Integrador, orientado a la formación práctica territorial.',

    '\n*_Estructura por ciclos- materias_*',
    '*I CICLO OBLIGATORIO*',
    '_Estructurado en 6 (seis) seminarios obligatorios_',
    '\nPensamiento latinoamericano y perspectivas en Educación para la Salud',
    'Derechos humanos, salud e interseccionalidades',
    'Salud, cultura y diversidades',
    'Pedagogías críticas latinoamericanas y Educación para la Salud',
    'Teoría y Metodología en abordaje integral territorial en Educación y Promoción de la Salud',
    'Planificación, gestión y evaluación de políticas públicas en Promoción de la Salud',

    '\n*II CICLO ORIENTADO*',
    '_Ciclo de formación orientada constituido por una currícula abierta._',
    '\nSalud mental: políticas y prácticas de  abordaje integral',
    'Políticas en salud y derechos en infancias y juventudes',
    'Demografía, abordaje poblacional y territorial en salud',
    'Salud ambiental y Desarrollo sustentable',
    'Inclusión y salud',
    'Comunicación y Tecnologías de la Información en Salud',

    '\n*III CICLO METODOLOGICO*',
    '_Ciclo de formación obligatorio, constituido por una actividad curricular de formato Taller._',
    '\nTaller Trabajo Final Integrador',


    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=175',

]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '12EspEduPromSalud.pdf')
})
.addAnswer(`TRIFOLIO de la carrera en PDF`, {
    media: join(process.cwd(), 'assets', '12EspEduPromSalud.pdf')
})