import React from 'react';
import ModalRecruitmentCreate from '../dashboard/recruitment/ModalRecruitmentEdit';
import ModalRecruitmentEdit from '../../admin/dashboard/recruitment/ModalRecruitmentCreate';

export default function Admin() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="wrapper__admin">
                <div className="title">
                    <h1>BLOGS</h1>
                </div>
                <div className="find__input">
                    <input className="input-txt" placeholder="Tìm kiếm..." />
                    <button>
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                    </button>
                </div>
                <div className="wrapper__table">
                    <section class="content-header">
                        <div className="button__add" >
                            <button onClick={() => setModalShow(true)}>
                                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                </svg>
                            </button>
                            <ModalRecruitmentCreate
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </section>
                    <div class="box-body">
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th class="text-center">STT</th>
                                    <th class="text-center">Start Image</th>
                                    <th class="text-center">Title Blog</th>
                                    <th class="text-center">Start Title</th>
                                    <th class="text-center">Mid Image</th>
                                    <th class="text-center" width="12%">Setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td>1</td>
                                    <td>(Ảnh)</td>
                                    <td>Kinh nghiệm du lịch</td>
                                    <td>ABC</td>
                                    <td>(Ảnh)</td>
                                    <td class="text-center">
                                        <button id="setting-btn" onClick={() => setModalShow(true)}>
                                            <svg style={{width:24,height:24}} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                                            </svg>
                                        </button>
                                        <ModalRecruitmentEdit
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <button>
                                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-center">
                                        <button id="setting-btn" onClick={() => setModalShow(true)}>
                                            <svg style={{width:24,height:24}} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                                            </svg>
                                        </button>
                                        <ModalRecruitmentEdit
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <button>
                                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}