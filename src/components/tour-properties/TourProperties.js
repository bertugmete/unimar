import React from 'react'
import { Button, Col, Row, Tabs, Tab } from 'react-bootstrap'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

const TourProperties = ({
  tourProgram,
  includedInTheFee,
  notIncludedInTheFee,
  frequentlyAskedQuestions
}) => {
  const { t } = useTranslation()

  return (
    <Tabs defaultActiveKey="tour" id="uncontrolled-tab-example" className="mb-3 mt-3">
      <Tab eventKey="tour" title={t('components.tourProperties.program')}>
        {tourProgram()}
      </Tab>
      <Tab eventKey="fee" title={t('components.tourProperties.include')}>
        {includedInTheFee()}
      </Tab>
      <Tab eventKey="notfee" title={t('components.tourProperties.exclude')}>
        {notIncludedInTheFee()}
      </Tab>
      <Tab eventKey="faq" title={t('components.tourProperties.faq')}>
        {frequentlyAskedQuestions()}
      </Tab>
    </Tabs>
  )
}
export default TourProperties
