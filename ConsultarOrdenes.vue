<template>
    <div>
        <h2>Todos los registros</h2>
        <table>
            <tr>
                <th>Id</th>
                <th>Valor</th>
                <th>Gasto_Ingreso</th>
                <th>Clase de Registro</th>
                <th>Fecha</th>
                <th>Nota</th>
            </tr>
            <tr>
                <td>{{registros[0].id_r}}</td>
                <td>{{registros[0].valor}}</td>
                <td>{{registros[0].tipo_registro}}</td>
                <td>{{registros[0].clase_registro}}o</td>
                <td>{{registros[0].clase_registro}}</td>
                <td>{{registros[0].fecha}}</td>
                <td>{{registros[0].nota}}</td>
            </tr>            
        </table>
    </div>
</template>

<script> 
import axios from "axios";
export default {
    
    name: "ConsultarOrdenes",
    data: function(){
        return {
            registros: [{
                id_r: 4,
                valor: 70000,
                tipo_registro: "gasto",
                clase_registro: "vivienda",
                fecha: "22-12-2020",
                nota: "Casi se nos cae el techo",
            }]
        }
    },
    beforecreate: function(){
        axios.get("http://127.0.0.1:8000/registros/consultar/").then(respuesta =>{
            this.registros= respuesta.data;
        }).catch(error => {
            alert("Error en la petición"+ respuesta.status);
        })
    } 
}
</script>

<style scoped>

</style>