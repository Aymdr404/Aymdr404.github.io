import { Accordion, AccordionTab } from 'primereact/accordion';
import React from "react";
import './accordeonPro.css'


const AccordeonPro: React.FC = () => {
    return(
        <Accordion>
            <AccordionTab header="Langages front">
              <div className="front accordion">
                <section className="text">
                  <p className="m-0">
                    J'ai appris à développer en front avec les langages HTML, CSS et JavaScript. J'ai appris à utiliser les librairies React et Angular.
                  </p>
                  <p className="m-0">
                    J'ai appris à utiliser des outils comme Bootstrap, Materialize, PrimeReact et PrimeNG pour améliorer le design de mes sites.
                  </p>
                </section>
                <img src={process.env.PUBLIC_URL + '/img/HTML.png'} alt="Html-logo" />
              </div>
            </AccordionTab>
            <AccordionTab header="Langages back">
              <div className="back accordion">
                <img src={process.env.PUBLIC_URL + '/img/java.png'} alt="Java-logo" />
                <section className="text">
                  <p className="m-0">
                    J'ai appris à développer en back avec les langages C, Java, Python, PHP.
                  </p>
                  <p className="m-0">
                    J'ai appris à utiliser des outils comme Postman, Insomnia et Swagger pour tester mes API.
                  </p>
                </section>
              </div>
            </AccordionTab>
          </Accordion>
    )
}

export default AccordeonPro;
