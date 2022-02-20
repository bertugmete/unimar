import React from "react";
import { Button, Col, Row, Tabs, Tab } from "react-bootstrap";
import classnames from "classnames";


const TourProperties = ({tourProgram, includedInTheFee, notIncludedInTheFee, frequentlyAskedQuestions}) => {
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
          {tourProgram()}
      </Tab>
      <Tab eventKey="fee" title="Ücrete Dahil Olanlar">
        {includedInTheFee()}
      </Tab>
      <Tab eventKey="notfee" title="Ücrete Dahil Olmayanlar">
        {notIncludedInTheFee}
      </Tab>
      <Tab eventKey="faq" title="Sıkça Sorulan Sorular">
        {frequentlyAskedQuestions}
      </Tab>
    </Tabs>
  );
};
export default TourProperties;