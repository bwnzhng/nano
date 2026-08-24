import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { SpecificationTable } from "../../components/ContentBlock/styles";

const overviewSpecifications = [
  ["Travel [mm]", "25"],
  ["Dimensions [mm]", "26 x 55 x 55"],
  ["Load Capacity [g]", "300"],
  ["Open-Loop Speed [mm/s]", "1.25"],
  ["Resolution [nm]", "50"],
];

const xStageSpecifications = [
  ["Max Speed [µm/s]", "144"],
  ["Positioning Error [nm]", "305.2"],
  ["Bi-Directional Repeatability [µm]", "1.087"],
];

const yStageSpecifications = [
  ["Max Speed [µm/s]", "195"],
  ["Positioning Error [nm]", "546.1"],
  ["Bi-Directional Repeatability [µm]", "0.776"],
];

const specificationTables = [
  { headers: ["Overview", "Mechanical"], rows: overviewSpecifications },
  { headers: ["X-Stage", "Closed-Loop"], rows: xStageSpecifications },
  { headers: ["Y-Stage", "Closed-Loop"], rows: yStageSpecifications },
];

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="landing_image.svg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        // icon="waving.svg"
        id="product"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="cover.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        id="mission"
        belowIcon={
          <>
            {specificationTables.map(({ headers, rows }) => (
              <SpecificationTable key={headers[0]}>
                <thead>
                  <tr>
                    <th>{headers[0]}</th>
                    <th>{headers[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </SpecificationTable>
            ))}
          </>
        }
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
