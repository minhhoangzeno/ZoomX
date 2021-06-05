// import React, { useEffect, useState } from 'react';
// import { doGet } from '../../../lib/DataSource';
// import Item from './Item';
// import Loading from '../../image/Loading';
// import ModalAdd from './ModalAdd';
// import Pagination from "react-js-pagination";
// import SearchBlog from './SearchBlog';
// export default function Blog() {
//     const [data, setData] = useState();
//     const [categoryId, setCategoryId] = useState(1);
//     const handleCategory = (id) => {
//         setCategoryId(id)
//         setTextSearch("")
//     }
//     const [activePage, setActivePage] = useState(1)
//     const [loading, setLoading] = useState(true);
//     const [modalShow, setModalShow] = useState(false)
//     const [textSearch, setTextSearch] = useState("");
//     const [page,setPage] = useState({
//         activePage:1,
//         categoryId:1
//     })
//     const handlePage = (num) => {
//         setPage({
//             ...page,
//             categoryId:num
//         })
//     }
//     const getSearch = async () => {
//         setLoading(true)
//         let path = `/demo?page=${page.activePage}&q=${textSearch}&categoryId=${page.categoryId}`;
//         const headers = {
//             Accept: "*/*"
//         }
//         try {
//             let resp = await doGet(path, headers);
//             if (resp.status === 200) {
//                 setLoading(false)
//                 setData(resp.data)
//             }
//         } catch (error) {
//             setLoading(false)
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         getSearch()
//     }, [])
//     useEffect(() => {
//         getSearch()
//     }, [page])
//     const handleChangeSearch = (text) => {
//         setTextSearch(text)
//     }
//     const handleChangData = async (item) => {
//         setPage({
//             ...page,
//             activePage:item
//         })
//     }
//     const handleData = (res) => {
//         setData(res)
//     }

//     const handleLoading = (isLoading) => {
//         setLoading(isLoading)
//     }

//     const handleSearch = async () => {
//         handleLoading(true);
//         let path = `/blog-search?q=${textSearch}&page=${activePage}`;
//         try {
//             let resp = await doGet(path);
//             if (resp.status === 200) {
//                 setData(resp.data)
//                 handleLoading(false)
//             }
//         } catch (error) {
//             console.log(error)
//             handleLoading(false)
//         }
//     }
//     return (
//         <>
//             <div className="title">
//                 <h1>Blog</h1>
//             </div>

//             <SearchBlog activePage={activePage}
//                 textSearch={textSearch} handleChangeSearch={handleChangeSearch}
//                 handleLoading={handleLoading}
//                 handleSearch={handleSearch}
//             />
//             <CategorySelect handleCategory={handleCategory} handleLoading={handleLoading} getSearch={getSearch} handlePage={handlePage} />
//             <div className="wrapper__table">
//                 <section className="content-header" >
//                     <div className="button__add" >
//                         <button onClick={() => setModalShow(true)}>
//                             <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
//                             </svg>
//                         </button>
//                     </div>
//                 </section>
//                 <div className="box-body">
//                     <table id="example1" className="table table-bordered table-striped">
//                         <thead>
//                             <tr>
//                                 <th className="text-center" style={{ verticalAlign: 'middle' }}>STT</th>
//                                 <th className="text-center" style={{ verticalAlign: 'middle' }}>Tieu de</th>
//                                 <th className="text-center" style={{ verticalAlign: 'middle' }}>Ngay viet</th>
//                                 <th className="text-center" style={{ verticalAlign: 'middle' }}>Danh muc bai viet</th>
//                                 <th className="text-center" width="12%">Setting</th>
//                             </tr>
//                         </thead>
//                         <ModalAdd
//                             show={modalShow}
//                             onHide={() => setModalShow(false)}
//                             handleLoading={handleLoading}
//                             getSearch={getSearch}

//                         />
//                         {!loading ?
//                             <tbody>
//                                 {data?.data.map((item, index) => {
//                                     return (
//                                         <Item data={item} key={index} handleLoading={handleLoading}
//                                             indexNum={parseInt((5 * (activePage - 1)) + index + 1)}
//                                             getSearch={getSearch} />
//                                     )
//                                 })}
//                             </tbody>
//                             : <Loading />
//                         }
//                     </table>
//                 </div>
//             </div>
//             <div className="wrapper-paginate">

//                 <Pagination
//                     activePage={activePage}
//                     itemsCountPerPage={5}
//                     totalItemsCount={parseInt(data?.totalPage)}
//                     pageRangeDisplayed={3}
//                     onChange={handleChangData}

//                 />
//             </div>
//         </>
//     )
// }

// function CategorySelect({ handleCategory, getSearch, handlePage }) {
//     const [categoryBlog, setCategoryBlog] = useState();
//     useEffect(() => {
//         getCategory()
//     }, [])
//     const getCategory = async () => {
//         const path = "/categoryblog";
//         const headers = {
//             Accept: "*/*"
//         }
//         try {
//             var resp = await doGet(path, headers);
//             if (resp.status === 200) {
//                 setCategoryBlog(resp.data)

//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     return (
//         <>
//             <label for="cars">Chon danh muc bai viet:</label>
//             <select name="category" onChange={  (e) => {
//                handlePage(e.target.value)
//             }} style={{
//                 border: '1px solid #eaeaea'
//                 , padding: 10,
//                 marginTop: 15,
//                 marginBottom: 15
//             }}>
//                 <option value="1">Tat ca</option>
//                 {categoryBlog?.map((item, idx) => {
//                     return (
//                         <option key={idx} value={item._id}>{item.name}</option>
//                     )
//                 })}
//             </select>
//         </>
//     )
// }