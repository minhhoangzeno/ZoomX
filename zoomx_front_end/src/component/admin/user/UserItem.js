import { doDelete, doPut } from "../../../lib/DataSource";

export default function UserItem({ data, indexNum, getHero, handleLoading }) {

    const deleteUser = async () => {
        handleLoading(true)
        let path = `/user/${data._id}`;
        try {
            let resp = await doDelete(path);
            if (resp.status === 200) {
                getHero();
                handleLoading(false)
            }
        } catch (error) {
            handleLoading(false)
        }
    }
    const handleSetRoleAdmin = async () => {
        let message = window.confirm("Bạn chắc chắn muốn thay đổi quyền?");
        if (message) {
            handleLoading(true)
            let path = `/user-role-set-admin/${data?._id}`

            const headers = {
                "Content-Type": "multipart/form-data"
            }
            try {
                let resp = await doPut(path, headers);
                if (resp.status === 200) {
                    getHero();
                    handleLoading(false)
                }
            } catch (error) {
                handleLoading(false)
            }
        }

    }
    const handleSetRoleUser = async () => {
        let message = window.confirm("Bạn chắc chắn muốn thay đổi quyền?");
        if (message) {
            handleLoading(true)
            let path = `/user-role-set-user/${data?._id}`

            const headers = {
                "Content-Type": "multipart/form-data"
            }
            try {
                let resp = await doPut(path, headers);
                if (resp.status === 200) {
                    getHero();
                    handleLoading(false)
                }
            } catch (error) {
                handleLoading(false)
            }
        }
    }
    const handleSetRoleMember = async () => {
        let message = window.confirm("Bạn chắc chắn muốn thay đổi quyền?");
        if (message) {
            handleLoading(true)
            let path = `/user-role-set-member/${data?._id}`

            const headers = {
                "Content-Type": "multipart/form-data"
            }
            try {
                let resp = await doPut(path, headers);
                if (resp.status === 200) {
                    getHero();
                    handleLoading(false)
                }
            } catch (error) {
                handleLoading(false)
            }
        }

    }

    return (
        <>
            <tr >
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{indexNum}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{data?.displayName}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{data?.username}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>
                    <img alt="" src={data?.avatar?.url} style={{ width: 100, height: 100, borderRadius: 50,objectFit:'cover' }} />
                </td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>
                    <div>
                        <input
                            type="radio"
                            name={data._id}
                            onChange={() => handleSetRoleAdmin()}
                            checked={(data.isAdmin === 'Admin') ? true : false}
                        />{" "}
                        Admin
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={data._id}
                            onChange={() => handleSetRoleUser()}
                            checked={(data.isAdmin === 'User') ? true : false}
                        />{" "}
                        User
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={data._id}
                            onChange={() => handleSetRoleMember()}
                            checked={(data.isAdmin === 'Member') ? true : false}
                        />{" "}
                        Member
                    </div>
                </td>
                <td style={{ verticalAlign: 'middle' }} className="btn__setting">
                    <button onClick={() => deleteUser()}>
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" color="#65676b">
                            <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                        </svg>
                    </button>
                </td>
            </tr>
        </>
    )
}