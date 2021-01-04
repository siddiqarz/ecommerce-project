import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
//ShopPage is nested in Route in App component. 
//Route automatically passes parameters to component, so can use match
const ShopPage = ({match}) => (

    <div className='shop-page'>
    <Route exact path={`${match.path}`} component= {CollectionsOverview}></Route>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
)
export default ShopPage;