<template>
    <div id="CrearRegistro">
    <h3>Agregar Registro</h3>
    <label for="id_r" >Id</label>
    <input v-model="id_r" id="id_r" />
    <label for="valor">Valor</label>
    <input id="valor" type="numeric"/>
    <label for="tipo_registro">tipo_registro</label>
    <input id="tipo_registro"/>
    <label for="clase_registro">clase_registro</label>
    <input id="clase_registro"/>
    <label for="fecha">fecha</label>
    <input id="fecha" type="date"/>
    <label for="nota">nota</label>
    <input id="nota"/> 
    <nav>
        <button>Agregar</button> 
    </nav>       
    </div>
</template>

<script>
export default{
    name: "CrearRegistro",
    data: function(){
        return {
            id_r : ""
        }
    }
};
</script>

<style scoped>
#CrearRegistro {
    background-color: gray;
}

</style>
