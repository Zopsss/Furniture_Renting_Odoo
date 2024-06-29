import React from "react";
import Item_Photo from '../image/Item1_cart.png'

const Admin_Dashboard = () => {
    return (
        <>
        <div className="ShoppingCart ps-4 pe-4 card d-flex flex-row" style={{width: '95%', margin: '0 auto', marginTop: '5rem'}} >
            <div className="table_sec" style={{width: "100%"}}>
                <table style={{width: "100%", height: 'fit-content'}} className="mt-3">
                    <thead style={{ backgroundColor: '#f8f9fb', height: '4rem', borderRadius: '10px'}}>
                        <tr >
                            <th style={{width: '50%'}}>Product</th>
                            <th style={{width: '10%', backgroundColor: 'red'}}>Size</th>
                            <th style={{width: '10%', backgroundColor: 'red'}}>Color</th>
                            <th style={{width: '15%'}}>Price</th>
                            <th style={{width: '15%', backgroundColor: 'red'}}></th>
                        </tr>
                    </thead>
                </table>

                <table style={{width: "100%", height: 'fit-content', margin: '2rem auto'}} >
                        <tr>
                            <td style={{width: '100%'}} className="d-flex mb-5">
                                <div className="cart_ts_part1_1" style={{height: '6rem', width: '7rem'}}>
                                    <img src={Item_Photo} alt="" height="100%" width="100%"/>
                                </div>
                                <div className="cart_ts_part1_2 ms-4 d-flex flex-column justify-content-evenly" style={{width: '100%'}} >
                                    <b>Montes Scelerisque</b>
                                </div>
                            </td>
                            <td style={{width: '10%', backgroundColor: 'red'}} > Large </td> 
                            <td style={{width: '10%'}}> brown </td>
                            <td style={{width: '15%'}}>$248,66</td>
                            <td style={{width: '15%'}}> <button className="btn btn-danger">Delete</button> 
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: '100%'}} className="d-flex ">
                                <div className="cart_ts_part1_1" style={{height: '6rem', width: '7rem'}}>
                                    <img src={Item_Photo} alt="" height="100%" width="100%"/>
                                </div>
                                <div className="cart_ts_part1_2 ms-4 d-flex flex-column justify-content-evenly" style={{}} >
                                    <b>Montes Scelerisque</b>
                                    <div className="cart_size_color d-flex" >
                                        <b style={{paddingRight: '0.3rem'}}>Size </b> : Large 
                                        <b style={{paddingRight: '0.3rem',marginLeft: '1rem'}}>Color</b>: brown
                                    </div>
                                </div>
                            </td>
                            <td style={{width: '15%'}}>$248,66</td>
                            <td style={{width: '15%'}}> <button className="btn btn-danger">Delete</button> </td>
                        </tr>
                </table>
            </div>
        </div>
        </>
        
    )
}

export default Admin_Dashboard