<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Aspectos básicos y alcances de la auditoría de calidad
    p.mb-5(data-aos="fade-down") La auditoría interna de calidad es un proceso estructurado que requiere claridad en sus fundamentos, límites y criterios de evaluación. Para garantizar su eficacia, es indispensable definir los aspectos básicos que orientan su desarrollo y el alcance que tendrá dentro del Sistema de Gestión de la Calidad.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img01.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center.mb-lg-3
          .col.col-lg-10.order-lg-2.order-2
            p(data-aos="fade-down") Entre los aspectos básicos de la auditoría se encuentran la definición de criterios, la objetividad del proceso, la recolección de evidencias verificables, la competencia del equipo auditor y la adecuada documentación de los resultados. Estos elementos permiten que la auditoría se realice de manera sistemática, imparcial y basada en hechos.
          .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
        .row.justify-content-center
          .col.col-12.order-lg-1.order-2
            .cajon.cajon.C01.color-primario.p-3
              p.mb-0(data-aos="fade-down") El alcance de la auditoría establece los límites y la cobertura del proceso de evaluación. Define con precisión qué procesos, áreas, sedes, periodos o actividades serán auditadas, así como los requisitos normativos aplicables. Un alcance claramente formulado evita ambigüedades y garantiza que los resultados sean pertinentes y alineados con los objetivos del programa de auditoría.
    p.mb-4(data-aos="fade-down") Para elaborar el alcance se recomienda considerar:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/img03.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img04.svg", alt="alt").img100.m-auto
              p Procesos o áreas que serán evaluados.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img05.svg", alt="alt").img100.m-auto
              p Periodo de tiempo objeto de revisión.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img06.svg", alt="alt").img100.m-auto
              p Requisitos aplicables del sistema de gestión (por ejemplo, capítulos de la ISO 9001).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img07.svg", alt="alt").img100.m-auto
              p Exclusiones justificadas, si existen.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img08.svg", alt="alt").img100.m-auto
              p Recursos disponibles y duración estimada.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img09.svg", alt="alt").img100.m-auto
              p El alcance debe redactarse de forma clara, concreta y verificable.
    p.mb-5(data-aos="fade-down") Con el fin de ejemplificar cómo se redacta adecuadamente el alcance de una auditoría interna, a continuación, se presenta un caso aplicado a un proceso organizacional específico. Este modelo orienta al aprendiz sobre la forma clara, concreta y verificable en que debe formularse el alcance dentro del programa de auditoría.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-8.order-lg-2.order-1.g-0
        figure
          img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')
      .col.col-lg-6.order-lg-1.order-2
        .row.justify-content-center
          .col
            .cajon.cajon.C02.p-4
              p(data-aos="fade-down") La auditoría interna evaluará la totalidad del Sistema de Gestión de la Calidad de la organización durante el periodo enero a diciembre de 2026, verificando el cumplimiento de los requisitos establecidos en la ISO 9001, así como de los procedimientos, políticas y lineamientos internos definidos por la entidad.
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    P El proceso de auditoría abarcará todos los procesos estratégicos, misionales y de apoyo, incluyendo la revisión de la información documentada, la evaluación del desempeño, la gestión de riesgos, el control operacional y las acciones de mejora implementadas.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") De esta manera, la definición adecuada de los aspectos básicos y del alcance contribuye a que la auditoría sea un proceso organizado, coherente y orientado al mejoramiento continuo de la organización.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Criterios de auditoría
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img11.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") Los criterios de auditoría constituyen el conjunto de políticas, procedimientos, requisitos o referencias frente a los cuales se compara la evidencia recopilada durante el proceso de auditoría. En otras palabras, son el marco de referencia que permite determinar si existe conformidad o no conformidad dentro del Sistema de Gestión de la Calidad.
        p(data-aos="fade-down") En una auditoría interna de calidad, los criterios deben estar claramente definidos desde la etapa de planificación, ya que orientan el trabajo del equipo auditor y garantizan objetividad en la evaluación. Sin criterios previamente establecidos, no es posible emitir conclusiones técnicas ni fundamentar hallazgos de manera consistente.
    p.mb-5(data-aos="fade-down") Entre los criterios de auditoría más comunes se encuentran:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Los requisitos establecidos en la ISO 9001.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center La política y los objetivos de calidad de la organización.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Los procedimientos, instructivos y demás información documentada interna.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Requisitos legales y reglamentarios aplicables.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Compromisos contractuales con clientes o partes interesadas.
    p.mb-5(data-aos="fade-down") Es importante diferenciar los criterios de la evidencia de auditoría. Mientras los criterios representan el “deber ser”, la evidencia corresponde a la información verificable que demuestra cómo se ejecutan realmente los procesos. La comparación entre ambos elementos permite identificar:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img17.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Conformidades
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img18.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") No conformidades
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img19.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Observaciones
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img20.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Oportunidades de mejora
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img21.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") La adecuada definición de los criterios garantiza coherencia, transparencia y trazabilidad en el proceso de auditoría. Además, facilita la redacción de hallazgos bien fundamentados y evita interpretaciones subjetivas por parte del auditor.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p(data-aos="fade-down") Los criterios de auditoría constituyen el referente técnico que sustenta todo el proceso evaluativo y permiten determinar el grado de cumplimiento, adecuación y eficacia del Sistema de Gestión de la Calidad.
        p(data-aos="fade-down") Para consolidar la comprensión del concepto, a continuación, se presenta un ejemplo aplicado al proceso de “Gestión de compras”:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-3.col-8.order-lg-2.order-1.g-0
        figure
          img(src='@/assets/curso/tema4/img22.png', alt='Imagen decorativa')
      .col.col-lg-7.order-lg-1.order-2
        .row.justify-content-center
          .col
            .cajon.cajon.C02.p-4
              p(data-aos="fade-down") #[b Proceso auditado]: Gestión de compras.
              p.mb-0(data-aos="fade-down") #[b Criterios de auditoría]
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Requisitos del numeral 8.4 de la ISO 9001 (Control de los procesos, productos y servicios suministrados externamente).
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Procedimiento interno PR-CP-01. Gestión de proveedores.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-3 Política de calidad vigente.
              p.mb-0(data-aos="fade-down") #[b Evidencia recopilada]
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Registros de evaluación y reevaluación de proveedores.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Órdenes de compra emitidas.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Listado actualizado de proveedores aprobados.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-3 Entrevista con el responsable del proceso.
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    P.mb-0 #[b Análisis]: la evidencia se compara con los criterios definidos. Si los registros demuestran que los proveedores son evaluados periódicamente conforme al procedimiento y al requisito normativo, se concluye conformidad. Si no existen registros actualizados o el procedimiento no se cumple, se determina una no conformidad.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Este ejercicio permite evidenciar que los criterios no son simples referencias normativas, sino parámetros concretos que guían la evaluación y sustentan técnicamente los hallazgos del auditor.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Recolección de evidencias
    p.mb-5(data-aos="fade-down") La recolección de evidencias constituye una etapa crítica en el proceso de auditoría interna, ya que de ella depende la solidez técnica de los hallazgos y la credibilidad de las conclusiones. La evidencia de auditoría es información verificable que demuestra el grado de cumplimiento frente a los criterios establecidos.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img23.svg', alt='Imagen decorativa')(style="width: 85%")
            p.mb-0(data-aos="fade-down") Suficiencia, entendida como la cantidad adecuada de información para sustentar conclusiones razonables.
          .col-xl.col-lg-6.tarjeta.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img24.svg', alt='Imagen decorativa')(style="width: 85%")
            p.mb-0(data-aos="fade-down") Competencia, relacionada con la confiabilidad y exactitud de la información recopilada.
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img25.svg', alt='Imagen decorativa')(style="width: 85%")
            p.mb-0(data-aos="fade-down") Pertinencia, es decir, que la evidencia esté directamente vinculada con los criterios de auditoría definidos.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C06.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Es importante diferenciar entre evidencia objetiva y opinión. La auditoría se fundamenta exclusivamente en hechos verificables, no en percepciones subjetivas. Por esta razón, el auditor debe mantener independencia, pensamiento crítico y debido cuidado profesional durante todo el proceso.
            .col.col-lg-2.col-auto.order-lg-1.order-1.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img26.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La obtención de evidencia se realiza mediante diversas técnicas que permiten contrastar la práctica organizacional con los requisitos normativos, por ejemplo, los establecidos en la ISO 9001.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Técnicas, fuentes y propósito de la evidencia en la auditoría interna
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Técnica de auditoría
                th(data-aos="fade-down")(style= "width: 25%") Fuente de evidencia
                th(data-aos="fade-down")(style= "width: 25%") Propósito de la técnica
                th(data-aos="fade-down")(style= "width: 25%") Ejemplo aplicado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisión documental.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Manuales, procedimientos, instructivos, registros e indicadores.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Verificar coherencia entre lo documentado y los requisitos normativos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisión del procedimiento de control de documentos.
              tr
                td(data-aos="fade-down") Entrevista.
                td(data-aos="fade-down") Líderes de proceso, responsables operativos y colaboradores.
                td(data-aos="fade-down") Confirmar comprensión y aplicación de los procesos.
                td(data-aos="fade-down") Entrevista al responsable de compras sobre evaluación de proveedores.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Observación directa.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Actividades en ejecución, instalaciones y equipos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Verificar la aplicación real de lo documentado.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Observación del proceso de recepción de materia prima.
              tr
                td(data-aos="fade-down") Muestreo.
                td(data-aos="fade-down") Selección representativa de registros o transacciones.
                td(data-aos="fade-down") Evaluar cumplimiento sin revisar el 100 % de la información.
                td(data-aos="fade-down") Revisión de 15 registros de capacitación del último semestre.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Análisis de datos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Indicadores de gestión y reportes estadísticos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluar desempeño y tendencias del proceso.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Análisis del indicador de satisfacción del cliente.
    .row.justify-content-center.mb-5
      .col.col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-10(data-aos="flip-up")
              img(src='@/assets/curso/tema4/img27.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C05.px-5.py-3
            .p-4
              p.mb-0 La auditoría interna se basa en el muestreo, dado que no es viable examinar la totalidad de los registros o actividades. El auditor selecciona muestras representativas considerando factores como riesgo, complejidad del proceso, resultados de auditorías anteriores y volumen de información.
    p(data-aos="fade-down") El uso adecuado del muestreo permite emitir conclusiones razonables sin comprometer la objetividad ni la confiabilidad del proceso.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo aplicado al proceso de auditoría:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-3.col-8.order-lg-1.order-1.g-0
        figure
          img(src='@/assets/curso/tema4/img22.png', alt='Imagen decorativa')
      .col.col-lg-7.order-lg-2.order-2
        .row.justify-content-center
          .col
            .cajon.cajon.C02.p-4
              p.mb-0(data-aos="fade-down") #[b Proceso auditado]: Gestión de talento humano.
              p(data-aos="fade-down") #[b Criterio de auditoría]: numeral 7.2 Competencia – ISO 9001.
              p(data-aos="fade-down") #[b Evidencia recopilada]
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Perfiles de cargo actualizados.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Registros de formación y evaluación de competencias.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Plan anual de capacitación.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Entrevista con el responsable de talento humano.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-3 Verificación de registros de inducción del personal nuevo.
              .row.justify-content-center
                .col.col-12
                  .tarjeta.tarjeta--blanca.p-4
                    P.mb-0 #[b Análisis técnico]: 
                    ul.lista-ul.mb-0
                      li.mb-0
                        i.lista-ul__vineta
                        p.mb-0 La evidencia recopilada se compara con el requisito normativo para verificar si la organización determina las competencias necesarias, conserva información documentada como evidencia de competencia y evalúa la eficacia de las acciones formativas.
                      li.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Si la organización no demuestra la evaluación de la eficacia de la capacitación, podría generarse una no conformidad o una observación, dependiendo del impacto identificado.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") De esta manera, la recolección de evidencias no se limita a obtener documentos, sino que implica un análisis estructurado que permite sustentar conclusiones objetivas y aportar valor al Sistema de Gestión de la Calidad.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Generalidades del informe de auditoría
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img28.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3.py-3
          p(data-aos="fade-down") El informe de auditoría es el documento formal mediante el cual el equipo auditor comunica los resultados del proceso evaluativo a la alta dirección y a las partes interesadas pertinentes. Constituye el producto final de la auditoría y representa el medio oficial para registrar hallazgos, conclusiones y recomendaciones.
        p(data-aos="fade-down") De acuerdo con las directrices de la ISO 19011, el informe debe ser claro, preciso, objetivo y sustentado en evidencia verificable. Su redacción debe evitar ambigüedades y juicios subjetivos, garantizando coherencia entre los criterios evaluados, la evidencia recopilada y las conclusiones emitidas.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-6.col-12
        p.text-center.mb-0(data-aos="fade-down") En términos generales, un informe de auditoría interna suele incluir:
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Identificación de la organización auditada.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Objetivo, alcance y criterios de la auditoría.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Fechas de realización y equipo auditor.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Procesos auditados.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Hallazgos identificados (conformidades, no conformidades, observaciones u oportunidades de mejora).
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Conclusiones generales sobre el grado de conformidad y eficacia del sistema.
      .col-lg-2.col-8.col-md-7.order-lg-1.order-1
        figure
          img(src='@/assets/curso/tema4/img29.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Es importante señalar que los hallazgos deben redactarse de manera estructurada, incluyendo el requisito incumplido (criterio), la evidencia objetiva y la descripción clara de la situación encontrada. Esta trazabilidad garantiza transparencia y facilita la posterior definición de acciones correctivas.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-3
          .row.justify-content-center
            .col.col-lg-10.order-lg-2.order-2
              p(data-aos="fade-down") El informe no tiene un carácter sancionatorio; por el contrario, constituye una herramienta estratégica para la toma de decisiones y el fortalecimiento del Sistema de Gestión de la Calidad, particularmente frente a los requisitos establecidos en la ISO 9001.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema4/img30.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema4',
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
