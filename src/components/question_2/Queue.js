
import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications'
import Container from '../common/Container';


export default function Queue() {
    const [elements, setElements] = useState([]);
    const [enqueueNum, setEnqueueNum] = useState('');
    const [queue, setQueue] = useState([]);

    const size = 10;
    const { addToast } = useToasts();

    const enqueue = () => {
        if(elements.length === size){
            addToast(
				'Queue is full', 
				{ appearance: 'error', autoDismiss: true, autoDismissTimeout: 5000 }
			);

        } else{
            setElements([enqueueNum, ...elements]);
            setEnqueueNum('');
            addToast(
				'Successfully Enqueued item', 
				{ appearance: 'success', autoDismiss: true, autoDismissTimeout: 5000 }
			);
        }
    };

    const dequeue = () => {
        if (elements.length) {
            let copy = [...elements]
            copy.pop();
            setElements(copy);
            addToast(
				'Successfully dequeued element', 
				{ appearance: 'success', autoDismiss: true, autoDismissTimeout: 5000 }
			);
        }
    };

    const isEmpty = () => {
        if (elements.length) {
            // Queue is not empty
            addToast(
				'Queue is not empty', 
				{ appearance: 'success', autoDismiss: true, autoDismissTimeout: 5000 }
			);

        } else {
            // Queue is empty
            addToast(
				'Queue is empty', 
				{ appearance: 'warning', autoDismiss: true, autoDismissTimeout: 5000 }
			);
        }
    };

    const retrieveElements = () => {
        setQueue(elements);
    };

    const isFull = () => {
        if (elements.length === size) {
            // Is full
            addToast(
				'Queue is full', 
				{ appearance: 'warning', autoDismiss: true, autoDismissTimeout: 5000 }
			);

        } else {
            // It is not full
            addToast(
				'Queue is not full', 
				{ appearance: 'success', autoDismiss: true, autoDismissTimeout: 5000 }
			);
        }
    };

    return (
        <Container>
            <div className="br-mainpanel">
                <div className="pd-30">
                    <h4 className="tx-gray-800 mg-b-5">Queue</h4>
                </div>{/* d-flex */}
                <div className="br-pagebody mg-t-5 pd-x-30">
                    <div className="row row-sm mg-t-20">
                        <div className="col-12">
                            <div className="card pd-0 bd-0 shadow-base">
                                <div className="pd-x-30 pd-t-30 pd-b-15">
                                    <div className="align-items-center justify-content-between">
                                        <div className="form-group">
                                            <label htmlFor="num">Enter Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={enqueueNum}
                                                onChange={(e) => setEnqueueNum(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <button onClick={enqueue} className="btn btn-success">Enqueue</button>
                                        </div>
                                    </div>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <button className="btn btn-danger" onClick={dequeue}>Dequeue</button>
                                    </div>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <button className="btn btn-dark" onClick={isEmpty}>Is Empty</button>
                                    </div>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <button className="btn btn-dark" onClick={isFull}>Is Full</button>
                                    </div>

                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <button className="btn btn-warning" onClick={retrieveElements}>Retrieve Queue Elements</button>
                                        {
                                            queue.map((item, index) => <p key={index}>{item}</p>)
                                        }
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