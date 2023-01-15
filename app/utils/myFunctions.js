export function formatDate(date) {
    return new Date(date).toLocaleDateString('es-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" })
}
export function standarTime(time) {
    const hour = +time.slice(0, 2);
    const minutes = time.slice(-2)
    const amOrPm = hour >= 12 ? 'PM' : 'AM'
    let normalTime = hour % 12;
    if (normalTime !== 0) return normalTime + ':' + minutes + ' ' + amOrPm
    else
        return normalTime = 12 + ':' + minutes + ' ' + amOrPm
}