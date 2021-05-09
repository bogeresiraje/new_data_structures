
import React from 'react';
import Container from './Container';


export default function GroupMembers() {
    return (
        <Container>
            <div className="br-mainpanel">
                <div className="pd-30">
                    <h4 className="tx-gray-800 mg-b-5">Group Members</h4>
                </div>
                <div className="br-pagebody mg-t-5 pd-x-30">
                    <div className="row row-sm mg-t-20">
                        <div className="col-12">
                            <div className="card pd-0 bd-0 shadow-base">
                                <div className="pd-x-30 pd-t-30 pd-b-15">
                                    <div className="table-responsive">
                                        <div className="pd-x-15 pd-b-15">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <td><strong>Name</strong></td>
                                                        <td><strong>Stud No</strong></td>
                                                        <td><strong>Reg No</strong></td>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Ojok Isaac</td>
                                                        <td>216021703</td>
                                                        <td>16/u/20048/PS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Segawa Musoke Nicholas</td>
                                                        <td>1900717852</td>
                                                        <td>19/U/17852/EVE</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}