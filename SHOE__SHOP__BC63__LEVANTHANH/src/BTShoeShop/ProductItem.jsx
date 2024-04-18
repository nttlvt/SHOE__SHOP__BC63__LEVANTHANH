import React from 'react'

export const ProductItem = (props) => {
    // console.log('props item', props)
    const { shoe,handlecart }  = props
    // console.log('shoe',shoe)
    return (
        <div className="card">
            <img className="img-fluid " src={shoe.image} alt="...." />
            <div className="card-body">
                <p>{shoe.name}</p>
                <p>{shoe.alias}</p>
                <p>{shoe.shortDescription}</p>
                <button className="btn btn-dark" onClick={() => {
                  handlecart(shoe)
                    console.log('props.handlecart',handlecart)
                }}>Add to card</button>
            </div>
        </div>

    )
}
