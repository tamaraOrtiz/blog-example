import PropTypes from 'prop-types'

export const articlePropType =  PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  urlToImage: PropTypes.string
})

export default articlePropType
