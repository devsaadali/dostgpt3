export default function gtagEvent(ACTION, category, label, value) {
    window.gtag("event", ACTION, {
        event_category: category,
        event_label: label,
        value: value
    })
}
