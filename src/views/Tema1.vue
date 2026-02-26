<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Auditoría interna de calidad
    p.mb-5(data-aos="fade-down") La auditoría interna de calidad es un proceso sistemático, independiente y documentado que permite evaluar el cumplimiento de los requisitos establecidos en el Sistema de Gestión de la Calidad de una organización. Su finalidad es determinar el grado en que se implementan y mantienen los criterios definidos, así como identificar oportunidades de mejora que fortalezcan la eficacia del sistema.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con los lineamientos de la Organización Internacional de Normalización (ISO), particularmente en la norma ISO 19011, la auditoría interna se fundamenta en principios como la integridad, la presentación imparcial, la debida diligencia profesional, la confidencialidad y el enfoque basado en la evidencia. Estos principios garantizan que el proceso sea objetivo, transparente y orientado a la mejora continua.
    .row.justify-content-center.mb-0
      .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") La auditoría interna no debe concebirse como un mecanismo de control punitivo, sino como una herramienta estratégica de gestión que permite verificar la conformidad, evaluar la eficacia de los procesos y apoyar la toma de decisiones basadas en información confiable.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Términos y definiciones
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
          h4.text-center Auditoría
          p Proceso sistemático, independiente y documentado para obtener evidencias y evaluarlas de manera objetiva con el fin de determinar el grado en que se cumplen los criterios de auditoría.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          h4.text-center Auditoría interna
          p Auditoría realizada por, o en nombre de, la propia organización para evaluar su Sistema de Gestión de la Calidad.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          h4.text-center Auditor
          p Persona que lleva a cabo una auditoría y que cumple con los requisitos de competencia, formación y experiencia establecidos para desempeñar dicha función.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Auditado
          p Organización, proceso o área que es objeto de la auditoría y cuyo sistema o actividades son evaluadas.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Cliente de la auditoría
          p Persona u organización que solicita la auditoría. Puede coincidir o no con el auditado.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          h4.text-center Criterios de auditoría
          p Conjunto de políticas, procedimientos, requisitos o normas utilizados como referencia frente a los cuales se compara la evidencia obtenida.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          h4.text-center Evidencia de auditoría
          p Registros, declaraciones de hechos o cualquier otra información verificable que sea pertinente para los criterios establecidos.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          h4.text-center Hallazgo de auditoría
          p Resultado de la evaluación de la evidencia recopilada frente a los criterios de auditoría, el cual puede indicar conformidad, no conformidad u oportunidad de mejora.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
          h4.text-center No conformidad
          p Incumplimiento de un requisito especificado en la norma o en el sistema de gestión de la organización.
    .row.justify-content-center.mb-0
      .col.col-lg-10.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") El dominio de estos términos permite interpretar adecuadamente los resultados del proceso de auditoría y garantizar una comunicación clara y técnica dentro del equipo auditor y la organización.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Responsables y organización de la auditoría
    p.mb-5(data-aos="fade-down") La adecuada organización de la auditoría interna de calidad garantiza su objetividad, independencia y eficacia. De acuerdo con las directrices establecidas en la ISO 19011 de la Organización Internacional de Normalización (ISO), la responsabilidad de la auditoría debe definirse claramente dentro del Sistema de Gestión de la Calidad.
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img12.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--C02.p-4.mb-3.py-3
          p(data-aos="fade-down") En primer lugar, la alta dirección debe asegurar que el programa de auditoría se planifique, implemente y mantenga, asignando los recursos necesarios para su desarrollo. Esta responsabilidad incluye la designación del equipo auditor y la aprobación del programa anual de auditorías.
        .row.justify-content-center
          .col.col-lg-10.order-lg-2.order-2
            p(data-aos="fade-down") El líder del equipo auditor es responsable de coordinar las actividades de la auditoría, definir el plan de auditoría, distribuir tareas entre los auditores y garantizar que el proceso se realice conforme a los criterios establecidos. Asimismo, debe asegurar una comunicación clara con el auditado antes, durante y después de la auditoría.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img13.svg', alt='Imagen decorativa')
        .row.justify-content-center
          .col.col-12.order-lg-1.order-2
            .cajon.cajon.C02.p-3
              p.mb-0(data-aos="fade-down") Los auditores, por su parte, deben actuar con imparcialidad, confidencialidad y competencia técnica, recopilando evidencias objetivas que respalden los hallazgos. Para preservar la independencia, no deben auditar actividades en las que tengan responsabilidad directa.
    p.mb-0(data-aos="fade-down") Una estructura organizativa clara y la definición precisa de roles permiten que la auditoría interna se desarrolle de manera sistemática, transparente y orientada al mejoramiento continuo.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Características y finalidad de la auditoría interna
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img14.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La auditoría interna de calidad es un proceso estratégico dentro del Sistema de Gestión de la Calidad, orientado a evaluar la conformidad, eficacia y mejora de los procesos organizacionales. Su desarrollo se fundamenta en principios establecidos por la Organización Internacional de Normalización (ISO), especialmente en la norma ISO 19011, que define directrices para garantizar la objetividad, transparencia y confiabilidad del proceso auditor.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") Más allá de ser un requisito normativo, la auditoría interna constituye una herramienta de gestión que permite analizar el desempeño organizacional, fortalecer el control interno y promover una cultura de mejora continua.
    .row.justify-content-center.mb-5
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.text-center.mb-0(data-aos="fade-down") La auditoría interna se distingue por las siguientes características:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img15.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Sistemática
            h5.t2.mb-2 Sistemática
            p.mb-0 Se desarrolla mediante un programa y un plan previamente definidos.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img16.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Independiente
            h5.t2.mb-2 Independiente
            p.mb-0 Los auditores deben actuar sin conflicto de interés ni responsabilidad directa sobre lo auditado.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img17.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Objetiva
            h5.t2.mb-2 Objetiva
            p.mb-0 Las conclusiones se basan en evidencias verificables y no en percepciones.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img18.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Documentada
            h5.t2.mb-2 Documentada
            p.mb-0 Cada etapa del proceso queda respaldada mediante registros formales.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img19.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Metódica y planificada
            h5.t2.mb-2 Metódica y planificada
            p.mb-0 Sigue fases estructuradas que garantizan coherencia y trazabilidad.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img20.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Basada en evidencia
            h5.t2.mb-2 Basada en evidencia
            p.mb-0 Los hallazgos se sustentan en información comprobable y suficiente.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-8.order-lg-2.order-1
        figure
          img(src='@/assets/curso/tema1/img21.png', alt='Imagen decorativa')
      .col.col-lg-8.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C01.p-4
              p(data-aos="fade-down") La auditoría interna cumple una función estratégica en la organización, ya que aporta información relevante para la toma de decisiones y el fortalecimiento del sistema de gestión. Su finalidad se orienta a:
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    ol.lista-ol--cuadro.lista-ol
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 1
                        | Verificar el cumplimiento de los requisitos establecidos en el sistema de gestión.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 2
                        | Evaluar la eficacia de los procesos y controles implementados.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 3
                        | Identificar no conformidades, riesgos y oportunidades de mejora.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 4
                        | Proporcionar información objetiva para la revisión por la dirección.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 5
                        | Impulsar el mejoramiento continuo y el logro de los objetivos estratégicos.
    .row.justify-content-center.mb-0
      .col.col-lg-7.col-12
        .tarjeta.tarjeta--C02.p-4
          p.mb-0(data-aos="fade-down") De esta manera, la auditoría interna se consolida como un mecanismo clave para asegurar la sostenibilidad, competitividad y confiabilidad de la organización.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
