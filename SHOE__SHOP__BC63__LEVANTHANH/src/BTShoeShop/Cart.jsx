import React, { useState } from 'react'

export const Cart = (props) => {
    console.log('props cart', props)
    const { product } = props

    return (
        <div>
            <div className="modal" id='modal' tabIndex={-1}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã sản phẩm</th>
                                        <th>Name</th>
                                        <th>Hình ảnh</th>

                                        <th>Giá</th>
                                        <th>
                                            Số lượng
                                        </th>
                                        <th>Tổng</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <td>1</td>
                                        <td>123</td>
                                        <td>ABC</td>
                                        <td>
                                            <img className="img-fluid" style={{ width: '70px', height: '70px' }} src="./c/black-car.jpg" alt="..." />
                                        </td>
                                        <td>1000</td>
                                        <td>
                                            <button>-</button>
                                            <span className="mx-3">12000</span>
                                            <button>+</button>
                                        </td>
                                        <td>2000</td>
                                        <td>
                                            <button className="btn btn-danger">X</button>
                                        </td>
                                    </tr> */}
                                    {
                                        product.map((value, index) => {
                                            return <tr>
                                                <td>{index +1 }</td>
                                                <td>{value.id }</td>
                                                <td>{ value.name}</td>
                                                <td>
                                                    <img className="img-fluid" style={{ width: '70px', height: '70px' }} src={value.image} alt="..." />
                                                </td>
                                                <td>{value.price }</td>
                                                <td>
                                                    <button>-</button>
                                                    <span className="mx-3">{ value.cartQuantity }</span>
                                                    <button>+</button>
                                                </td>
                                                <td>{value.price* 2 }</td>
                                                <td>
                                                    <button className="btn btn-danger">X</button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
