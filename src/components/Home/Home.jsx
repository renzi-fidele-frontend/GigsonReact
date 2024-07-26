import React from "react";
import Hero from "./Hero";
import HomeServices from "./HomeServices";
import Form from "../Form";
import HomeCases from "./HomeCases";
import { CtaServices } from "./CtaServices";

//  TODO: Corrigir a largura máxima do app que está exagerada
//  TODO: Traduzir: CTO as a Service, Consultoria Tecnologica, Desarrollo Software, CTO as a service
//  TODO: Corrigir número em liláz
//  TODO: Aumentar o tamanho dos ícones, verificar em todos os lugares
//  TODO: Separar mais as formas
//  TODO: Corrigir o tamanho da fonte para que fique igual ao figma
//  TODO: Alinhar o toggle de ES/EN para a direita
//  TODO: Remover o efeito de remoção da animação ao passar o mouse

const Home = () => {
   return (
      <div className="home-content">
         <Hero />
         <HomeServices />
         <HomeCases />
         <CtaServices />
         <Form />
      </div>
   );
};

export default Home;
