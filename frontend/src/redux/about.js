import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: 'about',  // Match the name with the store key
    initialState: [
        {
            heading: 'Elevating Your Events with Exceptional Food.',
            paragraph: 'Venus is The Place where Food is Celebrated over 25 Years. We Love to Create Unforgettable Culinary Experiences.'
        },
        {
            heading: 'Indulge in a celebration with great food!',
            paragraph: 'Venus Catering Service is a professional catering company that was established in 1998, offering comprehensive services to meet all your culinary needs for nearly two decades. Our primary goal is to provide a unique and memorable dining experience with each meal we serve. We are committed to maintaining uncompromised quality, exceptional hygiene standards, meticulous presentation, and attention to detail to ensure the utmost satisfaction of our customers.'
        }
    ],
    reducers: {} // You can add actions here later if needed
});



export default aboutSlice.reducer;
