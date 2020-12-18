import VueRouter from "vue-router";
import CrearRegisto from './components/CrearRegistro';
import ConsultarOrdenes from './components/ConsultarOrdenes';

const router= new VueRouter(
    {
        routes: [
            {
               name: "crear",
               path: "/crear",
               component: CrearRegisto 
            },
            {
                name: "consultar",
                path: "/consultar",
                component: ConsultarOrdenes 

            }
        ]    
    }
    );

    export default router