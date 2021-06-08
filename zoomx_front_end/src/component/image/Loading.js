import React from 'react';
import loadingGif from './loadingGif.gif'
export default function Loading() {
    return (
        <tbody>
            <tr>
                <td>
                    <img style={{ width: '10%' }} src={loadingGif} alt="" />
                </td>
            </tr>
        </tbody>

    )
}