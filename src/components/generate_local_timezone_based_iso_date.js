export default function generate_local_timezone_based_iso_date(date, with_time_zone = false) {
    if (typeof date != "object") {
      date = new Date(date)
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so adding 1
    const day = String(date.getDate()).padStart(2, "0");
  
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    const IsoFormatDateStringWithLocalTimeZone = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  
    const parsed_date = IsoFormatDateStringWithLocalTimeZone;
    if (with_time_zone) {
      // return parsed_date
      return parsed_date.slice(0, 10)
    } else {
      return parsed_date.slice(0, 10)
    }
  }