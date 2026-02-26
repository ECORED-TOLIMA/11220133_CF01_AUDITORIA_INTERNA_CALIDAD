export default {
  global: {
    Name: 'Fundamentos y planificación de la auditoría interna de calidad',
    Description:
      'El componente aborda los conceptos, principios y lineamientos establecidos por la Organización Internacional de Normalización (ISO) para la realización de auditorías internas en un Sistema de Gestión de la Calidad. Desarrolla las bases normativas, las competencias del auditor y los elementos necesarios para la adecuada planificación del proceso de auditoría.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Auditoría interna de calidad',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Términos y definiciones', hash: 't_1_1' },
          {
            numero: '1.2',
            titulo: 'Responsables y organización de la auditoría',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características y finalidad de la auditoría interna',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de auditoría de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Auditorías del sistema de gestión de la calidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Auditorías según su propósito',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Auditorías según su ámbito de acción',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Principios fundamentales de las normas ISO 9000, ISO 9001 e ISO 19011',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios de la gestión de la calidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelo de gestión bajo la serie ISO 9000',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Directrices de la norma ISO 9001',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Directrices de la norma ISO 19011',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Ciclo PHVA aplicado a la auditoría',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aspectos básicos y alcances de la auditoría de calidad',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Criterios de auditoría', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Recolección de evidencias', hash: 't_4_2' },
          {
            numero: '4.3',
            titulo: 'Generalidades del informe de auditoría',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Competencias del auditor interno de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conocimientos y habilidades',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Funciones y responsabilidades',
            hash: 't_5_2',
          },
          { numero: '5.3', titulo: 'Selección y designación', hash: 't_5_3' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Fases de la auditoría interna',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Inicio de la auditoría', hash: 't_6_1' },
          {
            numero: '6.2',
            titulo: 'Preparación de la auditoría',
            hash: 't_6_2',
          },
          { numero: '6.3', titulo: 'Ejecución de la auditoría', hash: 't_6_3' },
          { numero: '6.4', titulo: 'Documentos y seguimiento', hash: 't_6_4' },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Planificación de la auditoría interna',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '7.1', titulo: 'Programa de auditoría', hash: 't_7_1' },
          { numero: '7.2', titulo: 'Plan de auditoría', hash: 't_7_2' },
          { numero: '7.3', titulo: 'Listas de verificación', hash: 't_7_3' },
          { numero: '7.4', titulo: 'Protocolo de auditoría', hash: 't_7_4' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  // complementario: [
  //   {
  //     tema: '',
  //     referencia: '',
  //     tipo: 'Sitio web',
  //     link: '',
  //   },
  // ],
  glosario: [
    {
      termino: 'Auditor interno',
      significado:
        'Persona designada por la organización para realizar auditorías internas del Sistema de Gestión de la Calidad, verificando conformidad y eficacia.',
    },

    {
      termino: 'Criterios de auditoría',
      significado:
        'Conjunto de políticas, procedimientos, requisitos de normas y buenas prácticas contra los cuales se evalúa el desempeño del sistema.',
    },

    {
      termino: 'Evidencia objetiva',
      significado:
        'Información verificable que respalda hallazgos de la auditoría, incluyendo registros, observaciones y entrevistas.',
    },

    {
      termino: 'Hallazgo',
      significado:
        'Resultado de la auditoría que indica conformidad o no conformidad con los criterios establecidos.',
    },

    {
      termino: 'Informe de auditoría',
      significado:
        'Documento que resume los hallazgos, conclusiones y recomendaciones obtenidas durante la auditoría.',
    },

    {
      termino: 'Mejora continua',
      significado:
        'Proceso sistemático para incrementar la eficacia del Sistema de Gestión de la Calidad mediante acciones correctivas, preventivas y oportunidades de mejora.',
    },

    {
      termino: 'No conformidad',
      significado:
        'Incumplimiento de un requisito establecido en procedimientos o normas aplicables.',
    },

    {
      termino: 'Plan de auditoría',
      significado:
        'Documento que detalla los objetivos, alcance, criterios, recursos y cronograma para realizar una auditoría específica.',
    },

    {
      termino: 'Programa de auditoría',
      significado:
        'Planificación anual o periódica de auditorías internas, que cubre todos los procesos y áreas del Sistema de Gestión de la Calidad.',
    },

    {
      termino: 'Sistema de Gestión de la Calidad (SGC)',
      significado:
        'Conjunto de políticas, procesos, procedimientos y recursos interrelacionados que una organización implementa para dirigir y controlar la calidad de sus productos, servicios y procesos.',
    },

    {
      termino: 'Técnicas de auditoría',
      significado:
        'Métodos utilizados por los auditores para recopilar evidencias, como entrevistas, observación, revisión documental y muestreo.',
    },

    {
      termino: 'Verificación',
      significado:
        'Proceso de comprobar que un requisito o actividad se ha cumplido conforme a lo planificado o documentado.',
    },

    {
      termino: 'PHVA (Planear-Hacer-Verificar-Actuar)',
      significado:
        'Ciclo de gestión que guía la planificación, ejecución, control y mejora de procesos y auditorías.',
    },

    {
      termino: 'Responsabilidad',
      significado:
        'Obligación del auditor o líder de equipo de cumplir con sus funciones éticas, técnicas y profesionales durante la auditoría.',
    },

    {
      termino: 'Riesgo de auditoría',
      significado:
        'Posibilidad de que los hallazgos de la auditoría no reflejen la realidad del Sistema de Gestión de la Calidad debido a errores o sesgos en el proceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arter, D. R. (2003). <em>Auditorías de calidad para mejorar la productividad</em> (3.ª ed.). ASQ Quality Press.',
      link: '',
    },

    {
      referencia:
        'Canela López, J. R. (2004). <em>La gestión por calidad total en la empresa moderna</em>. Alfaomega.',
      link: '',
    },

    {
      referencia:
        'Cantú Delgado, H. (1997). <em>Desarrollo de una cultura de calidad</em> (1.ª ed.). McGraw-Hill.',
      link: '',
    },

    {
      referencia:
        'Deming, W. E. (s.f.). <em>Calidad, productividad y competitividad: La salida de la crisis</em>.',
      link: '',
    },

    {
      referencia:
        'Harrington, J., & Harrington, J., Jr. (1997). <em>Administración total del mejoramiento continuo</em>. McGraw-Hill.',
      link: '',
    },

    {
      referencia:
        'International Organization for Standardization. (2015). ISO 9001:2015 – <em>Quality management systems – Requirements</em>. ISO.',
      link: '',
    },

    {
      referencia:
        'Maldonado, J. Á. (2015). <em>Fundamentos de calidad total</em>.',
      link: '',
    },

    {
      referencia:
        'Mora Vanegas, C. (2001–2002). <em>Calidad: Auditoría en la calidad</em>.',
      link: '',
    },

    {
      referencia:
        'Sánchez Azor, S. (2017). <em>Gestión de la calidad (ISO 9001/2015)</em>. Editorial Elearning, S.L.',
      link: '',
    },

    {
      referencia:
        'Sánchez Gómez, A. (2005). <em>Definición genérica de auditoría y sus etapas</em>. Gestiopolis.',
      link: '',
    },

    {
      referencia:
        'Serna Gómez, H. (2008). <em>Gerencia estratégica</em> (10.ª ed.). 3R Editores.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alejandro Mantilla Cáceres',
          cargo: 'Experto temático',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
