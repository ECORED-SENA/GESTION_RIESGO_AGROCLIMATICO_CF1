<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Marco normativo y actores    


    .row.justify-content-center.align-items-center.mb-3
      .col-12
        .bloque-texto-a.color-custom.p-3.mb-5
          .row.m-4.align-items-center.justify-content-between
              .col-lg-5.mb-4.mb-lg-12
                  img(src="@/assets/curso/images/tema2/ico_1.svg" alt="", style="width:350px; display:block; margin:0 auto;")
              .col-lg-7
                .bloque-texto-a__texto.p-4
                  .col-sm.mt-3   
                    p.mb-3 La normativa que se presenta en relación con las políticas de riesgo y desastres favorece acciones implementadas como un conjunto de lineamientos que hacen posible su efectividad y actuación pertinente en los diferentes contextos. 

    #t_2_1.titulo-segundo
      .h4 2.1 Política de gestión del riesgo de desastres
    
    .row.justify-content-center.align-items-center.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OYufP5rkm_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       

    #t_2_2.titulo-segundo
      .h4 2.2 Política nacional de cambio climático 

    .row
      .col-12.col-md-8.col-lg-6.col-xl-7

        p.mb-3 Esta política brinda la contextualización en materia de normatividad y jerarquía para el manejo de desastres en Colombia, debido a la naturaleza de los riesgos asociados en el hogar, en el campo laboral y hasta en el día a día, ya que se pueden presentar diferentes entes territoriales encargados de la prevención y mitigación de desastres, es por eso que se contextualiza en este campo el objetivo de esta política. 

        .cajon.color-secundario.p-4.mb-4
        
          p El objetivo de la política nacional del cambio climático es incorporar su gestión en las decisiones públicas y privadas para avanzar en una senda de desarrollo resiliente al clima y baja en carbono. Esta política propone una serie de estrategias territoriales y sectoriales para la adaptación y mitigación (Política Nacional de Cambio Climático, 2017, p. 9). 
    
      .col-12.col-md-8.col-lg-5.col-xl-5.mb-3
        img(src="@/assets/curso/images/tema2/ico_2.svg" alt="", style="width:400px; display:block; margin:0 auto;")  

    p.BorTit Estructura Ley 1523

    .row.justify-content-center.align-items-center.mb-5
      .col-auto
        img(src="@/assets/curso/images/tema2/img_1.svg" alt="")

    #t_2_3.titulo-segundo
      .h4  2.3 Decretos y leyes

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6

        img(src="@/assets/curso/images/tema2/img_2.svg" alt="", style="width:400px; display:block; margin:0 auto;") 
    
      .col-12.col-md-8.col-lg-6.col-xl-6

        LineaTiempoD.color-acento-botones.my-5
          .row(numero="1" titulo="Decreto 4147/2011 ")
            .col-md-12.mb-4.mb-md-0
              p Por el cual se crea la Unidad Nacional para la Gestión del Riesgo de Desastres, se establece su objeto y estructura (Decreto 4147/2011, p. 1).
         
          .row(numero="2" titulo="Ley 1523/2012")
            .col-md-12.mb-4.mb-md-0   
              p.mb-3 Por el cual se adopta la Política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones (Ley 1523/2012, p. 1). 
 
          .row(numero="3" titulo="Decreto 2157 /2017 ")
            .col-md-12.mb-4.mb-md-0   
              p.mb-3 Por medio del cual se adoptan directrices generales para la elaboración del plan de gestión del riesgo de desastres de las entidades públicas y privadas en el marco del Artículo 42 de la Ley 1523 de 2012 (Decreto 2157 /2017, p. 1).

    p La finalidad de los decretos y leyes encaminados a la gestión del riesgo agroclimático es orientar y reglamentar las medidas de prevención y correctivas que se deben tener en cuenta en cualquier eventualidad que se dé, que pueda terminar en desastre y que presente cualquier tipo de calamidad. Así como se citan a continuación los siguientes decretos y leyes.  


    

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

<style lang="sass" scoped></style>
