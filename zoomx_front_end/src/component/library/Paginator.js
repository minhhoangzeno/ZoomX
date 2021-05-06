import React from 'react';
export default function () {
    return (
        <>
            <div className="paginator__block container-fluid">
                <div className="paginator__wrapper">
                    <ul className="page-number">
                        <li>
                            <span aria-current="page" className="page-number current">1</span>
                        </li>
                        <li>
                            <a className="page-number">2</a>
                        </li>
                        <li>
                            <a className="page-number next">
                                >
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}