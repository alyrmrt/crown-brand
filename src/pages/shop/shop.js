import React, { Component }  from 'react'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors.js'
import { connect } from 'react-redux'
import CollectionsOverview from '../../components/collections-overview/collections-overview.js'
import CollectionPage from '../collection/collection.js'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.js'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

  componentDidMount() {
       const { fetchCollectionsStartAsync } = this.props
       fetchCollectionsStartAsync()
  }

  render() {
  const { match, isCollectionFetching, selectIsCollectionsLoaded } = this.props
    return (
          <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> } />
            <Route path={`${match.path}/:collectionId`}
                   render={(props) => <CollectionPageWithSpinner isLoading={!selectIsCollectionsLoaded} {...props} />}
            />
          </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
     isCollectionFetching: selectIsCollectionFetching,
     selectIsCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default  connect(
        mapStateToProps,
        mapDispatchToProps
      )(ShopPage)
