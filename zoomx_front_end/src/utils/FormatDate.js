import moment from 'moment';
export const FormatDate = (d) => {
    d = moment().format("DD-MM-YYYY");
    return d;
}