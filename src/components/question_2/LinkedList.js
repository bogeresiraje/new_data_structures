
import React, { useState } from 'react';
import Container from '../common/Container';


export default function LinkedList() {
    const [val, setVal] = useState('');
    let [list, setList] = useState(new List());
    const [insertVal, setInsertVal] = useState('');
    const [insertIndex, setInsertIndex] = useState('');

    const push = () => {
        setList(list.push(val));
        setVal('');
    };

    const unsift = () => {
        setList(list.unshift(val));
        setVal('');
    };

    const addBefore = () => {

    };

    const addAfter = () => {

    };

    return (
        <Container>
            <div className="br-mainpanel">
                <div className="pd-30">
                    <h4 className="tx-gray-800 mg-b-5">Linked List</h4>
                </div>{/* d-flex */}
                <div className="br-pagebody mg-t-5 pd-x-30">
                    <div className="row row-sm mg-t-20">
                        <div className="col-12">
                            <div className="card pd-0 bd-0 shadow-base">
                                <div className="pd-x-30 pd-t-30 pd-b-15">
                                    <div className="align-items-center justify-content-between">
                                        <div className="align-items-center justify-content-between">
                                            <h4>Adding element at the beginning and end of the list</h4>
                                            <div className="form-group">
                                                <label>Enter Value</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={val}
                                                    onChange={(e) => setVal(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="d-flex">
                                                <div className="form-group">
                                                    <button onClick={push} className="btn btn-primary">Add to End</button>
                                                </div>

                                                <div className="form-group">
                                                    <button onClick={unsift} className="btn btn-dark">Add to Beginning</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="align-items-center justify-content-between">
                                        <div className="align-items-center justify-content-between">
                                            <h4>Adding element before and after a certain index in the list</h4>
                                            <div className="form-group">
                                                <label>Enter Value</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={insertVal}
                                                    onChange={(e) => setInsertVal(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Enter Index</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={insertIndex}
                                                    onChange={(e) => setInsertIndex(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="d-flex">
                                                <div className="form-group">
                                                    <button onClick={addBefore} className="btn btn-success">Add Before</button>
                                                </div>

                                                <div className="form-group">
                                                    <button onClick={addAfter} className="btn btn-warning">Add After</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="align-items-center justify-content-between">
                                        <h5>List Elements</h5>
                                        <span style={{ padding: 5 }}><strong>TAIL</strong></span>
                                        {
                                            list.traverse().map((item, index) => (
                                                <>
                                                    <span key={index} style={{ padding: 5 }}>{item}</span>
                                                </>
                                            ))
                                        }
                                        <span style={{ padding: 5 }}><strong>HEAD</strong></span>
                                    </div>
                                    <div className="align-items-center justify-content-between pd-t-20">
                                        <h5>List Size</h5>
                                        {
                                            list.size
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



class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.size) return undefined;

        let count = 0;
        let current = this.head;

        while (count !== index) {
            current = current.next;
            this.count++;
        }
        return current;
    }

    traverse() {
        // Returns all list elements
        let d = [];
        let n = this.head;
        while (n !== null) {
            d.push(n.val);
            n = n.next;
        }

        return d;
    }

    unshift(value) {
        // Add node at the beginning of the list
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;

    }

    insert(index, val){
        if(index < 0 || index > this.size) return undefined;

        if(index === 0){
            return this.unshift(val);

        } else if(index === this.size){
            this.push(val);

        } else {

        }

        this.size++;
        return this;
    }
}

