import React from 'react';
import watch from '../assets/watch.png'

const Main = () => {
    return (
        <>
            {/* header section start */}
            <section className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Your</h3>
                            <h3>Fiteness Tracker</h3>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-group">
                                <button className='py-2 px-3 bg-orange'>Connected Devices</button>
                                <button className="py-2 px-3 bg-gray">Statistics</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* header section end */}

            {/* main part start */}
            <section className="container mt-4">
                <div className="row">
                    <div className="col-md-4 bg-dark text-light card shadow card-body">
                        <div className="text">
                            <h5 className='text-orange'>Smart Watch</h5>
                            <h3>Fire Boltt</h3>
                            <p className="card-text">
                                Lorem 
                            </p>
                            <button className="bg-orange py-2 px-3">scan</button>

                        </div>
                        <div className="img">
                            <img src={watch} className="watch-img" alt="..." />
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="circle-content">
                            <div className="circle">

                                <div className="progress blue">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    hjjhjhjh
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button className='bg-gray py-2 px-5'>
                                    
                                    1200kcl
                                </button>
                                <button className='bg-gray py-2 px-5'>
                                      
                                    1200kcl
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 bg-danger form">
                        <div className="title text-light my-2">add Details</div>
                        <div className="row my-2">
                            <div className="col-md-12 mx-auto">
                                <input type="text" className="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="my-2 d-flex">
                            <div className="">
                                <input type="text" className="inner-text text" placeholder="Age" />
                            </div>
                            <div className="">
                                <input type="text" className="inner-text text" placeholder="Height" />
                            </div>
                        </div>

                        <div className="row my-2 ">
                            <div className="col-md-12 mx-auto">
                                <input type="text" className="text" placeholder="Are you a gym member?" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-12 mx-auto">
                                <input type="text" className="text" placeholder="Do you eat meat?" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-12 mx-auto">
                                <input type="text" className="text" placeholder="Are you cyclist?" />
                            </div>
                        </div>
                        <div className="row my-2 mx-auto">
                            <div className="col-md-12 mx-auto mb-3">
                                <button className="btn rounded-5">Save Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* main part end */}
        </>
    )
}

export default Main