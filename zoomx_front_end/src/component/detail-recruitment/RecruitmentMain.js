import React, { useState } from 'react';
import ModalRecruitment from './ModalRecruitment';

export default function RecruitmentMain() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="recruitment__main">
            <div className="main__content">
                <div className="main__content--info">
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="130.332" height="95.788" viewBox="0 0 130.332 95.788">
                            <g id="Group_1853" data-name="Group 1853" transform="translate(-1059.454 -1181.938)">
                                <g id="Group_1823" data-name="Group 1823" transform="translate(1063.648 1259.543)">
                                    <path id="Path_1708" data-name="Path 1708" d="M1084.793,1597.63v2.137h-.606v-2.1a.805.805,0,0,0-.863-.891c-.605,0-1.009.369-1.009,1.149v1.845h-.606v-4.873h.606v1.893a1.227,1.227,0,0,1,1.127-.591A1.3,1.3,0,0,1,1084.793,1597.63Z" transform="translate(-1081.71 -1594.685)" fill="#fff" />
                                    <path id="Path_1709" data-name="Path 1709" d="M1111.193,1605.464a1.818,1.818,0,1,1,1.3-.529A1.775,1.775,0,0,1,1111.193,1605.464Zm.877-.947a1.239,1.239,0,0,0-.877-2.123,1.239,1.239,0,1,0,.877,2.123Z" transform="translate(-1104.152 -1600.292)" fill="#fff" />
                                    <path id="Path_1710" data-name="Path 1710" d="M1140.566,1598.669h-.926v1.887c0,.536.307.494.926.467v.543c-1.058.139-1.531-.146-1.531-1.009v-1.887h-.689v-.584h.689v-.794l.605-.181v.975h.926Z" transform="translate(-1127.674 -1596.484)" fill="#fff" />
                                    <path id="Path_1711" data-name="Path 1711" d="M1161.488,1603.912a1.188,1.188,0,0,0,1.26.982,1.084,1.084,0,0,0,1-.508l.516.292a1.709,1.709,0,0,1-1.532.786,1.856,1.856,0,0,1-1.351-.515,1.939,1.939,0,0,1-.007-2.624,1.763,1.763,0,0,1,1.316-.522,1.59,1.59,0,0,1,1.246.543,1.838,1.838,0,0,1,.487,1.295,1.863,1.863,0,0,1-.021.272Zm0-.529h2.325a1.1,1.1,0,0,0-1.121-1.009A1.159,1.159,0,0,0,1161.488,1603.383Z" transform="translate(-1145.952 -1600.292)" fill="#fff" />
                                    <path id="Path_1712" data-name="Path 1712" d="M1191.291,1598.866v-5.082h.606v5.082Z" transform="translate(-1170.643 -1593.785)" fill="#fff" />
                                    <path id="Path_1713" data-name="Path 1713" d="M1207.522,1603.355c.543.118,1.267.321,1.26,1.065a.916.916,0,0,1-.369.759,1.475,1.475,0,0,1-.933.285,1.412,1.412,0,0,1-1.385-.814l.522-.3a.852.852,0,0,0,.863.543c.4,0,.689-.146.689-.473,0-.271-.306-.425-.689-.515-.55-.146-1.26-.327-1.26-1.065a.941.941,0,0,1,.348-.745,1.46,1.46,0,0,1,2.137.432l-.508.285a.728.728,0,0,0-.745-.446c-.341,0-.62.167-.62.467C1206.833,1603.1,1207.139,1603.251,1207.522,1603.355Z" transform="translate(-1182.657 -1600.292)" fill="#fff" />
                                </g>
                                <g id="Group_1824" data-name="Group 1824" transform="translate(1063.407 1271.703)">
                                    <path id="Path_1714" data-name="Path 1714" d="M1083.463,1658.766h.435v4.616h-.435v-.646a1.479,1.479,0,0,1-1.332.726,1.643,1.643,0,0,1-1.207-.5,1.769,1.769,0,0,1,0-2.453,1.644,1.644,0,0,1,1.207-.5,1.479,1.479,0,0,1,1.332.725Zm-1.3,4.273a1.259,1.259,0,0,0,.923-.376,1.283,1.283,0,0,0,.376-.93,1.258,1.258,0,0,0-.376-.923,1.305,1.305,0,0,0-1.847,0,1.258,1.258,0,0,0-.376.923,1.283,1.283,0,0,0,.376.93A1.258,1.258,0,0,0,1082.163,1663.039Z" transform="translate(-1080.429 -1658.682)" fill="#2c2c2c" />
                                    <path id="Path_1715" data-name="Path 1715" d="M1114.914,1660.384a.317.317,0,1,1,.449,0A.315.315,0,0,1,1114.914,1660.384Zm.007,3.871v-3.3h.435v3.3Z" transform="translate(-1108.34 -1659.555)" fill="#2c2c2c" />
                                    <path id="Path_1716" data-name="Path 1716" d="M1130.338,1658.746c-.64-.053-.95.211-.95.844v.131h.95v.422h-.95v2.875h-.435v-2.875h-.56v-.422h.56v-.131a1.156,1.156,0,0,1,1.385-1.266Z" transform="translate(-1119.355 -1658.319)" fill="#2c2c2c" />
                                    <path id="Path_1717" data-name="Path 1717" d="M1148.2,1658.746c-.64-.053-.949.211-.949.844v.131h.949v.422h-.949v2.875h-.435v-2.875h-.561v-.422h.561v-.131a1.156,1.156,0,0,1,1.385-1.266Z" transform="translate(-1133.849 -1658.319)" fill="#2c2c2c" />
                                    <path id="Path_1718" data-name="Path 1718" d="M1172.5,1665.866a1.786,1.786,0,0,1,.455,1.22c0,.046-.007.118-.013.2h-2.9a1.237,1.237,0,0,0,1.313,1.088,1.157,1.157,0,0,0,1.061-.561l.383.224a1.654,1.654,0,0,1-1.451.758,1.715,1.715,0,0,1-1.266-.488,1.819,1.819,0,0,1-.007-2.473,1.654,1.654,0,0,1,1.24-.495A1.472,1.472,0,0,1,1172.5,1665.866Zm-2.453,1h2.46a1.23,1.23,0,0,0-.4-.811,1.18,1.18,0,0,0-.785-.29A1.232,1.232,0,0,0,1170.042,1666.869Z" transform="translate(-1152.792 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1719" data-name="Path 1719" d="M1203.134,1666.085a1.069,1.069,0,0,1,1.042-.6v.422a.973.973,0,0,0-1.042,1.095v1.833h-.435v-3.3h.435Z" transform="translate(-1179.66 -1664.135)" fill="#2c2c2c" />
                                    <path id="Path_1720" data-name="Path 1720" d="M1227.158,1665.866a1.784,1.784,0,0,1,.455,1.22c0,.046-.007.118-.013.2h-2.9a1.237,1.237,0,0,0,1.312,1.088,1.158,1.158,0,0,0,1.062-.561l.382.224a1.654,1.654,0,0,1-1.451.758,1.714,1.714,0,0,1-1.266-.488,1.818,1.818,0,0,1-.007-2.473,1.654,1.654,0,0,1,1.24-.495A1.471,1.471,0,0,1,1227.158,1665.866Zm-2.453,1h2.46a1.228,1.228,0,0,0-.4-.811,1.178,1.178,0,0,0-.785-.29A1.231,1.231,0,0,0,1224.7,1666.869Z" transform="translate(-1197.154 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1721" data-name="Path 1721" d="M1260.2,1666.7v2.025h-.435V1666.7a.832.832,0,0,0-.9-.93c-.633,0-1.068.389-1.068,1.227v1.728h-.435v-3.3h.435v.514a1.215,1.215,0,0,1,1.108-.593A1.232,1.232,0,0,1,1260.2,1666.7Z" transform="translate(-1224.022 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1722" data-name="Path 1722" d="M1288.835,1662.211h-.95v2c0,.567.316.521.95.495v.383c-.923.138-1.385-.112-1.385-.877v-2h-.692v-.422h.692V1661l.435-.132v.923h.95Z" transform="translate(-1247.879 -1660.386)" fill="#2c2c2c" />
                                    <path id="Path_1723" data-name="Path 1723" d="M1333.178,1660.384a.317.317,0,1,1,.449,0A.315.315,0,0,1,1333.178,1660.384Zm.007,3.871v-3.3h.435v3.3Z" transform="translate(-1285.476 -1659.555)" fill="#2c2c2c" />
                                    <path id="Path_1724" data-name="Path 1724" d="M1355.28,1666.7v2.025h-.435V1666.7a.832.832,0,0,0-.9-.93c-.633,0-1.068.389-1.068,1.227v1.728h-.435v-3.3h.435v.514a1.214,1.214,0,0,1,1.108-.593A1.232,1.232,0,0,1,1355.28,1666.7Z" transform="translate(-1301.188 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1725" data-name="Path 1725" d="M1405.81,1665.866a1.785,1.785,0,0,1,.455,1.22c0,.046-.007.118-.013.2h-2.9a1.237,1.237,0,0,0,1.312,1.088,1.157,1.157,0,0,0,1.062-.561l.383.224a1.655,1.655,0,0,1-1.451.758,1.714,1.714,0,0,1-1.266-.488,1.819,1.819,0,0,1-.007-2.473,1.655,1.655,0,0,1,1.24-.495A1.472,1.472,0,0,1,1405.81,1665.866Zm-2.453,1h2.46a1.232,1.232,0,0,0-.4-.811,1.181,1.181,0,0,0-.785-.29A1.231,1.231,0,0,0,1403.356,1666.869Z" transform="translate(-1342.143 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1726" data-name="Path 1726" d="M1435.984,1665.765h.462l-1.352,3.3h-.528l-1.352-3.3h.462l1.154,2.842Z" transform="translate(-1366.738 -1664.362)" fill="#2c2c2c" />
                                    <path id="Path_1727" data-name="Path 1727" d="M1466.633,1665.866a1.784,1.784,0,0,1,.455,1.22c0,.046-.007.118-.013.2h-2.9a1.237,1.237,0,0,0,1.312,1.088,1.157,1.157,0,0,0,1.062-.561l.383.224a1.655,1.655,0,0,1-1.451.758,1.714,1.714,0,0,1-1.266-.488,1.82,1.82,0,0,1-.007-2.473,1.655,1.655,0,0,1,1.24-.495A1.472,1.472,0,0,1,1466.633,1665.866Zm-2.453,1h2.46a1.232,1.232,0,0,0-.4-.811,1.181,1.181,0,0,0-.785-.29A1.231,1.231,0,0,0,1464.179,1666.869Z" transform="translate(-1391.505 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1728" data-name="Path 1728" d="M1497.271,1666.085a1.069,1.069,0,0,1,1.042-.6v.422a.972.972,0,0,0-1.042,1.095v1.833h-.435v-3.3h.435Z" transform="translate(-1418.372 -1664.135)" fill="#2c2c2c" />
                                    <path id="Path_1729" data-name="Path 1729" d="M1520.462,1665.765h.462l-1.411,3.6a1.38,1.38,0,0,1-1.332,1.016v-.409c.4.046.7-.184.9-.686l.086-.2-1.477-3.317h.462l1.24,2.763Z" transform="translate(-1435.298 -1664.362)" fill="#2c2c2c" />
                                    <path id="Path_1730" data-name="Path 1730" d="M1569.8,1666.849c.554.138,1.246.29,1.246,1a.832.832,0,0,1-.336.686,1.319,1.319,0,0,1-.857.264,1.292,1.292,0,0,1-1.273-.758l.369-.218a.9.9,0,0,0,.9.554c.428,0,.758-.165.758-.528,0-.3-.3-.462-.679-.56-.553-.139-1.246-.29-1.246-1a.842.842,0,0,1,.317-.673,1.239,1.239,0,0,1,.811-.271,1.216,1.216,0,0,1,1.154.673l-.363.211a.761.761,0,0,0-.791-.462c-.376,0-.692.184-.692.521C1569.117,1666.585,1569.42,1666.75,1569.8,1666.849Z" transform="translate(-1476.594 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1731" data-name="Path 1731" d="M1598.983,1665.866a1.783,1.783,0,0,1,.455,1.22c0,.046-.007.118-.013.2h-2.9a1.237,1.237,0,0,0,1.313,1.088,1.157,1.157,0,0,0,1.061-.561l.383.224a1.655,1.655,0,0,1-1.451.758,1.715,1.715,0,0,1-1.266-.488,1.82,1.82,0,0,1-.007-2.473,1.655,1.655,0,0,1,1.24-.495A1.47,1.47,0,0,1,1598.983,1665.866Zm-2.453,1h2.46a1.233,1.233,0,0,0-.4-.811,1.18,1.18,0,0,0-.785-.29A1.232,1.232,0,0,0,1596.531,1666.869Z" transform="translate(-1498.917 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1732" data-name="Path 1732" d="M1628.632,1668.306a1.692,1.692,0,0,1-.495-1.233,1.7,1.7,0,0,1,1.734-1.728,1.54,1.54,0,0,1,1.444.864l-.356.2a1.156,1.156,0,0,0-1.088-.646,1.239,1.239,0,0,0-.923.383,1.257,1.257,0,0,0-.376.923,1.284,1.284,0,0,0,.376.93,1.259,1.259,0,0,0,.923.376,1.239,1.239,0,0,0,1.114-.646l.363.211a1.634,1.634,0,0,1-1.477.857A1.686,1.686,0,0,1,1628.632,1668.306Z" transform="translate(-1524.932 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1733" data-name="Path 1733" d="M1660.808,1668.8a1.7,1.7,0,0,1-1.233-.495,1.671,1.671,0,0,1-.5-1.233,1.647,1.647,0,0,1,.5-1.227,1.76,1.76,0,0,1,2.46,0,1.653,1.653,0,0,1,.508,1.227,1.711,1.711,0,0,1-1.734,1.728Zm0-.422a1.26,1.26,0,0,0,.924-.376,1.285,1.285,0,0,0,.376-.93,1.258,1.258,0,0,0-.376-.923,1.305,1.305,0,0,0-1.846,0,1.256,1.256,0,0,0-.376.923,1.283,1.283,0,0,0,.376.93A1.258,1.258,0,0,0,1660.808,1668.379Z" transform="translate(-1550.039 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1734" data-name="Path 1734" d="M1695.784,1666.7v2.025h-.435V1666.7a.832.832,0,0,0-.9-.93c-.633,0-1.068.389-1.068,1.227v1.728h-.435v-3.3h.435v.514a1.215,1.215,0,0,1,1.108-.593A1.232,1.232,0,0,1,1695.784,1666.7Z" transform="translate(-1577.53 -1664.021)" fill="#2c2c2c" />
                                    <path id="Path_1735" data-name="Path 1735" d="M1726.078,1658.766h.435v4.616h-.435v-.646a1.478,1.478,0,0,1-1.332.726,1.643,1.643,0,0,1-1.206-.5,1.768,1.768,0,0,1,0-2.453,1.643,1.643,0,0,1,1.206-.5,1.478,1.478,0,0,1,1.332.725Zm-1.3,4.273a1.259,1.259,0,0,0,.923-.376,1.283,1.283,0,0,0,.376-.93,1.258,1.258,0,0,0-.376-.923,1.306,1.306,0,0,0-1.847,0,1.257,1.257,0,0,0-.376.923,1.282,1.282,0,0,0,.376.93A1.258,1.258,0,0,0,1724.779,1663.039Z" transform="translate(-1601.956 -1658.682)" fill="#2c2c2c" />
                                </g>
                                <g id="Group_1827" data-name="Group 1827" transform="translate(1061.648 1198.359)">
                                    <g id="Group_1826" data-name="Group 1826" transform="translate(0)">
                                        <path id="Path_1736" data-name="Path 1736" d="M1126.555,1269.083H1071.1l26.762,27.4Z" transform="translate(-1071.096 -1269.083)" fill="#282828" />
                                        <g id="Group_1825" data-name="Group 1825" transform="translate(28.629)">
                                            <path id="Path_1737" data-name="Path 1737" d="M1444.458,1512.709h55.591l-26.825-27.461Z" transform="translate(-1402.734 -1444.516)" fill="#282828" />
                                            <path id="Path_1738" data-name="Path 1738" d="M1291.652,1307.9l-37.922-38.821-30.7,29.307,37.923,38.821Z" transform="translate(-1223.03 -1269.083)" fill="#282828" />
                                        </g>
                                    </g>
                                </g>
                                <g id="Group_1828" data-name="Group 1828" transform="translate(1120.977 1189.584)">
                                    <path id="Path_1739" data-name="Path 1739" d="M1601.553,1462.778l-4.435,4.234,26.826,27.461V1485.7Z" transform="translate(-1557.328 -1417.506)" fill="#999" />
                                    <path id="Path_1740" data-name="Path 1740" d="M1392.693,1229.417h-4.514V1224.8l-2.226-2.278v8.774l37.923,38.821,4.435-4.234Z" transform="translate(-1385.954 -1222.518)" fill="#999" />
                                </g>
                                <path id="Path_1741" data-name="Path 1741" d="M1128.263,1327.732h-68.809l61.523-58.649h68.809Z" transform="translate(0 -70.724)" fill="#e01042" />
                                <rect id="Rectangle_324" data-name="Rectangle 324" width="68.719" height="9.544" transform="translate(1059.454 1257.008)" fill="#59595b" />
                                <path id="Path_1742" data-name="Path 1742" d="M1485.758,1277.81l-61.613,58.8v-9.544l61.613-58.8Z" transform="translate(-295.972 -70.061)" fill="#bfbfc1" />
                                <path id="Path_1743" data-name="Path 1743" d="M1406.344,1194.275h6.419v2.694h-10.3v-1.9l6.182-8.612h-5.917v-2.695h9.774v1.9Z" transform="translate(-278.373 -1.479)" fill="#231f20" />
                                <path id="Path_1744" data-name="Path 1744" d="M1666.808,1187.3v8.19h-2.853v-8c0-1.823-.978-2.879-2.563-2.879-1.77,0-2.88,1.162-2.88,3.487v7.4h-2.853v-8c0-1.823-.9-2.879-2.484-2.879-1.717,0-2.932,1.189-2.932,3.487v7.4h-2.853v-13.209h2.853v1.585a4.216,4.216,0,0,1,3.777-1.928,4.037,4.037,0,0,1,3.752,2.087,4.416,4.416,0,0,1,4.042-2.087C1664.8,1181.938,1666.808,1184.025,1666.808,1187.3Z" transform="translate(-477.151 0)" fill="#231f20" />
                                <g id="Group_1829" data-name="Group 1829" transform="translate(1136.967 1181.938)">
                                    <path id="Path_1745" data-name="Path 1745" d="M1473.744,1187.531a3.935,3.935,0,0,1,.992-1.63,4.211,4.211,0,0,1,5.865,0,3.933,3.933,0,0,1,.991,1.63h2.931a6.912,6.912,0,0,0-6.854-5.593,6.913,6.913,0,0,0-6.854,5.593Z" transform="translate(-1470.813 -1181.938)" fill="#231f20" />
                                    <path id="Path_1746" data-name="Path 1746" d="M1481.591,1226a3.937,3.937,0,0,1-.991,1.63,4.212,4.212,0,0,1-5.865,0,3.935,3.935,0,0,1-.992-1.63h-2.93a6.669,6.669,0,0,0,1.914,3.585,7.081,7.081,0,0,0,9.88,0,6.665,6.665,0,0,0,1.914-3.585Z" transform="translate(-1470.813 -1217.699)" fill="#231f20" />
                                </g>
                                <g id="Group_1830" data-name="Group 1830" transform="translate(1153.294 1182.054)">
                                    <path id="Path_1747" data-name="Path 1747" d="M1601.025,1185.419a4.063,4.063,0,0,1,2.568,2.612h2.931a6.668,6.668,0,0,0-1.914-3.585,6.583,6.583,0,0,0-3.585-1.892Z" transform="translate(-1592.816 -1182.554)" fill="#e01042" />
                                    <path id="Path_1748" data-name="Path 1748" d="M1560.388,1188.038a4.064,4.064,0,0,1,2.569-2.612v-2.863a6.92,6.92,0,0,0-5.5,5.475Z" transform="translate(-1557.457 -1182.561)" fill="#e01042" />
                                    <path id="Path_1749" data-name="Path 1749" d="M1562.956,1228.614a4.063,4.063,0,0,1-2.569-2.612h-2.931a6.921,6.921,0,0,0,5.5,5.475Z" transform="translate(-1557.457 -1217.815)" fill="#e01042" />
                                    <path id="Path_1750" data-name="Path 1750" d="M1603.594,1226a4.064,4.064,0,0,1-2.569,2.612v2.865a6.582,6.582,0,0,0,3.585-1.892,6.666,6.666,0,0,0,1.914-3.585Z" transform="translate(-1592.816 -1217.815)" fill="#e01042" />
                                </g>
                                <g id="Group_1831" data-name="Group 1831" transform="translate(1063.035 1259.65)">
                                    <path id="Path_1751" data-name="Path 1751" d="M1081.456,1598v2.025h-.712v-1.952a.687.687,0,0,0-.739-.765c-.5,0-.838.31-.838.95v1.767h-.712V1595.4h.712v1.741a1.128,1.128,0,0,1,1.022-.507A1.228,1.228,0,0,1,1081.456,1598Z" transform="translate(-1078.456 -1595.207)" fill="#fff" />
                                    <path id="Path_1752" data-name="Path 1752" d="M1109.584,1604.917a1.768,1.768,0,1,1,1.233.5A1.677,1.677,0,0,1,1109.584,1604.917Zm1.233-.191a.994.994,0,0,0,.732-.3,1.084,1.084,0,0,0,0-1.49,1.051,1.051,0,0,0-1.464,0,1.083,1.083,0,0,0,0,1.49A.993.993,0,0,0,1110.817,1604.725Z" transform="translate(-1103.306 -1600.518)" fill="#fff" />
                                    <path id="Path_1753" data-name="Path 1753" d="M1142.815,1599.113H1142v1.583c0,.422.277.416.818.389v.64c-1.088.132-1.53-.165-1.53-1.029v-1.583h-.606v-.686h.606v-.712l.712-.211v.923h.818Z" transform="translate(-1128.953 -1596.911)" fill="#fff" />
                                    <path id="Path_1754" data-name="Path 1754" d="M1167,1603.987a1.1,1.1,0,0,0,1.906.37l.587.343a1.621,1.621,0,0,1-1.444.719,1.783,1.783,0,0,1-1.3-.488,1.81,1.81,0,0,1-.007-2.479,1.665,1.665,0,0,1,1.253-.5,1.546,1.546,0,0,1,1.187.508,1.764,1.764,0,0,1,.468,1.233,1.948,1.948,0,0,1-.026.3Zm1.932-.581a.918.918,0,0,0-.943-.811.958.958,0,0,0-1,.811Z" transform="translate(-1149.714 -1600.518)" fill="#fff" />
                                    <path id="Path_1755" data-name="Path 1755" d="M1199.224,1599.169v-4.814h.712v4.814Z" transform="translate(-1176.468 -1594.355)" fill="#fff" />
                                    <path id="Path_1756" data-name="Path 1756" d="M1219.213,1603.373c.508.112,1.167.323,1.154,1.029a.876.876,0,0,1-.37.745,1.512,1.512,0,0,1-.917.27,1.372,1.372,0,0,1-1.345-.771l.613-.356a.7.7,0,0,0,.732.475c.376,0,.561-.125.561-.369,0-.211-.277-.336-.627-.422-.495-.125-1.161-.323-1.148-1.016a.888.888,0,0,1,.343-.732,1.449,1.449,0,0,1,2.084.409l-.6.336a.623.623,0,0,0-.62-.376c-.27,0-.481.119-.481.349S1218.87,1603.274,1219.213,1603.373Z" transform="translate(-1191.491 -1600.518)" fill="#fff" />
                                </g>
                                <rect id="Rectangle_325" data-name="Rectangle 325" width="55.46" height="8.774" transform="translate(1061.648 1189.584)" fill="#e01042" />
                            </g>
                        </svg>
                    </div>
                    <div className="content--info">
                        <strong className="title">ZoomX Holding - Nhân viên thiết kế</strong>
                        <div className="info">
                            <div className="row">
                                <div className="col-4">
                                    <p><strong>Nơi làm việc</strong></p>
                                    <p><strong>Cấp bậc</strong></p>
                                    <p><strong>Hình thức</strong></p>
                                    <p><strong>Kinh nghiệm</strong></p>
                                    <p><strong>Mức lương</strong></p>
                                    <p><strong>Ngành nghề</strong></p>
                                    <p><strong>Hạn chót nhận hồ sơ</strong></p>
                                    <div className="button"><button variant="primary" onClick={handleShow}>NỘP ĐƠN</button></div>
                                    <ModalRecruitment show={show} handleClose={handleClose} handleShow={handleShow} />
                                </div>
                                <div className="col-8">
                                    <p>Hà Nội</p>
                                    <p>Nhân viên</p>
                                    <p>Nhân viên chính thức</p>
                                    <p>1 năm</p>
                                    <p>8.000.000đ-12.000.000đ</p>
                                    <p>Thiết kế</p>
                                    <p>30/6/2011</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__content--detail">
                    <strong>Phúc lợi</strong>
                    <div className="content">
                        <div className="row">
                            <div className="col-6">
                                <p>Bảo hiểm</p>
                                <p>Thưởng</p>
                                <p>Đào tạo</p>
                            </div>
                            <div className="col-6">
                                <p>Du lịch</p>
                                <p>Chăm sóc sức khỏe</p>
                                <p>Tăng lương</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__content--detail">
                    <strong>Mô tả công việc</strong>
                    <div className="content">
                        <p>1.Thực hiện việc triển khai các phương án bảo vệ tại tòa nhà an ninh, an toàn, phòng chống cháy nổ theo sự phân công của Trưởng phòng.</p>
                        <p>2.Tuần tra kiểm soát thường xuyên các hệ thống thiết bị theo dõi chống trộm, camera an ninh đồng thời giám sát chặt chẽ việc hối hợp các dịch vụ An ninh thuê ngoài</p>
                        <p>3.Thực hiện việc giám sát, quản lý giám sát các hoạt động dịch vụ tại chỗ như nhà thầu thi công mộc nề điện nước, vệ sinh công cộng, cung cấp nước uống, thay thế các vậy trang trí, hoa tươi cây xanh...</p>
                        <p>4.Phối hợp với các đầu mối trong Tập đoàn làm việc với Công an, chính quyền địa phương cảnh sát PCCC đẻ giải quyết các tình huống phát sinh tại khu vực được phân công phục vụ.</p>
                        <p>5.Thực hiện các công việc theo yêu cầu của Trưởng phòng an ninh bảo vệ và Trưởng Ban thanh tra</p>
                    </div>
                </div>
                <div className="main__content--detail">
                    <strong>Yều cầu công việc</strong>
                    <div className="content">

                        <p>Tốt nghiệp từ THPT trở lên (Ưu tiên bộ đội, Công an xuất ngũ) hoạc các trường đào tạo về nghiệp vụ Bảo vệ, an ninh...</p>
                        <p>Kiến thức về sử dụng trang thiết bị bảo vệ, PCCC và các dụng cụ phục vụ nghiệp vụ An ninh</p>
                        <p>Kiến thức về Luật dân sự, quản lý tòa nhà, phòng chống bạo động</p>
                        <p>Kỹ năng sử dụng vũ khí, kỹ năng phân tích và xử lý tình huống.
                                            <br />  Thành thạo vi tính văn phòng</p>
                        <p>Tối thiểu 1 năm kinh nghiệm về các nghiệp vụ An ninh, bộ đội, xử lý phòng chống bạo động, bảo vệ tòa nhà...Tận tâm, tích cực, bền bỉ, văn minh, lịch sự.</p>
                        <p>Sức khỏe tốt, không dị tật hình thể, không có bệnh kinh niên</p>

                    </div>
                </div>
            </div>
        </div>
    )
}