import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';



const SpecialProduct = () => {
    return (
       <div className="col-6  mb-3">
           <div className="special-product-card gap-10 flex-direction-column mb-10">
               <div className="d-flex justify-content-between">
                   <div >
                       <img src="/images/watch.jpg" className="img-fluid mr-10" alt="watch"/>
                   </div>
                   <div className="special-product-content gap-15 ">
                       <h5 className="brand">
                           Havels
                       </h5>
                       <h6 className="tittle">
                           Pebble Hive 1.39" HD Display, BT Calling, Health Suite, Multiple Watch Faces, Multi Sports Modes, Sleep Monitoring, Alarm
                       </h6>
                       <ReactStars
                           count={5}
                           size={24}
                           value={3}
                           edit={false}
                           activeColor="#ffd700"
                       />
                       <p className="price"><span className="red-p">$100</span>
                           &nbsp;
                       <strike>$200</strike>
                       </p>
                       <div className="discount-till d-flex align-items-center gap-10">
                           <p className="mb-0"><b>5 </b>Days</p>
                           <div className="d-flex gap-10 align-items-center">
                               <span className="badge rounded-circle p-3 bg-warning">1</span>:
                               <span className="badge rounded-circle p-3 bg-warning">1</span>:
                               <span className="badge rounded-circle p-3 bg-warning">1</span>
                           </div>
                           <div className="product-count mt-3 ">
                               <p>Products-5</p>
                               <div className="progress">
                                   <div className="progress-bar" role="progressbar" style={{width:"25%"}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                           </div>
                       </div>
                       <Link to="/">Add to Cart </Link>

                   </div>
               </div>
           </div>
       </div>
    )
}
export default SpecialProduct
