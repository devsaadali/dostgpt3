export default function show_days_past_date_created  (date_created) {
    let today = new Date();
let yyyy_mm_dd = today.toISOString().substring(0,10);


    const diffInMs = today - new Date(date_created)
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24)
     if (diffInDays >= 730){
        diffInDays = `${Math.floor(diffInDays/730,0)} years ago`
    }
    else if (diffInDays >= 365){
        diffInDays = `${Math.floor(diffInDays/365,0)} year ago`
    }
    else if (diffInDays >= 60){
        diffInDays = `${Math.floor(diffInDays/61,0)} months ago`
    }
    else if (diffInDays >= 30){
        diffInDays = `${Math.floor(diffInDays/30,0)} month ago`
    }
    else if (diffInDays >= 14){
        diffInDays = `${Math.floor(diffInDays/14,0)} weeks ago`
    }
    else if (diffInDays >= 7){
        diffInDays = `${Math.floor(diffInDays/7)} week ago`
    }
    else if (diffInDays <= 1){
        diffInDays = `today`
    }
    else if (diffInDays < 7){
        diffInDays = `${Math.floor(diffInDays,0)} days ago`
    }
    return diffInDays
  }