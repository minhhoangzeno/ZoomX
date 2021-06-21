import React, { useEffect, useState } from 'react';
import { doGet } from '../../../../lib/DataSource';
export default function CategorySelect({handleChangeCategory}) {
    const [category, setCategory] = useState();
    useEffect(() => {
        async function fetchData() {
            let path = "/categoryblog";
            try {
                let resp = await doGet(path);
                if (resp.status === 200) {
                    setCategory(resp.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <label htmlFor="cars">Chọn danh mục bài viết:</label>

            <select name="category"
                style={{
                    border: '1px solid #eaeaea'
                    , padding: 10,
                    marginTop: 15,
                    marginBottom: 15
                }}
                onChange={(e) => handleChangeCategory(e.target.value)}
                >
                <option value={1}>Tất cả</option>
                {category?.map((item, index) => {
                    return (
                        <option key={index} value={item?._id}>{item?.name}</option>
                    )
                })}
            </select>
        </>
    )
}