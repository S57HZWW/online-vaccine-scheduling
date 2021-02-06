import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>COVID-19 Vaccine Scheduling Instructions</h1>
        <ul>
          <li>
            <Link to="./walgreens/intro">Walgreens</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
