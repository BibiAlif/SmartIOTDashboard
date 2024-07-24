import axios from 'axios';


// Function to fetch data from Azure
export const fetchLPGData = async () => {
  try {
    const response = await axios.get('https://your-azure-api-url/data'); // Replace with your Azure API URL
    LPGTableData = response.data;
  } catch (error) {
    console.error('Error fetching data from Azure:', error);
  }
};


let LPGTableData = [
  {
    icon: "fas fa-fire",
    name: "LPG123456",
    battery: ["58%"],
    gasreading: ["98%"],
    online: true,
    date: "23/04/18",
    status: true,
  },
  {
    icon: "fas fa-fire",
    name: "LPG123456",
    battery: ["58%"],
    gasreading: ["98%"],
    online: true,
    date: "23/04/18",
    status: true,
  },
  {
    icon: "fas fa-fire",
    name: "LPG123456",
    battery: ["58%"],
    gasreading: ["98%"],
    online: true,
    date: "23/04/18",
    status: true,
  },
];


export { LPGTableData };
