
import React, { useState } from 'react';
import Container from '../common/Container';


export default function Stack() {
    const [elements, setElements] = useState([]);
    const [number, setNumber] = useState('');

    const submit = event => {
        event.preventDefault();
        setElements([number, ...elements]);
        setNumber('');
    };

    return (
        <Container>
            <div className="br-mainpanel">
                <div className="pd-30">
                    <h4 className="tx-gray-800 mg-b-5">Stack</h4>
                </div>{/* d-flex */}
                <div className="br-pagebody mg-t-5 pd-x-30">
                    <div className="row row-sm mg-t-20">
                        <div className="col-12">
                            <div className="card pd-0 bd-0 shadow-base">
                                <div className="pd-x-30 pd-t-30 pd-b-15">
                                    <form className="align-items-center justify-content-between" onSubmit={submit}>
                                        <div className="form-group">
                                            <label htmlFor="num">Enter Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Push to Stack</button>
                                        </div>
                                    </form>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <h5>Stack Elements</h5>
                                        {
                                            elements.map((item, index) => <p key={index}>{item}</p>)
                                        }
                                    </div>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <h5>Top Most Element</h5>
                                        {
                                            elements.length? elements[0]: null
                                        }
                                    </div>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <h5>Size of the Stack</h5>
                                        {
                                           elements.length
                                        }
                                    </div>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <button className="btn btn-warning">Pop Element</button>
                                    </div>
                                </div>
                                <div className="pd-x-15 pd-b-15">
                                </div>
                            </div>{/* card */}
                        </div>{/* col-9 */}
                    </div>{/* row */}
                </div>{/* br-pagebody */}
            </div>
        </Container>
    );
}