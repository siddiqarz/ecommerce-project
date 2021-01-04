import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item'

const CollectionPage= ({collection, ownProps}) =>{
   const {title, items} = collection;
   console.log(ownProps)
    return(<div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>)
}
//ownProps are props of the component that is wrapped by connect
//state has to be passed because this selcetor needs a part of the state depending on URL parameter
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    ownProps: ownProps
})
export default connect(mapStateToProps)(CollectionPage);