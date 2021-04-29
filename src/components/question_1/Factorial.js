import React, { useState } from 'react';
import Container from '../common/Container';


export default function Factorial() {
    const [number, setNumber] = useState('');
    const [factorial, setFactorial] = useState('');

    const calculateFactorial = () => {
        const fact = num => {
            if(num < 0){
                return 'Invalid number';
            }

            if (num === 0) {
                return 1;

            } else {
                return num * fact(num - 1);
            }
        }

        setFactorial(fact(number));
    }

    return (
        <Container>
            <div className="br-mainpanel">
                <div className="pd-30">
                    <h4 className="tx-gray-800 mg-b-5">Factorial</h4>
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
                                            <button className="btn btn-success" onClick={calculateFactorial}>Print Factorial</button>
                                        </div>
                                        <h3>{factorial}</h3>
                                    </div>
                                </div>
                                <div className="pd-x-15 pd-b-15">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}