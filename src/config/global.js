export default {
  global: {
    componenteFormativo: 'Análisis del riesgo agroclimático',
    descripcionCurso:
      'El sector agrícola es vulnerable a los cambios en el tiempo y en el clima generando pérdidas en sus cultivos, este componente pretende describir los elementos conceptuales para la estimación del riesgo agroclimático.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión del riesgo: reducción y manejo del desastre',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco normativo y actores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Variables climáticas e impacto en el sector agropecuario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Borja, J. y Valdivia, R. (s.f). Introducción a la agronomía. Edimec.',
      link:
        'http://www.dspace.uce.edu.ec/bitstream/25000/5221/1/Introduccion%20a%20la%20agronomia.pdf',
    },
    {
      referencia:
        'Instituto de Hidrología Meteorología y Estudios Ambientales – IDEAM. (2019). Glosario meteorológico. IDEAM.',
      link:
        'http://www.ideam.gov.co/documents/11769/72085840/Anexo+10.+Glosario+meteorol%C3%B3gico.pdf/6a90e554-6607-43cf-8845-9eb34eb0af8e',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). Política nacional de cambio climático. Documento para tomadores de decisiones. MINAMBIENTE.',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/25548/Politica-cambio-climatico-MinAmbiente.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Protección infraestructura gestión de riesgo. (2019). Gestión del riesgo.',
      link:
        'https://www.eird.org/cd/toolkit08/material/proteccion-infraestructura/gestion_de_riesgo_de_amenaza/8_gestion_de_riesgo.pdf',
    },
    {
      referencia:
        'República de El Salvador. (2015). Secretaría para asuntos de vulnerabilidad. Dirección general de protección civil',
      link:
        'https://dipecholac.net/docs/herramientas-proyecto-dipecho/el-salvador/C1-CONCEPTOS-BASICOS-DE-GRD.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres de Colombia. (2015). Plan nacional de gestión del riesgo. NGRD',
      link:
        'http://portal.gestiondelriesgo.gov.co/Documents/PNGRD-2015-2025-Version-Preliminar.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2018). Sistema Nacional de gestión del riesgo de desastres 30 años. NGRD',
      link:
        'https://www.cepal.org/sites/default/files/presentations/sistema_nacional_de_gestion_del_riesgo_de_desastres_-_claudia_satizabal.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura',
      significado:
        'Es la labranza o cultivo de la tierra e incluye todos los trabajos relacionados con el tratamiento del suelo y la plantación de vegetales. Esta actividad se encuentra destinada a la producción alimentaria. ',
    },
    {
      termino: 'Clima',
      significado:
        'Es el conjunto fluctuante de las condiciones atmosféricas, caracterizado por los estados y evoluciones del tiempo en un período y región dados, controlado por factores forzantes y determinantes y, por la interacción entre los diferentes componentes del sistema climático (atmósfera, hidrosfera, litosfera, criósfera, biosfera y antropósfera) (IDEAM, 2019, p. 60)',
    },
    {
      termino: 'Gestión',
      significado:
        'Se define como el proceso de identificar, analizar y cuantificar las probabilidades de pérdidas y efectos secundarios que se desprenden de los desastres, así como de las acciones preventivas, correctivas y reductivas (EIRD, s.f., p. 1)',
    },
    {
      termino: 'Peligro',
      significado:
        'Es una fuente, situación o acto con potencial para causar daños o situaciones peligrosas que conduzcan al deterioro de la salud (ISO 45001, 3.19)',
    },
    {
      termino: 'Riesgo',
      significado:
        'El riesgo es la probabilidad de que un evento ocurra en una sociedad con vulnerabilidad y cause pérdidas humanas, materiales, económicas, etc. (Dirección General de Protección Civil, s.f., p. 8).',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 4147 de 201. [presidente de la República de Colombia]. Por el cual se crea la Unidad Nacional para la Gestión del Riesgo de Desastres, se establece su objeto y estructura. Noviembre 3 de 2011.',
      tipo: 'PDF',
      link: 'downloads/Decreto_4147.pdf',
    },
    {
      texto:
        'Decreto 2157 de 2017. Departamento Administrativo de la Presidencia de la República. Por el cual se adoptan directrices generales para la elaboración del plan de gestión del riesgo de desastres de las entidades públicas y privadas en el marco del Artículo 42 de la Ley 1523 de 2012. Diciembre 20 de 2017.',
      tipo: 'PDF',
      link: 'downloads/Decreto_ 2157.pdf',
    },
    {
      texto:
        'Ley 1523 de 2012. Por la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones. Abril 24 de 2012.',
      tipo: 'PDF',
      link: 'downloads/ley1523.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Lizeth Daniela Reinoso',
        cargo: 'Experta temática ',
        centro:
          'Centro Agropecuario La Granja Espinal Tolima - Regional Tolima',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jesus Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Alvaro Andres Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
