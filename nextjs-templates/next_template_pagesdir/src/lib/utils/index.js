import { toast } from "react-hot-toast";
import axios from "axios";

export const showToast = (
  msg = "Here is your toast",
  type = "success",
  time = 2000,
  primaryColor = "#096ffc"
) => {
  toast[type](msg, {
    duration: time,
    position: "top-center",
    // icon: "👏",
    iconTheme: {
      primary: primaryColor,
      secondary: "#f8f8f8"
    }
  });
};

// Function to convert the first character of a string to uppercase
export function capitalizeFirstLetter(string) {
  // Check if the string is not empty
  if (string.length > 0) {
    // Capitalize the first letter and concatenate it with the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    // Return empty string if input is empty
    return "";
  }
}

// Function to convert MongoDB date format to a custom format
export function convertMongoDBDate(mongoDate) {
  // Convert MongoDB date string to JavaScript Date object
  var dateObj = new Date(mongoDate);

  // Get month, day, year, hours, and minutes
  var month = dateObj.toLocaleString("default", { month: "short" });
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();

  // Convert hours to 12-hour format
  var period = "am";
  if (hours >= 12) {
    period = "pm";
    if (hours > 12) {
      hours -= 12;
    }
  }

  // Add leading zero if minutes are less than 10
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Format the date and time string
  var formattedDate = capitalizeFirstLetter(month) + " " + day + ", " + year;
  var formattedTime = hours + ":" + minutes + period;

  // Return formatted date and time
  return { Date: formattedDate, Time: formattedTime };
}

// Example usage:
/*var mongoDate = new Date("2024-02-10T02:19:00Z");
var formattedDateTime = convertMongoDBDate(mongoDate);
console.log(formattedDateTime); // Output: { Date: 'Feb 10, 2024', Time: '2:19am' }
*/

export const formatDate = date => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = key => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeLocalStorageItem = key => {
  localStorage.removeItem(key);
};

export const apiRequest = async (method, url, data = null, headers = {}) => {
  if (!method || !url) {
    throw new Error("Oops! Request method and URL are not specified.");
  }
  
  const options = {
    method: method,
    url: url,
  };
  
  if(data) options[data] = data;
  if(headers) options[headers] = headers;
  
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

export const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = password => {
  return password.length >= 8;
};
