<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") La auditoría interna de calidad constituye una herramienta estratégica para evaluar la eficacia de los Sistemas de Gestión de la Calidad y verificar el cumplimiento de los requisitos establecidos por la organización y la normatividad vigente. A través de este proceso se identifican oportunidades de mejora, se fortalecen los procesos institucionales y se promueve la mejora continua, contribuyendo al logro de los objetivos estratégicos y a la satisfacción de las partes interesadas.
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-8.col-md-7.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/intro/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p(data-aos="fade-down") En este componente formativo se desarrollan los fundamentos conceptuales y normativos de la auditoría interna, con base en los lineamientos establecidos por la Organización Internacional de Normalización (ISO), especialmente en las normas ISO 9001 e ISO 19011. Asimismo, se abordan los elementos esenciales para la planificación y preparación de la auditoría, incluyendo la definición de objetivos, alcance, criterios, programa y plan de auditoría.
        p.mb-0(data-aos="fade-down") Finalmente, el componente orienta la aplicación práctica de los conocimientos mediante el análisis de contextos organizacionales, fortaleciendo las competencias necesarias para organizar y preparar auditorías internas de calidad como mecanismo clave para la mejora continua y la toma de decisiones basadas en evidencia.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZKbx2nVNGUw?si=QJc5gfhLaBsNmO1h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
