import React from "react";
function Contact() {
    return (
        <div className="App">
            <h1>this is the contact page........</h1>

        </div>
    );
}

export default Contact;
// import { useState } from 'react';
// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function SelectSmall() {
//     const [age, setAge] = React.useState('');

//     // const handleChange = (event) => {
//     //     setAge(event.target.value);
//     // };
//     const states = ['up', 'delhi', 'gujrat'];
//     const cities = {
//         up: ['f', 'g', 'l'],
//         delhi: ['a', 'b'],
//         gujrat: ['tr', 'trt', 'rtt'],
//     };
//     const [city, setCities] = useState(null);
//     return (
//         <FormControl sx={{ m: 1, minWidth: 120 }} size="small" classname="flex">
//             <InputLabel id="demo-select-small">Age</InputLabel>
//             <Select
//                 labelId="demo-select-small"
//                 id="demo-select-small"

//                 label="Age"

//                 onChange={(e) => {
//                     setCities(e.target.value);
//                 }}
//             >
//                 <MenuItem value="">
//                     <em>None</em>
//                 </MenuItem>
//                 {states.map((val) => {
//                     return (
//                         <MenuItem className="border-2 border-black p-2  capitalize">
//                             {val}
//                         </MenuItem>
//                     );
//                 })}
              
//             </Select>


//             <Select
//                 labelId="demo-select-small"
//                 id="demo-select-small"
          

//                 onChange={(e) => {
//                     setCities(e.target.value);
//                 }}
//             >
//                 <MenuItem value="">
//                     <em>None</em>
//                 </MenuItem>
//                 {city
//                     ? cities[city].map((val) => {
//                         return (
//                             <MenuItem className="border-2 border-black p-4 mt-4 capitalize text-mdb text-black w-10 m-10">
//                                 {val}
//                             </MenuItem>
//                         );
//                     })
//                     : ''}

//             </Select>
//         </FormControl>
//     );
// }
