<template>
  <div id="app">
   
   <h1>EconoPluss</h1>
    <nav>
    <button v-on:click="cambiarConsultar">Consultar Registros</button>
    <button v-on:click="cambiarCrear">Crear Registros</button>
    <router-view></router-view>
    </nav>
    
  </div>
</template>

<script>

import CrearRegisto from './components/CrearRegistro';
import ConsultarOrdenes from './components/ConsultarOrdenes';


export default {    
  name: 'App',
  components: {
    CrearRegisto,
    ConsultarOrdenes
  },

  methods: {
    cambiarCrear: function(){
      this.$router.push(name="crear")
  
    },
    cambiarConsultar: function () {
      this.$router.push(name="consultar")

    }
  },

  beforeCreate: function(){
    this.$router.push(name = "consultar")
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
