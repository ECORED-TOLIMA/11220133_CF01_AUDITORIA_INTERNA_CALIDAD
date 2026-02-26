<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tipos de auditoría de calidad
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema2/img01.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Las auditorías de calidad pueden clasificarse de acuerdo con diferentes criterios, tales como el sistema evaluado, su propósito o el ámbito en el que se desarrollan. Esta clasificación permite comprender el alcance y la naturaleza de cada auditoría dentro del Sistema de Gestión de la Calidad, facilitando su adecuada planificación y ejecución.
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") Según las directrices establecidas por la Organización Internacional de Normalización (ISO), especialmente en la norma ISO 19011, las auditorías pueden diferenciarse en función de su enfoque y objetivos. No todas persiguen el mismo fin ni se aplican en el mismo contexto organizacional.
        p(data-aos="fade-down") La identificación del tipo de auditoría es fundamental para definir los criterios, los recursos necesarios, el perfil del equipo auditor y el alcance del proceso. Por ello, comprender sus distintas clasificaciones permite estructurar auditorías coherentes con las necesidades estratégicas de la organización y con los requisitos normativos aplicables.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Auditorías del sistema de gestión de la calidad
    p.mb-5(data-aos="fade-down") Las auditorías del Sistema de Gestión de la Calidad evalúan la conformidad y eficacia de los procesos frente a los requisitos establecidos en normas como la ISO 9001 y en la propia documentación de la organización. De acuerdo con las directrices de la Organización Internacional de Normalización (ISO), estas auditorías pueden clasificarse según la relación entre el auditor y la organización auditada.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Auditorías de primera parte
            p.mb-0(data-aos="fade-down") Son realizadas por la propia organización, o en su nombre, para evaluar su sistema de gestión. Corresponden a las auditorías internas y tienen como finalidad verificar el cumplimiento de los requisitos, preparar procesos de certificación y fortalecer la mejora continua.
          .col-xl.col-lg-6.tarjeta.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img03.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Auditorías de segunda parte 
            p.mb-0(data-aos="fade-down") Son efectuadas por una organización a sus proveedores o aliados estratégicos. Su objetivo es evaluar la capacidad del proveedor para cumplir con los requisitos contractuales y de calidad establecidos.
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img04.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Auditorías de tercera parte
            p.mb-0(data-aos="fade-down") Son realizadas por organismos externos e independientes, generalmente con fines de certificación. Estas auditorías determinan si el Sistema de Gestión de la Calidad cumple con los requisitos de la norma aplicable y pueden conducir al otorgamiento de una certificación formal.
    .row.justify-content-center.mb-0
      .col.col-lg-8.col-12
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") La correcta identificación del tipo de auditoría permite establecer su alcance, definir responsabilidades y garantizar la objetividad del proceso.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Auditorías según su propósito
    .row.justify-content-center.mb-5
      .col.col-lg-2.col-md-7.col-8.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img05.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Las auditorías de calidad pueden clasificarse según el objetivo específico que persiguen dentro del Sistema de Gestión de la Calidad. Esta clasificación permite orientar el enfoque del proceso auditor, definir los criterios de evaluación y establecer los resultados esperados, de acuerdo con las necesidades estratégicas de la organización.
        p.mb-0(data-aos="fade-down") El propósito de la auditoría determina si se busca verificar cumplimiento, evaluar desempeño, revisar documentación o comprobar la eficacia de acciones implementadas.
    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Auditoría de suficiencia")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img06.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Tiene como finalidad evaluar si la documentación del Sistema de Gestión de la Calidad es adecuada y suficiente para cumplir con los requisitos establecidos en la norma aplicable. Generalmente se realiza antes de la implementación total del sistema o como preparación para una auditoría de certificación. Su enfoque principal es documental.
      .py-3.py-md-4(titulo="Auditoría de conformidad")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img07.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Busca verificar si los procesos y actividades se ejecutan conforme a los procedimientos definidos, políticas internas y requisitos normativos. Permite identificar desviaciones, incumplimientos y oportunidades de mejora en la operación del sistema.
      .py-3.py-md-4(titulo="Auditoría de seguimiento")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img08.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Se realiza con el propósito de comprobar la eficacia de las acciones correctivas implementadas frente a no conformidades detectadas en auditorías anteriores. Su objetivo es validar que las causas raíz hayan sido tratadas adecuadamente y que no se repitan las desviaciones.
      .py-3.py-md-4(titulo="Auditoría de mejora")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img09.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Está orientada a identificar oportunidades que permitan optimizar procesos, aumentar la eficiencia y fortalecer el desempeño organizacional. No se limita a detectar fallas, sino que promueve el perfeccionamiento continuo del sistema de gestión.
    p.mb-0(data-aos="fade-down") Comprender el propósito de cada tipo de auditoría facilita su correcta planificación, el establecimiento de criterios pertinentes y la asignación adecuada de recursos, asegurando coherencia con los objetivos institucionales y con el enfoque de mejora continua.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Auditorías según su ámbito de acción
    .row.justify-content-center.mb-5
      .col.col-lg-2.col-md-5.col-8.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img10.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") Las auditorías de calidad también pueden clasificarse según el alcance o ámbito en el que se aplican dentro de la organización. Esta clasificación permite determinar qué procesos, áreas o niveles del Sistema de Gestión de la Calidad serán evaluados, así como el grado de cobertura de la auditoría.
        p.mb-0(data-aos="fade-down") El ámbito de acción define los límites y la extensión del proceso auditor, facilitando la planificación adecuada de recursos, tiempos y responsabilidades.
    .row.justify-content-center.mb-5
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C04")
          .row(titulo="Auditoría de sistema")
            .col-12.mb-0.mb-md-0
              p Evalúa el Sistema de Gestión de la Calidad en su totalidad, verificando la interacción entre procesos, el cumplimiento de los requisitos normativos y la eficacia global del sistema. Este tipo de auditoría analiza la coherencia entre la política de calidad, los objetivos estratégicos y la operación de los procesos.
          .row(titulo="Auditoría de proceso")
            .col-12.mb-0.mb-md-0
              p Se centra en un proceso específico dentro de la organización, con el fin de evaluar su desempeño, eficacia y cumplimiento de los procedimientos establecidos. Permite analizar entradas, actividades, responsables, controles y salidas del proceso auditado.
          .row(titulo="Auditoría de producto o servicio")
            .col-12.mb-0.mb-md-0
              p Examina las características de un producto o servicio determinado para verificar si cumple con los requisitos establecidos por el cliente, la organización o la normativa aplicable. Este tipo de auditoría se enfoca en resultados específicos más que en el sistema completo.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img11.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La correcta definición del ámbito de acción permite que la auditoría sea proporcional a los objetivos planteados, garantizando claridad en el alcance y evitando desviaciones durante su ejecución. Además, facilita la trazabilidad de los hallazgos y su posterior análisis dentro del proceso de mejora continua.
</template>

<script>
export default {
  name: 'Tema2',
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
