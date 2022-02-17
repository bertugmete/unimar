import React from "react";
import { Button, Col, Row } from "react-bootstrap";
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
    <div className="mt-3">
      <Row className="mb-3">
        <Col>
          <Button variant="primary"
                  className={classnames({ "btn-active": propertyVisibility.tourProgramVisibility }, "btn-passive m-1", "tour-properties__button")}
                  onClick={() => handleOnTourProgramClick("tourProgramVisibility")}>TUR
            PROGRAMI</Button>
          <Button variant="primary"
                  className={classnames({ "btn-active": propertyVisibility.includePriceVisibility }, "btn-passive m-1", "tour-properties__button")}
                  onClick={() => handleOnTourProgramClick("includePriceVisibility")}>ÜCRETE
            DAHİL OLANLAR</Button>
          <Button variant="primary"
                  className={classnames({ "btn-active": propertyVisibility.notIncludePriceVisibility }, "btn-passive m-1", "tour-properties__button")}
                  onClick={() => handleOnTourProgramClick("notIncludePriceVisibility")}>ÜCRETE DAHİL OLMAYANLAR</Button>
          <Button variant="primary"
                  className={classnames({ "btn-active": propertyVisibility.frequentAskedQuestionsVisibility }, "btn-passive m-1", "tour-properties__button")}
                  onClick={() => handleOnTourProgramClick("frequentAskedQuestionsVisibility")}>SIKÇA SORULAN
            SORULAR</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            propertyVisibility.tourProgramVisibility && (
              <div>
                <h2 className="tour-properties__title">TUR PROGRAMI</h2>
                <p className="tour-properties__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc metus, pretium et tristique id,
                  dapibus ut urna. Maecenas tempor nunc non sapien lacinia, at convallis orci aliquet. Aenean sed nibh
                  sit amet est mollis fringilla in vel turpis. In hac habitasse platea dictumst. In pellentesque lectus
                  id odio euismod bibendum. Mauris semper eros nunc. Morbi consectetur placerat est non luctus. Cras
                  vestibulum hendrerit nisl, nec pharetra ex interdum non. In molestie tellus eu purus fermentum,
                  imperdiet tempor tellus pharetra. Vestibulum mattis quam eget ligula sollicitudin, et commodo libero
                  ultricies. Integer elit ante, ornare id tempus vitae, ultricies eget nibh. Nullam eget erat non ante
                  eleifend bibendum a a tellus.

                  Aliquam erat volutpat. Pellentesque non ultrices sapien, eu efficitur orci. Sed malesuada sem a
                  ullamcorper vulputate. Cras metus ex, ultrices in bibendum tempus, ullamcorper quis libero. Mauris ut
                  dapibus dolor. Sed ac elit erat. Nullam nec sem erat. Nulla volutpat sed ligula sed eleifend.
                  Pellentesque sed pulvinar odio. Curabitur ut enim facilisis, suscipit arcu in, commodo augue. Donec
                  luctus eu tortor quis lobortis. Sed a felis a elit placerat scelerisque eget sit amet lorem.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nec
                  massa eget risus porttitor semper quis ut lorem. Sed ultrices mattis orci, quis sodales nibh tincidunt
                  ac. Nunc sed porta leo.

                  Nullam a dolor vel magna faucibus lacinia. Duis sed vulputate sapien. Pellentesque in tristique lorem.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in
                  vestibulum lacus. Vivamus condimentum, risus non ultrices ultricies, augue elit consequat tellus, id
                  ullamcorper elit erat nec tortor. Maecenas eget fringilla nulla. Fusce laoreet tristique neque. Cras
                  varius laoreet augue, quis laoreet urna malesuada in. In vulputate, tortor et blandit porttitor, nibh
                  velit mollis erat, nec interdum sapien nisi et diam. Proin suscipit gravida augue, ut sollicitudin dui
                  hendrerit nec. Sed suscipit egestas sapien, vitae lobortis nibh.

                  Vestibulum commodo, purus ac faucibus suscipit, neque eros cursus justo, ac sodales enim lectus vel
                  tortor. Pellentesque volutpat sapien tortor, varius iaculis nisi bibendum a. Ut maximus euismod diam,
                  vitae rhoncus neque tempor et. Donec ut ultrices dolor. Aenean sollicitudin iaculis fringilla. Nunc
                  dolor lacus, consequat in mauris eget, accumsan egestas tortor. Aliquam lobortis ultricies felis et
                  posuere. Mauris elementum lacus dui, ac commodo mi tincidunt at. Aliquam erat volutpat. Proin euismod
                  metus sit amet dapibus dapibus.

                  Duis vehicula, risus nec auctor ornare, sem lorem blandit odio, at egestas lectus velit id erat.
                  Phasellus tincidunt, nulla at consequat pellentesque, enim arcu consectetur purus, id laoreet purus
                  sem nec leo. Duis rutrum porta neque eu varius. Nulla iaculis nunc eget neque tempus pulvinar.
                  Phasellus sit amet enim quis enim malesuada tempor a porttitor sapien. Etiam quis tellus mollis,
                  commodo massa efficitur, dignissim ex. Proin euismod sem ac purus ultricies lobortis. Duis aliquet
                  pulvinar erat et facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Integer velit lectus, lacinia eu lectus in, tincidunt rhoncus quam. Duis mollis erat
                  non ornare convallis.
                </p>
              </div>
            )
          }
          {
            propertyVisibility.includePriceVisibility && (
              <div>
                <h2 className="tour-properties__title">ÜCRETE DAHİL OLANLAR</h2>
                <p className="tour-properties__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eget consectetur elementum,
                  urna nisi aliquam eros, eget tincidunt nisl nunc eget
                  libero.
                </p>
              </div>
            )
          }

          {
            propertyVisibility.notIncludePriceVisibility && (
              <div>
                <h2 className="tour-properties__title">ÜCRETE DAHİL OLMAYANLAR</h2>
                <p className="tour-properties__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eget consectetur elementum,
                  urna nisi aliquam eros, eget tincidunt nisl nunc eget
                  libero.
                </p>
              </div>
            )
          }

          {
            propertyVisibility.frequentAskedQuestionsVisibility && (
              <div>
                <h2 className="tour-properties__title">SIKÇA SORULAN SORULAR</h2>
                <p className="tour-properties__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eget consectetur elementum,
                  urna nisi aliquam eros, eget tincidunt nisl nunc eget
                  libero.
                </p>
              </div>
            )
          }

        </Col>
      </Row>
    </div>
  );
};
export default TourProperties;