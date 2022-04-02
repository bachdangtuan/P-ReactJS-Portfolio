import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

class ModalProject extends Component {
    renderProject = () => {
        let modal = this.props.DetailsSP;
        return modal.map((sp, index) => {
            return <div className="modal-content modalsanpham" key={index}>
                <div className="modal-header">
                    <h5 className="modal-title">Details Information </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span>X</span>
                    </button>
                </div>
                <div className="modal-body">
                    <table className="table">
                        <thead style={{
                            backgroundColor:'#896efede'
                        }}>
                            <tr>
                                <th>Project:   {sp.tenSP}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className="row">
                                <div className="col-md-4 text-center m-auto">
                                    <img src={sp.hinhAnh} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row" colSpan={5}>Time Start</th>
                                                <td>{sp.timeStart}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colSpan={5}>Time End</th>
                                                <td>{sp.timeEnd}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colSpan={5}>Time Release</th>
                                                <td>{sp.timeRelease}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colSpan={5}>Team Size</th>
                                                <td>{sp.teamSize}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </tbody>
                    </table>
                    <div className='container pl-4 pr-4'>
                        {sp.description}
                    </div>
                    <hr/>
                    <div className='container pl-4 pr-4'>
                        <p>Công nghệ sử dụng</p>
                    </div>
                </div>
                <div className="modal-footer">
                <Button variant="contained"
                           data-dismiss="modal"
                            sx={{
                                borderRadius: '10px',
                                maxHeight: '50px',
                                fontWeight: '600',
                                fontSize: 'medium',
                                background: 'linear-gradient(to right bottom, #896eff, #19293e  )',
                            }}>Close
                </Button>
                </div>
            </div>
        })
    }
    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    {this.renderProject()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        DetailsSP: state.DetailsReducer.xemChiTiet
    }
}
export default connect(mapStateToProps, null)(ModalProject)