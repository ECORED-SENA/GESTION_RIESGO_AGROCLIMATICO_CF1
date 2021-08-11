<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Variables climáticas e impacto en el sector agropecuario

    p.mb-5 Frente a los posibles riesgos que se puedan presentar desde los cambios climáticos se hace necesario tener claridad en los términos que se definen a partir de los elementos que evidencian el riesgo, que actúan frente a este o lo detienen.

        .row
          .jumbotron.mb-0
            h4.text-center.text-white.mb-1 Cambios climáticos
        .row.mb-5
          .col-lg-3.blockquote-1.p-0
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/images/tema3/ico_1.svg' alt='AvatarTop')
            .jumbotron-1.al-bg.p-4
              h4.text-center Precipitación
            .p-4
              p Es la caída de partículas de agua líquida o sólida que se originan en una nube, atraviesan la atmósfera y llegan al suelo (IDEAM, s.f., p. 227)
          .col-lg-3.blockquote-2.p-0
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/images/tema3/ico_2.svg' alt='AvatarTop')
            .jumbotron-1.al-bg.p-4
              h4.text-center Temperatura
            .p-4  
              p Magnitud física que caracteriza el movimiento aleatorio medio de las moléculas en un cuerpo físico, se expresa en términos de calor y frío, y se mide con un termómetro (IDEAM, s.f.)
          .col-lg-3.blockquote-1.p-0
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/images/tema3/ico_3.svg' alt='AvatarTop')
            .jumbotron-1.al-bg.p-4
              h4.text-center Humedad relativa
            .p-4  
              p Es la medida de contenido de vapor de agua en el aire, se presenta como % de 0-100 unidades, la humedad relativa es proporcional a la temperatura y sensible a sus cambios (IDEAM, s.f., p. 147)
          .col-lg-3.blockquote-2.p-0
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/images/tema3/ico_4.svg' alt='AvatarTop')
            .jumbotron-1.al-bg.p-4
              h4.text-center Brillo solar
            .p-4  
              p Medición de las horas de sol efectivo en el día (brillo solar o insolación), que se asocia a la cantidad de tiempo durante el cual la superficie del suelo es irradiada por la radiación solar directa (IDEAM, s.f., p. 39)











    .row
      .col-12.col-md-8.col-lg-6.col-xl-7
        br
        p.mb-3 Uno de los principales impactos que genera la variabilidad climática en el sector productivo empieza por el aumento de los precios de los insumos para poder cultivar  y después obtener buenas cosechas; el momento en que las condiciones del clima cambian en un ciclo en el que se creía tener un clima estable genera cambios para los productores, ya que se propagan plagas y enfermedades  ocasionando la compra de más insumos como insecticidas, fungicidas, y abonos para aumentar la productividad de estas cosechas.

        .cajon.color-primario.p-4.mb-4
        
          p Asimismo, cuando al productor se le incrementan estos precios deberá vender los productos más costosos, siendo así la afectación directa tanto para el productor como para el consumidor final. Todo esto conlleva a impactos socioeconómicos porque la agricultura depende del comportamiento de las lluvias y las temperaturas, las cuales pueden afectar o beneficiar los ciclos vegetativos y obtener una buena cosecha o pérdidas de producción. 
    
      .col-12.col-md-8.col-lg-5.col-xl-5.mb-3
        img(src="@/assets/curso/images/tema3/img_2.svg" alt="", style="width:400px; display:block; margin:0 auto;")
    p.mb-5 Afortunadamente se ha estado promoviendo la adaptación al cambio climático, con acompañamiento se realizan propuestas para minimizar riesgos dentro de los cultivos, garantizando la adaptación y la mejora continua de la producción agrícola.

    .row.justify-content-center.align-items-center.mb-3
      .col-auto
        img(src="@/assets/curso/images/tema3/img_3.svg" alt="", style="width:1000px; display:block; margin:0 auto;")


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

<style lang="sass" scoped></style>
