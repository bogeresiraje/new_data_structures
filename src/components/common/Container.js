import React from 'react';
import { Link } from 'react-router-dom';


export default function Container({ children }) {
    return (
        <>
            <div className="br-logo"><a href="/"><span>Data Structures</span></a></div>
            <div className="br-sideleft overflow-y-auto">
                <label className="sidebar-label pd-x-15 mg-t-20">Navigation</label>
                <div className="br-sideleft-menu">
                    <Link to="?" className="br-menu-link">
                        <div className="br-menu-item">
                            <i className="menu-item-icon icon ion-ios-filing-outline tx-24" />
                            <span className="menu-item-label">Question 1</span>
                            <i className="menu-item-arrow fa fa-angle-down" />
                        </div>{/* menu-item */}
                    </Link>{/* br-menu-link */}
                    <ul className="br-menu-sub nav flex-column">
                        <li className="nav-item"><a href="/" className="nav-link">Factorial</a></li>
                        <li className="nav-item"><a href="/finobacci" className="nav-link">Finobacci</a></li>
                        <li className="nav-item"><a href="/tower_of_hanoi" className="nav-link">Tower of Hanoi</a></li>
                    </ul>

                    <Link to="?" className="br-menu-link">
                        <div className="br-menu-item">
                            <i className="menu-item-icon icon ion-ios-filing-outline tx-24" />
                            <span className="menu-item-label">Question 2</span>
                            <i className="menu-item-arrow fa fa-angle-down" />
                        </div>{/* menu-item */}
                    </Link>{/* br-menu-link */}
                    <ul className="br-menu-sub nav flex-column">
                        <li className="nav-item"><a href="/stack" className="nav-link">Stack</a></li>
                        <li className="nav-item"><a href="/queue" className="nav-link">Queue</a></li>
                        <li className="nav-item"><a href="/linked_list" className="nav-link">Linked List</a></li>
                    </ul>
                </div>
                {/* br-sideleft-menu */}
            </div>

            <div className="br-header" style={{zIndex: -20}}>
                <div className="br-header-left">
                    <div className="navicon-left hidden-md-down"><a id="btnLeftMenu" href="/"><i className="icon ion-navicon-round" /></a></div>
                    <div className="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href="/"><i className="icon ion-navicon-round" /></a></div>
                </div>{/* br-header-left */}
            </div>


            {children}

        </>
    );
}