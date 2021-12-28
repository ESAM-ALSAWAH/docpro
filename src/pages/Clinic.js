import React from 'react'
import { useParams } from 'react-router-dom'
import { PageTitle, ClinicSection } from '../components'
import DynamicPage from './DynamicPage'
import ClinicData from '../json/clinic.json'
export const Clinic = () => {
  const { id } = useParams()
  return (
    <DynamicPage id={id} data={ClinicData} url="/all-clinic/pages/">
      <PageTitle title="All Clinic" />
      <ClinicSection />
    </DynamicPage>
  )
}
