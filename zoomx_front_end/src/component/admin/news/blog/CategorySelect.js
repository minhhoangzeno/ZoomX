import React from 'react';
export default function CategorySelect() {
   
    return (
        <>
            <label htmlFor="cars">Chon danh muc bai viet:</label>
            <select name="category"
                style={{
                    border: '1px solid #eaeaea'
                    , padding: 10,
                    marginTop: 15,
                    marginBottom: 15
                }}>
                <option value={1}>Tat ca</option>

            </select>
        </>
    )
}