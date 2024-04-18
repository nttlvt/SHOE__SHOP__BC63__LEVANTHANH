import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductShoe = (props) => {
  // console.log('props', props)
  console.log('handleCarts',props.handleCarts)
  return (
    <div className='row '>
      {
        props.data.map((value, index) => {
          return <div className="col-3 mt-2" key={value.id}>
            {/* <div className="card">
              <img className="img-fluid " src={value.image} alt="" />
              <div className="card-body">
                <p>{value.name}</p>
                <p>{value.alias}</p>
                <p>{value.shortDescription }</p>
              </div>
            </div> */}

            <ProductItem shoe={value} handlecart={ props.handleCarts} />



          </div>
        })
      }

    </div>
  )
}
