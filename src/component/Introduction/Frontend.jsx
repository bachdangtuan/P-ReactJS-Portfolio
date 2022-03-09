import React, { Component } from 'react'

export default class Frontend extends Component {
    renderSP = () => {
        let  {details}  = this.props
        let p1 = details[0];
        console.log(p1);
        return (
            <div>
                <p>{p1.dong1}</p>
            </div>

        )


    }

    render() {
        return (
            <div className="row align-items-center">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    <h2>Frontend
                        <span className='text-primary'> Development</span>
                        {this.renderSP()}
                    </h2>
                </div>
            </div>
        )
    }
}
