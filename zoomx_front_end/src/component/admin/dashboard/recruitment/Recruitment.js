import React from 'react';
import ModalRecruitmentCreate from './ModalRecruitmentCreate';
import ModalRecruitmentEdit from './ModalRecruitmentEdit';
export default function Recruitment() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <section class="content-header">
                <h1>
                    Danh sách tuyển dụng 
                    <div className="button" >
                        <button onClick={() => setModalShow(true)}>Thêm</button>
                        <ModalRecruitmentCreate
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        
                    </div>
                </h1>
                
            </section>
            <div class="box-body">
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Logo</th>
                                <th width="12%">Tiêu đề tuyển dụng</th>
                                <th >Nơi làm việc</th>
                                <th>Cấp bậc</th>
                                <th >Hình thức</th>
                                <th>Kinh nghiệm</th>
                                <th >Mức lương</th>
                                <th>Ngành nghề</th>
                                <th>Hạn chót nhận hồ sơ</th>
                                <th>Phúc lợi</th>
                                <th>Mô tả công việc</th>
                                <th>Yêu cầu công việc</th>
                                <th class="text-center" width="10%">Hành động</th>
                            </tr>
                            </thead>
                            <tbody>
                           
                                <tr class="">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-center">
                                        <button  onClick={() => setModalShow(true)}>Sửa</button>
                                            <ModalRecruitmentEdit
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        <button>Xóa</button>
                                    </td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
        </>
    )
}