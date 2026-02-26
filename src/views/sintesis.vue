<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos, principios y prácticas de la auditoría interna de calidad, incluyendo términos y definiciones, tipos de auditoría, fases del proceso y la planificación según las normas ISO 9000, ISO 9001 e ISO 19011. Se exploran los criterios de auditoría, la recolección de evidencias, la elaboración de informes y las competencias requeridas del auditor interno, así como las responsabilidades del líder del equipo auditor. También se presentan herramientas clave como programas de auditoría, planes, listas de verificación y protocolos, permitiendo a los aprendices comprender la importancia del ciclo PHVA, la mejora continua y la confiabilidad del Sistema de Gestión de la Calidad, integrando aspectos técnicos, éticos y organizativos para asegurar la eficacia y objetividad del proceso.
    .row.justify-content-center
      .col.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt=" En la síntesis se presenta un esquema de los principales contenidos del componente formativo, describiendo la auditoría interna de calidad, tipos de auditoría, principios ISO, fases del proceso, competencias del auditor y herramientas de planificación, evidenciando la relación entre conceptos y procedimientos clave del Sistema de Gestión de la Calidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
