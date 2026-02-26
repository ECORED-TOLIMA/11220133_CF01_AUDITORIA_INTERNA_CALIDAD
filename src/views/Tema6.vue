<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Fases de la auditoría interna
    .row.justify-content-center.align-items-center.mb-lg-3
      .col.col-lg-10.order-lg-2.order-2
        p(data-aos="fade-down") La auditoría interna de calidad se desarrolla siguiendo una secuencia estructurada de fases, cada una con actividades específicas que garantizan la objetividad, la sistematicidad y la efectividad del proceso. Estas fases permiten planear, ejecutar y dar seguimiento a la auditoría de manera organizada, asegurando que se cumplan los objetivos del Sistema de Gestión de la Calidad y que se identifiquen oportunidades de mejora.
        p.mb-0(data-aos="fade-down") A continuación, se presentan las fases de la auditoría interna y sus principales componentes:
      .col.col-lg-2.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/img01.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Fases de la auditoría interna
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema6/img02.svg', alt='En la figura 1 se presenta un esquema del flujo de una auditoría interna, definiendo las fases de inicio, preparación, ejecución y, documentos y seguimiento.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema6/img03.svg', alt='En la figura 1 se presenta un esquema del flujo de una auditoría interna, definiendo las fases de inicio, preparación, ejecución y, documentos y seguimiento.')
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Inicio de la auditoría
    p(data-aos="fade-down") La fase de inicio de la auditoría marca el comienzo formal del proceso y establece las bases para que la auditoría se desarrolle de manera organizada, objetiva y sistemática. Durante esta etapa, se realizan actividades de preauditoría, se definen los objetivos y se determina el alcance de la auditoría, asegurando que todos los involucrados comprendan claramente el propósito y los límites del proceso.
    p.mb-5(data-aos="fade-down") Actividades principales del inicio de la auditoría:
    .cajon.cajon.C03.p-5.mb-5
      SlyderB(:datos="datosSlyder")
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p(data-aos="fade-down") Esta fase permite que el equipo auditor se prepare de manera adecuada y que el auditado comprenda el proceso, generando un ambiente de cooperación y transparencia desde el inicio de la auditoría.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema6/img07.svg', alt='Imagen decorativa')
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Preparación de la auditoría
    p(data-aos="fade-down") La fase de preparación de la auditoría asegura que el proceso se realice de manera organizada y eficiente, proporcionando al equipo auditor los elementos necesarios para evaluar el Sistema de Gestión de la Calidad de forma objetiva y sistemática. Esta etapa permite planificar las actividades, asignar responsabilidades y definir los documentos y herramientas que guiarán la auditoría.
    p.mb-5(data-aos="fade-down") Actividades principales de la preparación:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema6/img08.svg", alt="alt").img130.m-auto
          h4.text-center Elaboración del plan de auditoría
          p.mb-0 Definición detallada de los objetivos, criterios, alcance, responsables, fechas, recursos y actividades a desarrollar durante la auditoría.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema6/img09.svg", alt="alt").img130.m-auto
          h4.text-center Asignación del equipo auditor
          p.mb-0 Selección de los auditores según sus competencias, conocimientos, experiencia y perfil, asegurando imparcialidad y objetividad.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema6/img10.svg", alt="alt").img130.m-auto
          h4.text-center Preparación de documentos de trabajo
          p.mb-0 Recopilación de listas de verificación, formatos de registro de hallazgos, procedimientos, políticas y cualquier otra documentación relevante que respalde la auditoría.
    p.mb-0(data-aos="fade-down") La adecuada preparación garantiza que el equipo auditor conozca el contexto, los procesos y los requisitos aplicables, facilitando una ejecución ordenada y efectiva. Además, permite al auditado estar informado sobre el proceso y sus responsabilidades, promoviendo colaboración y transparencia.
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Ejecución de la auditoría
    p(data-aos="fade-down") La fase de ejecución de la auditoría es el corazón del proceso, donde se verifican los procesos, se recopilan evidencias y se analizan las operaciones para determinar el grado de cumplimiento del Sistema de Gestión de la Calidad (SGC). Esta etapa permite identificar hallazgos, no conformidades y oportunidades de mejora, garantizando que la auditoría sea objetiva, sistemática y basada en evidencia.
    p.mb-5(data-aos="fade-down") Actividades principales durante la ejecución:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.p-4
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Reunión de apertura
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Presentación del equipo auditor a los auditados.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Confirmación de los objetivos, alcance y criterios de la auditoría.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Aclaración de dudas y establecimiento de canales de comunicación.
              .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema6/img11.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Recolección de evidencias
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Observación directa de procesos y actividades.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Entrevistas con responsables y colaboradores.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Revisión documental, registros y procedimientos.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Registro sistemático de hallazgos y evidencias objetivas.
              .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema6/img12.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Observaciones de la auditoría
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Análisis de la información recopilada.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Identificación de conformidades y no conformidades.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Evaluación de oportunidades de mejora y prácticas destacadas
              .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema6/img13.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Reunión de cierre
                ul.lista-ul.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Presentación preliminar de hallazgos al auditado.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Discusión de hallazgos y aclaración de dudas.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Confirmación de los pasos siguientes, incluyendo el seguimiento de acciones correctivas.
              .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/tema6/img14.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Esta fase requiere que los auditores actúen con ética, imparcialidad y profesionalismo, evitando juicios subjetivos y garantizando que todas las conclusiones se basen en evidencia verificable. Una ejecución cuidadosa asegura que el informe de auditoría refleje con precisión el estado del SGC y apoye la mejora continua de la organización.
    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Documentos y seguimiento
    p(data-aos="fade-down") La fase de documentos y seguimiento asegura que los resultados de la auditoría sean registrados, comunicados y gestionados de manera efectiva, permitiendo dar continuidad al proceso y garantizar la mejora continua del Sistema de Gestión de la Calidad (SGC). Esta etapa consolida toda la información recopilada y establece los mecanismos para dar seguimiento a las acciones correctivas y preventivas derivadas de la auditoría.
    p.mb-5(data-aos="fade-down") Actividades principales:
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C04")
          .row(titulo="Preparación del informe de auditoría")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Redacción clara y objetiva de los hallazgos, no conformidades y oportunidades de mejora.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Inclusión de evidencias que respalden cada hallazgo.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Elaboración de conclusiones y recomendaciones para la mejora del SGC.
          .row(titulo="Distribución del informe")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Entrega del informe a la alta dirección y responsables de los procesos auditados.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Comunicación transparente que permita la toma de decisiones basada en evidencia.
          .row(titulo="Retención de expedientes")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Archivo de la documentación de la auditoría según los procedimientos de gestión documental de la organización.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Garantía de trazabilidad y disponibilidad de información para auditorías futuras o revisiones externas.
          .row(titulo="Determinación y seguimiento de acciones correctivas")
            .col-12.mb-0.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Planifica Planificación de acciones correctivas y preventivas frente a los hallazgos identificados.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Establecimiento de plazos de seguimiento, normalmente cada 30, 60 o 90 días según la criticidad de la no conformidad.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Monitoreo del cumplimiento de las acciones y verificación de su efectividad.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Retroalimentación al equipo auditor y a la organización sobre los resultados de seguimiento.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/img15.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Esta fase es fundamental para cerrar el ciclo de la auditoría, asegurando que los hallazgos generen valor real a la organización y contribuyan al fortalecimiento del Sistema de Gestión de la Calidad mediante la mejora continua.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Análisis general (preauditoría)',
        texto:
          'Revisión de la información del sistema de gestión de calidad, antecedentes de auditorías anteriores y documentación relevante para identificar posibles áreas de riesgo o enfoque prioritario.',
        imagen: require('@/assets/curso/tema6/img04.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Definición de objetivos',
        texto:
          'Establecer qué se pretende lograr con la auditoría, por ejemplo, evaluar la conformidad del sistema, verificar la eficacia de los procesos o identificar oportunidades de mejora.',
        imagen: require('@/assets/curso/tema6/img05.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Determinación del alcance',
        texto:
          'Delimitar los procesos, áreas o actividades que serán auditadas, así como los criterios aplicables, asegurando que la auditoría cubra todos los aspectos críticos del sistema de gestión de calidad.',
        imagen: require('@/assets/curso/tema6/img06.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
