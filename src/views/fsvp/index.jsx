/* eslint-disable no-unused-vars */
import { Divider, Grid, Typography, Button } from "@mui/material";

// project imports
import SubCard from "ui-component/cards/SubCard";
import Accordion from "ui-component/extended/Accordion";
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";
// assets
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import DomainTwoToneIcon from "@mui/icons-material/DomainTwoTone";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import HelpIcon from "@mui/icons-material/Help";
import Center from "react-center";
import Swal from 'sweetalert2'

const customContentData = [
  {
    id: "basic1",
    defaultExpand: true,
    title: (
      <>
        <FaceTwoToneIcon fontSize="small" color="primary" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="primary">
          ¿Quiénes deben cumplir la regla de FSVP?
        </Typography>
      </>
    ),
    content: (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Confia en Ecommerce Logistics como tu Agente FSVP en USA
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            El importador FSVP que sea el propietario o consignatario en los EE.
            UU. de los alimentos ofrecidos a través de una importación (es
            decir, posee el alimento, lo compró o acordó por escrito comprarlo).
            Si no hubiera un propietario o consignatario en los EE. UU. al
            momento del ingreso, el importador FSVP que sea el
            agente/representante en EE. UU. del propietario/consignatario
            extranjero, como se confirmó en una declaración de consentimiento
            firmada. La importante es que haya un importador FSVP en los Estados
            Unidos que asuma la responsabilidad de cumplir con los requisitos de
            FSVP.
          </Typography>
        </Grid>
      </Grid>
    ),
  },
  {
    id: "basic2",
    title: (
      <>
        <DomainTwoToneIcon fontSize="small" color="error" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="error">
          ¿Qué deberé hacer conforme a la regla de FSVP?
        </Typography>
      </>
    ),
    content: (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Confia en Ecommerce Logistics como tu Agente FSVP en USA
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            A menos que esté exento, o sujeto a requisitos modificados, es
            posible que un importador FSVP deba realizar las siguientes
            actividades:
            <ul>
              <li>
                Recurrir a una persona calificada para desarrollar un FSVP y
                para realizar las actividades de FSVP.
              </li>
              <li>
                Realizar un análisis de riesgos que incluya la identificación de
                los riesgos conocidos o razonablemente previsibles asociados a
                cada alimento o tipo de alimento importado, y determinar si
                requieren un control. Entre los riesgos potenciales se incluyen:
                o riesgos biológicos, incluidos los parásitos y las bacterias
                que causan enfermedades; o riesgos químicos, incluidos los
                riesgos radiológicos, los residuos de pesticidas y medicamentos,
                toxinas naturales, descomposición de alimentos, aditivos no
                aprobados, alérgenos de alimentos y (en los alimentos para
                animales) deficiencias de nutrientes o toxicidades; y o riesgos
                físicos, como vidrio.
              </li>
              <li>
                Evaluar los riesgos que presenta el alimento y el desempeño del
                proveedor extranjero, teniendo en cuenta: o el análisis de
                riesgos del alimento; o la entidad que aplicará controles de
                riesgo, como el proveedor extranjero o el proveedor de
                ingredientes del proveedor extranjero; o las prácticas y los
                procedimientos de inocuidad de los alimentos del proveedor
                extranjero; o normas e información sobre inocuidad de los
                alimentos de los EE. UU. aplicables respecto al cumplimiento del
                proveedor extranjero de dichas regulaciones, incluido si el
                proveedor extranjero recibe una carta de advertencia de la FDA o
                una alerta de importación, y o el historial de desempeño de
                inocuidad de los alimentos del proveedor extranjero, incluidos
                los resultados de las pruebas, los resultados de la auditoría y
                el registro del proveedor respecto a la corrección de problemas.
                • Realizar actividades de verificación del proveedor adecuadas
                para garantizar que los riesgos que requieren un control en el
                alimento que importa hayan sido reducidos de manera
                significativa o evitados. Estas actividades podrían incluir: o
                auditorías anuales en el lugar (deben ser realizadas por un
                auditor calificado); o toma de muestras y evaluación de un
                alimento; o una revisión de los registros de inocuidad de los
                alimentos relevantes del proveedor; u o otras actividades que
                correspondan. • Tomar medidas correctivas (de ser necesarias) e
                investigar la idoneidad del FSVP (cuando corresponda).
              </li>
              <li>
                Revaluar el proveedor de alimentos extranjero cada tres años o
                antes si el importador FSVP recibe información nueva sobre los
                riesgos en el alimento o en el desempeño del proveedor
                extranjero. • Identificar al importador FSVP al solicitar la
                entrada ante la Oficina de Aduanas y Protección Fronteriza de
                los EE. UU. con el nombre, la dirección de correo electrónico y
                el identificador de instalación único del importador FSVP
                reconocidos como aceptables por la FDA: Los importadores FSVP
                pueden cumplir con obligaciones de FSVP claves si encargan la
                realización de análisis, evaluaciones y actividades a otras
                entidades en algunas circunstancias, siempre y cuando el
                importador FSVP revise y evalúe la documentación
                correspondiente.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    ),
  },
  {
    id: "basic3",
    title: (
      <>
        <AltRouteIcon fontSize="small" color="secondary" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="secondary">
          ¿Cuándo se aplicarían requisitos modificados conforme a la regla de
          FSVP?
        </Typography>
      </>
    ),
    content: (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Confia en Ecommerce Logistics como tu Agente FSVP en USA
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            <ul>
              <li>
                Importación de alimentos que no pueden consumirse sin que se
                controlen los riesgos o para los cuales los riesgos se controlan
                luego de la importación en determinadas circunstancias;
              </li>
              <li>
                Importación de suplementos dietarios y componentes de
                suplementos dietarios que estarán sujetos a determinadas
                disposiciones de la regulación de las Buenas prácticas de
                fabricación vigentes de suplementos dietarios, u otros
                suplementos dietarios;
              </li>
              <li>
                Importación de un importador muy pequeño o un importador de
                alimentos de determinados proveedores extranjeros pequeños;
              </li>
              <li>
                Importación de ciertos alimentos de un proveedor extranjero que
                tenga una buena posición de cumplimiento con un sistema de
                inocuidad de los alimentos que la FDA haya reconocido
                oficialmente como comparable o equivalente al de los Estados
                Unidos.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    ),
  },
  {
    id: "basic4",
    title: (
      <>
        <FastfoodIcon fontSize="small" color="primary" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="primary">
          ¿Qué alimentos y bebidas están exentos del FSVP?
        </Typography>
      </>
    ),
    content: (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1"></Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            <ul>
              <li>
                Jugos y mariscos de proveedores extranjeros que cumplan con las
                regulaciones del HACCP respectivas (21 CFR parte 120 o 123) y
                cualquier ingrediente que el importador planee destinar a la
                fabricación o el procesamiento de productos de jugos y mariscos
                terminados, según las regulaciones del HACCP respectivas;
              </li>
              <li>
                Pequeñas cantidades de alimentos importadas con fines de
                investigación y evaluación, y cuyo fin no sea la venta minorista
                ni la venta o distribución al público;
              </li>
              <li>
                Pequeñas cantidades de alimentos importados para consumo
                personal y cuyo fin no sea la venta minorista ni la venta o
                distribución al público;
              </li>
              <li>
                Alimentos producidos conforme a los requisitos de ácido bajo en
                alimentos enlatados de la FDA en 21 CFR parte 113 (exento en
                relación con los riesgos microbiológicos controlados por 21 CFR
                parte 113 únicamente);
              </li>
              <li>Determinadas bebidas alcohólicas;</li>
              <li>
                Alimentos que hagan transbordo en los Estados Unidos o que se
                importen para una exportación futura y que no se vendan o
                distribuyan en los Estados Unidos;
              </li>
              <li>
                Alimentos que se fabriquen/procesen, produzcan o cultiven en los
                Estados Unidos, se exporten y se devuelvan a los Estados Unidos
                sin mayor fabricación/procesamiento;
              </li>
              <li>
                Determinados productos de carne vacuna, avícolas y huevos.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    ),
  },
  {
    id: "basic5",
    title: (
      <>
        <AccessTimeIcon fontSize="small" color="info" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="error">
          ¿Cuáles son las fechas de cumplimiento del FSVP?
        </Typography>
      </>
    ),
    content: (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1"></Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            La fecha en la que los importadores FSVP deben cumplir con las
            regulaciones de FSVP es la más alejada de las siguientes. La FDA
            inspeccionará a los importadores FSVP para asegurarse de que cumplan
            con la regla:
            <ul>
              <li>El 30 de mayo de 2017</li>
              <li>
                Para la importación de alimentos de un proveedor que está sujeto
                a los controles preventivos o a las reglas de inocuidad de la
                producción, seis meses después de que al proveedor extranjero se
                le solicite cumplir con las regulaciones relevantes.{" "}
              </li>
              <li>
                Para un importador FSVP que es fabricante o procesador sujeto a
                las disposiciones del programa de cadena de suministro en las
                regulaciones de controles preventivos, la fecha para la que
                tiene que cumplir con dichas disposiciones.{" "}
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    ),
  },
  {
    id: "basic6",
    title: (
      <>
        <HelpIcon fontSize="small" color="secondary" sx={{ mr: 0.5 }} />
        <Typography variant="subtitle1" color="secondary">
          Para obtener más información
        </Typography>
      </>
    ),
    content: (
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="http://www.fda.gov/downloads/Food/GuidanceRegulation/FSMA/UCM472461.pdf"
                  rel="noreferrer"
                >
                  ¿Estoy sujeto al FSVP?
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.fda.gov/Food/GuidanceRegulation/FSMA"
                  rel="noreferrer"
                >
                  FSVP Information
                </a>
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    ),
  },
];

const request = () => {

  Swal.fire({
    icon: 'success',
  title: 'Thanks',
  text: 'Tu requerimiento ha sido Recibido!',
  footer: 'Un Agente se pondrá en contacto a la brevedad'
  })
} 
// =============================|| UI ACCORDION ||============================= //

const Fsvp = () => (
  <MainCard title="">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="Regla final sobre  Programas de  verificación  de  proveedores  extranjeros">
          <Accordion
            expandIcon={<ArrowDropDownIcon />}
            data={customContentData}
          />
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SubCard title="Ecommerce Logistics lo apoya con FSVP para Sellers (Small Foreing Import of Records)">
          <Typography variant="body2" sx={{ textAlign: "justify" }}>
            Necesitará un agente del FSVP si es un vendedor de Amazon que
            exporta productos alimenticios/bebidas o suplementos dietéticos a
            los Estados Unidos. Tras varias alarmas sanitarias relacionados con
            productos importados, la FDA está tomando medidas enérgicas contra
            el Programa de Verificación de Proveedores Extranjeros. Si se
            descubre que incumple la normativa más reciente de la FDA, el
            Reglamento de Controles Preventivos para Alimentos Humanos y
            Animales de la FSMA y la Regla de Seguridad de Productos de la FSMA,
            se puede prohibir la entrada de su producto en Estados Unidos, lo
            que podría ser desastroso para su empresa. La Ley de Modernización
            de la Seguridad Alimentaria (FSMA) ha dado la vuelta a las normas de
            aplicación de la seguridad alimentaria para los vendedores de
            alimentos de Amazon. Según lo declarado por la FDA : "Todos los
            productos regulados por la FDA que se importan a los Estados Unidos
            deben cumplir las mismas leyes y regulaciones que los productos
            nacionales. Los alimentos importados deben ser puros, saludables,
            seguros de consumir y producidos en condiciones sanitarias, y deben
            contener un etiquetado informativo y veraz en inglés".
          </Typography>
          <Center>
            <Button onClick={request} variant="contained">Solicitar Servicio</Button>
          </Center>
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);
export default Fsvp;
