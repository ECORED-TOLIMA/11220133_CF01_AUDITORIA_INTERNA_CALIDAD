<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Principios fundamentales de las normas ISO 9000, ISO 9001 e ISO 19011
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las normas ISO 9000, ISO 9001 y ISO 19011 constituyen el marco de referencia para la implementación y evaluación de los sistemas de gestión de la calidad. Estas normas establecen los fundamentos conceptuales, los requisitos y las directrices necesarias para garantizar que las organizaciones gestionen sus procesos de manera eficaz, coherente y orientada a la mejora continua.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img02.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") La ISO 9000 presenta los principios y conceptos básicos que sustentan la gestión de la calidad. La ISO 9001 define los requisitos que deben cumplirse para demostrar la capacidad de proporcionar productos y servicios conformes. Por su parte, la ISO 19011 proporciona orientación para la planificación, ejecución y seguimiento de auditorías internas y externas.
        p(data-aos="fade-down") El estudio integrado de estas normas permite comprender la relación entre gestión, control y evaluación, elementos esenciales para fortalecer la cultura organizacional y asegurar el cumplimiento de los objetivos estratégicos.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Principios de la gestión de la calidad
    p(data-aos="fade-down") Los principios de la gestión de la calidad, establecidos en la ISO 9000, constituyen la base conceptual sobre la cual se estructuran los sistemas de gestión y los requisitos definidos en la ISO 9001. Estos principios orientan la toma de decisiones, la planificación estratégica y la mejora continua en las organizaciones.
    p.mb-5(data-aos="fade-down") Los siete principios de la gestión de la calidad son:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img03.svg' alt='AvatarTop')
          h4.text-center Enfoque al cliente
          p La organización comprende y satisface las necesidades actuales y futuras de los clientes, buscando superar sus expectativas.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          h4.text-center Liderazgo
          p La alta dirección establece unidad de propósito, dirección estratégica y condiciones adecuadas para el logro de los objetivos.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
          h4.text-center Compromiso de las personas
          p El personal competente, empoderado y comprometido es esencial para generar valor y mejorar el desempeño organizacional.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
          h4.text-center Enfoque basado en procesos
          p Los resultados coherentes y previsibles se alcanzan cuando las actividades se gestionan como procesos interrelacionados.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img07.svg' alt='AvatarTop')
          h4.text-center Mejora
          p La organización mantiene un enfoque permanente hacia la mejora continua de sus procesos y resultados.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
          h4.text-center Toma de decisiones basada en la evidencia
          p Las decisiones eficaces se fundamentan en el análisis y evaluación de datos e información confiable.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img09.svg' alt='AvatarTop')
          h4.text-center Gestión de las relaciones
          p La organización gestiona sus relaciones con partes interesadas relevantes, como proveedores y aliados estratégicos, para optimizar el desempeño sostenible.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") Estos principios no solo sustentan el diseño e implementación del Sistema de Gestión de la Calidad, sino que también orientan el desarrollo y evaluación de las auditorías internas como herramienta para la mejora continua.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Modelo de gestión bajo la serie ISO 9000
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-5.col-md-7.col-8.order-lg-2.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img10.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p(data-aos="fade-down") El modelo de gestión bajo la serie ISO 9000 surge como respuesta a la necesidad de establecer criterios internacionales unificados para asegurar la calidad en productos y servicios. Estas normas son publicadas por la International Organization for Standardization, organismo creado en 1947 con el propósito de promover la estandarización a nivel mundial.
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") En sus primeras versiones, las normas ISO 9000 se enfocan principalmente en el aseguramiento de la calidad mediante procedimientos documentados. Con el tiempo, especialmente a partir de la versión del año 2000, el modelo evoluciona hacia un enfoque basado en procesos, integrando la mejora continua, el liderazgo y la satisfacción del cliente como ejes centrales. Posteriormente, la versión 2015 incorpora el pensamiento basado en riesgos y una estructura de alto nivel que facilita la integración con otros sistemas de gestión.
    .row.justify-content-center.mb-5
      .col.col-lg-6.col-12
        p.text-center.mb-0(data-aos="fade-down") El modelo de gestión bajo la serie ISO 9000 se fundamenta en:
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | La gestión por procesos interrelacionados.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | El enfoque al cliente como principio orientador.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | La aplicación del ciclo PHVA como herramienta de mejora.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | La toma de decisiones basada en evidencia.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | La gestión de riesgos y oportunidades.
      .col-lg-5.col-8.col-md-7.order-lg-1.order-1
        figure
          img(src='@/assets/curso/tema3/img11.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Este modelo no solo define requisitos, como lo hace la ISO 9001, sino que proporciona un marco conceptual que orienta la planificación, implementación, evaluación y mejora del Sistema de Gestión de la Calidad, constituyéndose en referente internacional para la auditoría interna y externa.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Directrices de la norma ISO 9001
    p.mb-5(data-aos="fade-down") La ISO 9001 establece los requisitos que debe cumplir una organización para implementar, mantener y mejorar continuamente un Sistema de Gestión de la Calidad. Su estructura responde al enfoque basado en procesos, al pensamiento basado en riesgos y al ciclo PHVA, garantizando coherencia entre planificación, operación, evaluación y mejora.
    .col.col-12.mb-5
      figure
        img(src='@/assets/curso/tema3/img12.png', alt='Imagen decorativa')
    p(data-aos="fade-down") Desde la perspectiva de la auditoría interna, esta norma constituye el principal criterio de auditoría, ya que el auditor evalúa el grado de conformidad del sistema frente a cada uno de sus requisitos.
    p.mb-5(data-aos="fade-down") A continuación, se presenta una síntesis estructurada de sus capítulos certificables:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Requisitos de la ISO 9001 y su relación con la auditoría interna
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Capítulo
                th(data-aos="fade-down")(style= "width: 35%") Contenido central
                th(data-aos="fade-down")(style= "width: 35%") Relación con la auditoría interna
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Capítulo 4. Contexto de la organización.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Comprensión de factores internos y externos, partes interesadas y alcance del SGC.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El auditor verifica si el sistema está alineado con el entorno estratégico y si el alcance está correctamente definido.
              tr
                td(data-aos="fade-down") Capítulo 5. Liderazgo.
                td(data-aos="fade-down") Política de calidad, roles, responsabilidades y compromiso de la alta dirección.
                td(data-aos="fade-down") Se evalúa la coherencia entre la política, los objetivos y la evidencia del liderazgo activo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Capítulo 6. Planificación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificación de riesgos y oportunidades, objetivos de calidad y planificación de cambios.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El auditor analiza cómo la organización gestiona riesgos y si los objetivos son medibles y coherentes.
              tr
                td(data-aos="fade-down") Capítulo 7. Apoyo.
                td(data-aos="fade-down") Recursos, competencia, toma de conciencia, comunicación e información documentada.
                td(data-aos="fade-down") Se revisa la competencia del personal, la gestión documental y la disponibilidad de recursos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Capítulo 8. Operación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Planificación y control operacional, diseño, producción y control de proveedores.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se verifica la ejecución controlada de los procesos y el cumplimiento de requisitos del cliente.
              tr
                td(data-aos="fade-down") Capítulo 9. Evaluación del desempeño.
                td(data-aos="fade-down") Seguimiento, medición, análisis, auditoría interna y revisión por la dirección.
                td(data-aos="fade-down") Se analiza la eficacia del sistema mediante indicadores, auditorías y revisión directiva.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Capítulo 10. Mejora.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") No conformidades, acciones correctivas y mejora continua.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se evalúa la gestión de hallazgos y la implementación efectiva de acciones de mejora.
    .row.justify-content-center.mb-0
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-10(data-aos="flip-up")
              img(src='@/assets/curso/tema3/img13.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C05.px-5.py-3
            .p-4
              p.mb-0 Es importante señalar que la norma no solo exige cumplimiento documental, sino evidencia objetiva de que el sistema es eficaz. Por ello, la auditoría interna se convierte en un mecanismo esencial para verificar la aplicación real de los requisitos, identificar desviaciones y promover la mejora continua en coherencia con la estrategia organizacional.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Directrices de la norma ISO 19011
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p(data-aos="fade-down") La ISO 19011 es la norma internacional que proporciona orientación para la auditoría de sistemas de gestión. Su primera versión fue publicada en 2002, como resultado de la necesidad de unificar criterios para auditar sistemas basados en la familia ISO 9000 y en otras normas de gestión. Posteriormente ha sido actualizada, incorporando el enfoque basado en riesgos y ampliando su aplicabilidad a diferentes tipos de sistemas de gestión.
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") A diferencia de la ISO 9001, la ISO 19011 no es certificable. Su finalidad es orientar a las organizaciones en la planificación, ejecución, seguimiento y mejora de los programas de auditoría, así como en la evaluación de la competencia de los auditores.
        p.mb-0(data-aos="fade-down") La norma se fundamenta en principios que garantizan la confiabilidad del proceso de auditoría, entre ellos:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/img15.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img16.svg", alt="alt").img100.m-auto
              p Integridad, como base del profesionalismo del auditor.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img17.svg", alt="alt").img100.m-auto
              p Presentación imparcial, asegurando informes veraces y precisos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img18.svg", alt="alt").img100.m-auto
              p Debido cuidado profesional, aplicando juicio y diligencia en el proceso.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img19.svg", alt="alt").img100.m-auto
              p Confidencialidad, protegiendo la información obtenida.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img20.svg", alt="alt").img100.m-auto
              p Independencia, garantizando objetividad e imparcialidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img21.svg", alt="alt").img100.m-auto
              p Enfoque basado en evidencia, sustentando conclusiones en información verificable.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img22.svg", alt="alt").img100.m-auto
              p Enfoque basado en riesgos, considerando factores que puedan afectar el logro de los objetivos de la auditoría.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C06.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") En el contexto de la auditoría interna de calidad, la ISO 19011 orienta la estructuración del programa de auditoría, la definición del plan, la selección del equipo auditor, la conducción de las actividades y la elaboración del informe. De esta manera, contribuye a que la auditoría sea un proceso sistemático, objetivo y generador de valor para la organización.
            .col.col-lg-2.col-auto.order-lg-2.order-1.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img23.svg', alt='Imagen decorativa')
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Ciclo PHVA aplicado a la auditoría
    p(data-aos="fade-down") El ciclo PHVA (Planear, Hacer, Verificar y Actuar), también conocido como ciclo de mejora continua, es un modelo de gestión ampliamente difundido por W. Edwards Deming y adoptado en la familia de normas ISO 9000. Este enfoque permite estructurar los procesos de manera sistemática, promoviendo la mejora continua en los sistemas de gestión.
    p.mb-5(data-aos="fade-down") En el contexto de la auditoría interna de calidad, el ciclo PHVA se aplica de la siguiente manera:
    .row.justify-content-center.mb-4.mb-lg-0
      .col-12.movil
        figure
          img(src='@/assets/curso/tema3/img25.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/tema3/img24.svg', alt="Imagen decorativa")
          .tarjeta.color-secundario.p-3(x="17%" y="33%" numero="+")
            p Se establecen el programa y el plan de auditoría, definiendo objetivos, alcance, criterios, equipo auditor y cronograma.
          .tarjeta.color-secundario.p-3(x="83.5%" y="33%" numero="+")
            p Se ejecuta la auditoría conforme a lo planificado, mediante la recolección de evidencias objetivas, entrevistas, revisión documental y observación de procesos.
          .tarjeta.color-secundario.p-3(x="17%" y="81%" numero="+")
            p La organización implementa acciones correctivas y de mejora, realiza seguimiento a los compromisos adquiridos y evalúa la eficacia de las acciones implementadas.
          .tarjeta.color-secundario.p-3(x="83.5%" y="81%" numero="+")
            p Se analizan los hallazgos, se determina el grado de conformidad con los requisitos (por ejemplo, los establecidos en la ISO 9001) y se elabora el informe de auditoría.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-3
          .row.justify-content-center
            .col.col-lg-10.order-lg-2.order-2
              p(data-aos="fade-down") De esta manera, la auditoría interna no se limita a identificar no conformidades, sino que se convierte en un mecanismo dinámico que impulsa el aprendizaje organizacional, la toma de decisiones basada en evidencia y el fortalecimiento continuo del Sistema de Gestión de la Calidad.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img26.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
