
import React, { useState } from 'react';
import Container from '../common/Container';


export default function Finobacci() {
    const [number, setNumber] = useState('');
    const [fino, setFino] = useState('');

    const getFinobacci = () => {
        let n1 = 0, n2 = 1, nextTerm;
        let seq = "0, 1";

        for (let i = 1; i <= number; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
            seq = `${seq}, ${nextTerm}`;
        }

        setFino(seq);
    }

    return (
        <Container>
            <div className="br-mainpanel">
                <div className="pd-30">
                    <h4 className="tx-gray-800 mg-b-5">Finobacci</h4>
                </div>{/* d-flex */}
                <div className="br-pagebody mg-t-5 pd-x-30">
                    <div className="row row-sm mg-t-20">
                        <div className="col-12">
                            <div className="card pd-0 bd-0 shadow-base">
                                <div className="pd-x-30 pd-t-30 pd-b-15">
                                    <div className="align-items-center justify-content-between">
                                        <div className="form-group row">
                                            <label htmlFor="num">Enter Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group row">
                                            <button className="btn btn-success" onClick={getFinobacci}>Print Finobacci Sequence</button>
                                        </div>
                                        <h3>{fino}</h3>
                                    </div>{/* d-flex */}
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