import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div>
                <div className="p-4 p-lg-5 text-center">

                    <div class="row mt-5">
                        <div class="col-sm">
                                <h1>My name is Bach Dang Tuan</h1>
                        </div>
                        <div class="col-sm">
                
                        <img src= {require ('../img/img5.png')} alt="" srcset="" />
                        </div>

                    </div>
                    {/* <div className="m-4 m-lg-5">
                        <h1 class="display-5 fw-bold">A warm welcome!</h1>
                        <p class="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    </div> */}

                </div>


            </div>
        );
    }
}

export default Carousel;    