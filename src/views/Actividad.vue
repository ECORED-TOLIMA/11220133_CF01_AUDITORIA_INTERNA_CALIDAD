<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, fases, tipos de auditoría, competencias del auditor y herramientas de planificación, asegurando que los aprendices puedan identificar y aplicar de manera correcta los elementos clave de la auditoría interna de calidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de una auditoría interna de calidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la decoración de la oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar el cumplimiento del Sistema de Gestión de la Calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Controlar el horario de los empleados dentro de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Auditar únicamente al departamento de compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,
          texto:
            '¿Cuál norma establece los requisitos del Sistema de Gestión de la Calidad, sobre los cuales se basan las auditorías internas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'ISO 14001.', esCorrecta: false },
            { id: 'b', texto: 'ISO 45001.', esCorrecta: false },
            { id: 'c', texto: 'ISO 9001.', esCorrecta: true },
            { id: 'd', texto: 'ISO 31000.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,
          texto: '¿Cuál de las siguientes es una fase de la auditoría interna?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Planeación de vacaciones.', esCorrecta: false },
            { id: 'b', texto: 'Ejecución de la auditoría.', esCorrecta: true },
            { id: 'c', texto: 'Inventario de oficinas.', esCorrecta: false },
            { id: 'd', texto: 'Contratación de personal.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,
          texto: 'El ciclo PHVA significa:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planear, Hacer, Verificar, Actuar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Programar, Homologar, Validar, Ajustar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Probar, Hacer, Validar, Actuar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planificar, Hablar, Verificar, Alinear.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,
          texto: '¿Quién lidera un equipo auditor?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El gerente de compras.', esCorrecta: false },
            { id: 'b', texto: 'El recepcionista.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Un auditor externo sin experiencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El líder del equipo auditor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,
          texto: '¿Cuál es un criterio de auditoría?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preferencia personal del auditor.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Opinión de un compañero.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Requisitos de normas y procedimientos.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Inventario de materiales.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,
          texto:
            '¿Cuál de estos no es un tipo de auditoría según su propósito?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'De entretenimiento.', esCorrecta: true },
            { id: 'b', texto: 'De conformidad.', esCorrecta: false },
            { id: 'c', texto: 'De mejora.', esCorrecta: false },
            { id: 'd', texto: 'De seguimiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,
          texto: 'La recolección de evidencias se realiza mediante:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Redes sociales y rumores.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Encuestas de satisfacción no oficiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo fotos del lugar de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Observación, entrevistas y revisión documental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,
          texto: '¿Qué documento resume los hallazgos de la auditoría?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Informe de auditoría.', esCorrecta: true },
            { id: 'b', texto: 'Agenda de reuniones.', esCorrecta: false },
            { id: 'c', texto: 'Hoja de asistencia.', esCorrecta: false },
            { id: 'd', texto: 'Manual de bienvenida.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,
          texto: 'Una función del auditor interno es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dar instrucciones de diseño gráfico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planificar y ejecutar la auditoría.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Controlar la cafetería.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Seleccionar proveedores personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 11,
          texto: '¿Qué se evalúa en la selección de auditores internos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conocimientos, habilidades, ética y experiencia.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Color de la camisa.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Cantidad de café consumido.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Preferencias musicales.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,
          texto:
            '¿Qué herramienta se utiliza para guiar la revisión de procesos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Agenda de cumpleaños.', esCorrecta: false },
            { id: 'b', texto: 'Manual de cocina.', esCorrecta: false },
            { id: 'c', texto: 'Lista de verificación.', esCorrecta: true },
            { id: 'd', texto: 'Calendario de vacaciones.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La planificación de la auditoría incluye:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programa de auditoría y plan de auditoría.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Compra de suministros.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Revisión de notas de reuniones sociales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Decoración de la sala.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto: 'La modalidad de auditoría puede ser:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo presencial.', esCorrecta: false },
            { id: 'b', texto: 'Solo virtual.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Presencial, virtual o híbrida.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Solo en videojuegos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto: 'El protocolo de auditoría establece:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pautas, cronograma y normas de conducta.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Cantidad de café diario.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Horario de descanso del personal.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Manual de decoración.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto: 'Una responsabilidad ética del auditor es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contar historias personales durante la auditoría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interrumpir a los auditados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Ignorar hallazgos menores.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Mantener confidencialidad y objetividad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto: 'El informe de auditoría se utiliza para:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La revisión por la dirección y seguimiento de acciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicar en redes sociales los resultados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Comparar a los empleados.', esCorrecta: false },
            { id: 'd', texto: 'Decorar la oficina.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto:
            '¿Qué norma complementa la ISO 9001 en directrices de auditoría?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'ISO 45001.', esCorrecta: false },
            { id: 'b', texto: 'ISO 19011.', esCorrecta: true },
            { id: 'c', texto: 'ISO 14001.', esCorrecta: false },
            { id: 'd', texto: 'ISO 50001.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto: 'Entre las funciones del líder del equipo auditor está:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Coordinar y supervisar al equipo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Planificar vacaciones del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar el clima de la oficina.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Decorar salas de reunión.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos de auditoría interna y de los procesos, fases y competencias relacionadas con el Sistema de Gestión de la Calidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto: 'Una fase de seguimiento de la auditoría incluye:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomar fotografías de la oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reuniones sociales con el personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar almuerzos de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificar efectividad de acciones correctivas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
          mensaje_incorrecto:
            'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
