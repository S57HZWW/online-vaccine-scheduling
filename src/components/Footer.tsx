import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledFooter = styled.footer`
  font-size: 12px;
  padding: 10px;
  background-color: ${colors.brand};
  color: ${colors.white};
  text-align: center;
`

const Footer: React.FC = () => (
  <StyledFooter>
    <p>Instructions provided are unofficial and unaffiliated with the location in question. Instructions are provided by volunteers.</p>
    <p>
      There are no guarantees made to the success of your vaccination appointment. For official instructions, follow the appropriate
      vaccination location's website.
    </p>
    <p>
      This website is <Link to="https://github.com/S57HZWW/online-vaccine-scheduling">open source</Link>.
    </p>
  </StyledFooter>
)

export default Footer
