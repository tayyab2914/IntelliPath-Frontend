export const GET_PAGINATION_DETAILS = (currentPage, pageSize, filteredData) => {
    if(!filteredData)
        return
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = filteredData?.slice(startIndex, endIndex);
  return displayedData;
};

export const FORMAT_TIMESTAMP = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    // Convert 24-hour format to 12-hour format
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  
    // Format date as day/month/year
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
  
    return `${formattedHours}:${formattedMinutes} ${ampm} ${day}/${month}/${year}`;
  };
  
  export function TRUNCATE_STRING(str,length=30) {
    if (str?.length <= length) {
      return str;
    } else {
      return `${str?.slice(0, length)}...`;
    }
  }
  
 export const CAPITALIZE_STRING =(str)=> str.replace(/\b\w/g, char => char.toUpperCase());



 
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
 export async function waitForSeconds(sec=2) {
    console.log("Waiting for 2 seconds...");
    await sleep(sec*1000);
    console.log("Done waiting!");
  }