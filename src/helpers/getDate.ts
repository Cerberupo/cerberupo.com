export function getDate(t: Function, date: Date | null) {
    if (!date) return t('timeline.currently');
    return t(`timeline.months.${date.getMonth()}`) + ' ' + date.getFullYear();
}