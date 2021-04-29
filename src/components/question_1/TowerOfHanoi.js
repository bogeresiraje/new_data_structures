
import React from 'react';
import Container from '../common/Container';


export default function TowerOfHanoi() {
    return (
        <Container>
            <div className="br-mainpanel">
                <div className="pd-30">
                    <h4 className="tx-gray-800 mg-b-5">Tower of Hanoi</h4>
                </div>{/* d-flex */}
                <div className="br-pagebody mg-t-5 pd-x-30">
                    <div className="row row-sm mg-t-20">
                        <div className="col-12">
                            <div className="card pd-0 bd-0 shadow-base">
                                <div className="pd-x-30 pd-t-30 pd-b-15">
                                    <div className="d-flex align-items-center justify-content-between">
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