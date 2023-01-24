// import { Input, Text } from "@chakra-ui/react";
// import { useState } from "react";

// const searchBar = ({ kolory }) => {
//   const [value, setValue] = useState("");

//   const handleNumber = (event) => {
//     const colorId = event.target.value.replace(/\D/g, "");

//     setValue(colorId);
//     searchColorTable(colorId);
//   };
//   async function searchColorTable(colorId: number) {
//     if (colorId == 1) {
//       console.log("mamy to");
//     } else {
//       console.log("lipa");
//     }
//   }

//   return (
//     <div>
//       <div>Search items by ID</div>
//       <Input
//         mb="20px"
//         type="text"
//         placeholder="ID"
//         value={value}
//         onChange={handleNumber}
//       />
//       <Text>Szukam: {value}</Text>
//       {/* {kolory
//         .filter((data) => data.id.includes(value))
//         .map((data) => (
//           <li key={data.id}>{data.id}</li>
//         ))}
//       ; */}
//     </div>
//   );
// };

// export default searchBar;
