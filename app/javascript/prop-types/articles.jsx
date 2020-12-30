import PropTypes from 'prop-types'

export const articlePropType =  PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.date,
  urlToImage: PropTypes.string,
  content: PropTypes.string
})

export default articlePropType
