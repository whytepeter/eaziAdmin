import axios from "axios";
import { AUTH_CONTEXT } from "@/api/api";
import { useToast } from "vue-toastification";
import dayjs from 'dayjs'
const toast = useToast();

export const helperFunctions = {

  truncateAmount(amount) {
    try {
      // Truncate finalAmount to 2 decimal places without rounding up
      if (amount === undefined || amount === null) {
        return 0;
      }
      const truncatedAmount = Math.trunc(amount * 100) / 100;
      return truncatedAmount;
    } catch (error) {
      console.error("error:", error);
      return 0;
    }
  },

  formatAmount(amount) {
    try {
      if (amount === undefined || amount === null || amount === 0) {
        return "₦0.00";
      }
      let formatedAmount = parseInt(amount);
      formatedAmount = amount.toLocaleString("en-NG", {
        style: "currency",
        code: "NG",
        currency: "NGN",
      });

      return formatedAmount;
    } catch (error) {
      console.error("error:", error);
      return 0;
    }
  },

  processNumber(phoneNumber) {
    if (phoneNumber) {
      let phone = phoneNumber;
      let firstDigit = phone.charAt(0);
      if (firstDigit == "0") {
        let formatted = phone.replace("0", "234").replace(/\s+/g, "");
        return formatted;
      } else if (firstDigit == 2) {
        let formatted = phone.replace(/\s+/g, "");
        return formatted;
      } else if (firstDigit == "+") {
        let formatted = phone.substring(1).replace(/\s+/g, "");
        return formatted;
      }
    } else {
      return "";
    }
  },

 
  processDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  },

  validateEmail(email) {
    if (email) {
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    }
  },
  
  validatePhone(phone) {
    // if (phone.trim() == "") {
    //   return false;
    // }
    if (phone.length) {
      if (phone.charAt(0) == 0 && phone.length !== 11) {
        return false;
      } else if (phone.charAt(0) == 2 && phone.length !== 13) {
        return false;
      } else {
        // errorRules.email = false;
        // errorRules.pin = false;

        return true;
      }
    }
  },

  formatDate(payload, time = undefined) {
    if(time){
      const date = new Date(payload);
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes();
      const period = date.getHours() >= 12 ? 'PM' : 'AM';
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
    }else {
      return dayjs(payload).format('DD/MMM/YYYY')
    }
  },

  async uploadFileToServer(fileToUpload) {
    //   return true;
    // console.log(fileToUpload, "TOBEUPLOADED");
    if (fileToUpload) {
      const formData = new FormData();
      const operation = "gcpUpload";
      formData.append(
        "operations",
        `{
            "query": "mutation ${operation}($file:Upload!) { ${operation}(file: $file){message data} }"
          }`
      );
      formData.append("map", `{"0": ["variables.file"]}`);
      formData.append("0", fileToUpload);
      try {
        const response = await axios.post(
          "https://eazipay-employee-v3-vety3kdfea-uc.a.run.app/graphql",
          // "http://localhost:4001/graphql",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: AUTH_CONTEXT(),
            },
          }
        );
        // console.log(response.data.data.gcpUpload.data.url, "FILEURL");
        if (response.data && response.data.data) {
          return response.data.data.gcpUpload.data.url;
        } else {
          throw new Error(response.data.errors[0].message);
        }
        // return response.data && response.data.data
        //   ? response.data.data.gcpUpload.data.url
        //   : undefined;
      } catch (err) {
        toast.error(err.message);
        console.log(err.message);
        return null;
      }
    }
    return "";
  },


  
async copyText (text, message = 'Copied'){
  await navigator.clipboard.writeText(text);
  toast.info(message);
},

formatPhone(digits){
  digits = digits && digits.toString().charAt(0) === '0' ?  '234' + digits.slice(1) : digits
  return digits ?  `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)} ${digits.slice(10)}` : 'Invalid Phone number'
},

 initials (name)  {
  if (name && name.length) {
    const arr = name.split(' ')
    const str1 = arr[0]
    const str2 = arr[1]
    return `${str1 ? str1.charAt(0).toUpperCase() : ''}${str2 ? str2.charAt(0).toUpperCase() : ''}`
  } else {
    return 'N/A'
  }
},

downloadBase64(base64String, fileName){
  const link = document.createElement('a');
  link.href = `data:application/pdf;base64,${base64String}`;
  link.download = fileName;
  link.click();
},

 viewPDF(base64String) {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });

  const pdfUrl = URL.createObjectURL(blob);
  window.open(pdfUrl, '_blank');
}

};
