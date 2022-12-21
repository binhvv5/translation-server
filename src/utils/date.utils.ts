import moment from 'moment';

export const FORMAT_DATE = 'YYYY-MM-DD HH:mm:ss SSS';

export const getDateTimeNow = () => {
    return moment(new Date()).format(FORMAT_DATE);
};
