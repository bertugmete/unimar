import React from "react";
import { Button, Col, Row, Tabs, Tab } from "react-bootstrap";
import classnames from "classnames";


const TourProperties = () => {
  const [propertyVisibility, setPropertyVisibility] = React.useState({
    tourProgramVisibility: true,
    includePriceVisibility: false,
    notIncludePriceVisibility: false,
    frequentAskedQuestionsVisibility: false
  });

  const handleOnTourProgramClick = (property) => {
    const copyVisibility = { ...propertyVisibility };

    Object.keys(copyVisibility).map(function(key, index) {
      copyVisibility[key] = false;
    });

    setPropertyVisibility({
      ...copyVisibility,
      [property]: true
    });
  };

  return (
    <Tabs defaultActiveKey="tour" id="uncontrolled-tab-example" className="mb-3 mt-3">
      <Tab eventKey="tour" title="TUR PROGRAMI">
        <div>
          TUR PROGRAMI
        </div>
      </Tab>
      <Tab eventKey="fee" title="Ücrete Dahil Olanlar">
        <div>Ücrete Dahil Olanlar</div>
      </Tab>
      <Tab eventKey="notfee" title="Ücrete Dahil Olmayanlar">
        <div>Ücrete Dahil Olmayanlar</div>
      </Tab>
      <Tab eventKey="faq" title="Sıkça Sorulan Sorular">
        <div>Sıkça Sorulan Sorular</div>
      </Tab>
    </Tabs>
  );
};
export default TourProperties;