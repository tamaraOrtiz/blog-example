import React from 'react'

import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom';

import {PostTypes} from '~/constants'
import {HOME_PATH} from '~/routes/RoutePaths'

const Header = ({isRemote, isLocal}) => {
  const { t } = useTranslation()

  return (
    <Container>
      <div className='nav-scroller py-1 mb-2'>
        <nav className='nav d-flex justify-content-between'>
          <Link to={`${HOME_PATH}${PostTypes.local}`} className={`p-2 link-secondary ${isLocal ? 'active' : ''}`}>{t('post:local')}</Link>
          <Link to={`${HOME_PATH}${PostTypes.remote}`} className={`p-2 link-secondary ${isRemote ? 'active' : ''}`}>{t('post:remote')}</Link>
        </nav>
      </div>
    </Container>
  )
}

Header.propTypes = {
  isRemote: PropTypes.bool,
  isLocal: PropTypes.bool
}

Header.defaultProps = {
  isRemote: false,
  isLocal: true
}

export default Header