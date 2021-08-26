<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Gestión del riesgo: reducción y manejo del desastre     

    p.mb-5 Para reconocer los posibles riesgos que se presentan y las amenazas que estos evidencian es importante apropiarse de los elementos que surgen en medio de los cambios climáticos y que llevan a dichas afectaciones, para ello identifique los conceptos en la siguiente presentación.

    .row.justify-content-center.align-items-center
      .col-12.col-md-8.col-lg-10.col-xl-12
          TabsA.color-acento-botones.mb-3
    
            .tarjeta.color-acento-botones--borde.p-4(titulo="AMENAZA")
              h4 AMENAZA
              .row
                .col-xl-6   
                  p Es el factor externo del riesgo originado por la naturaleza o por la actividad humana, se presenta con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como también pérdidas en bienes, infraestructura y recursos naturales (FAO, 2012 y Ley 1523 de 2012)
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/images/tema1/ico_1.svg', alt='')
                    
            .tarjeta.color-acento-botones--borde.p-4(titulo="VULNERABILIDAD")
              h4 VULNERABILIDAD
              .row
                .col-xl-7
                  br
                  p Es la predisposición que tiene un sistema de ser afectado de forma negativa ante una amenaza ( MINAMBIENTE, s.f.)
                .col-xl-5.mb-4
                  figure
                    img(src='@/assets/curso/images/tema1/ico_2.svg', alt='')
                        
            .tarjeta.color-acento-botones--borde.p-4(titulo="RIESGO")
              h4 RIESGO
              .row
                .col-xl-6  
                  br 
                  p Es la combinación de una amenaza con condiciones de vulnerabilidad, considera la estimación de las pérdidas (vidas, heridos, cultivos, animales, etc.)
                .col-xl-6.mb-3
                  figure
                    img(src='@/assets/curso/images/tema1/ico_3.svg', alt='')
                
    p.mb-5 La gestión del riesgo se convierte en una responsabilidad para cada una de las autoridades que integran los entes territoriales, donde a través de los diferentes planes y gestiones se logre reducir el impacto que esto genera, es importante la responsabilidad en el manejo y explotación de los recursos naturales que aporten a la sostenibilidad ambiental y permitan la gestión adecuada del riesgo de desastres. De esta manera, identifique los siguientes elementos mencionados a continuación en las tarjetas que se presentan.
   
    .row.mb-5
      .col-lg-4.d-flex
        .blockquote.p-4          
          img.img-a(src="@/assets/curso/images/tema1/ico_4.svg"  alt="",)
          
          p.text-center <b>Riesgo del desastre</b>
          .hr_line        
          p.mb-3.text-center Es el proceso de identificación de riesgos, su valoración, seguimiento y monitoreo, conociendo toda la información se pueden generar condiciones de reducción y manejo de desastres.            
            
          img.img-a(src="@/assets/curso/images/tema1/pin.svg" alt="",)

      .col-lg-4.d-flex
        .blockquote.p-4         
          img.img-a(src="@/assets/curso/images/tema1/ico_5.svg" alt="",)
          
          p.text-center <b>Reducción del riesgo</b>
          .hr_line
          p.mb-3.text-center Se busca la intervención con intención de modificar o disminuir las condiciones de riesgo existentes previniendo riesgos en el lugar, reduciendo así la amenaza, la exposición y disminuyendo la vulnerabilidad de las personas.           
          
          img.img-a(src="@/assets/curso/images/tema1/pin.svg" alt="",)
      
      .col-lg-4.d-flex
        .blockquote.p-4          
          img.img-a(src="@/assets/curso/images/tema1/ico_6.svg" alt="",)
          p.text-center <b>Manejo de desastres</b>
          .hr_line
          p.text-center  Es el proceso de la gestión del riesgo, el cual trata la preparación para la respuesta a emergencias, así mismo, la preparación para después de un desastre donde se incluye la rehabilitación y recuperación. 
          
          img.img-a(src="@/assets/curso/images/tema1/pin.svg" alt="",)
            



  









  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
