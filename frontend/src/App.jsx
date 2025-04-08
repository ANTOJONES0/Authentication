import {  Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home"
import './styles/App.css';
import Service from "./pages/Service";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";




function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={< Home/>} />
        <Route path="/services" element={< Service/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    

      

      

      

      
    
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import './styles/App.css'; // Create a custom CSS file for styles

// const categories = {
//   'Stimulating Drinks': [
//     { name: 'Live Kumbakonam Degree Coffee', img: 'https://i.imgur.com/OXK7xDA.jpg' },
//     { name: 'Assam Tea', img: 'https://i.imgur.com/Kg03Wa5.jpg' },
//     { name: 'Milk', img: 'https://i.imgur.com/1OB7CyB.jpg' },
//     { name: 'Horlicks', img: 'https://i.imgur.com/XM7COcP.jpg' },
//     { name: 'Boost', img: 'https://i.imgur.com/tW9EzrO.jpg' },
//     { name: 'Badam Milk', img: 'https://i.imgur.com/YrFSCjF.jpg' },
//     { name: 'Extra Item 1', img: 'https://via.placeholder.com/150' },
//     { name: 'Extra Item 2', img: 'https://via.placeholder.com/150' },
//   ],
//   'Evening Snacks Stall': [
//     { name: 'Samosa', img: 'https://via.placeholder.com/150' },
//     { name: 'Pakora', img: 'https://via.placeholder.com/150' },
//     { name: 'Cutlet', img: 'https://via.placeholder.com/150' },
//     { name: 'Bonda', img: 'https://via.placeholder.com/150' },
//     { name: 'Vada', img: 'https://via.placeholder.com/150' },
//     { name: 'Bhaji', img: 'https://via.placeholder.com/150' },
//   ],
// };

// const itemsPerPage = 6;

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState('Stimulating Drinks');
//   const [page, setPage] = useState(1);

//   const items = categories[selectedCategory] || [];
//   const totalPages = Math.ceil(items.length / itemsPerPage);
//   const displayedItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setPage(1);
//   };

//   return (
//     <div className="app-container">
//       <div className="sidebar">
//         {Object.keys(categories).map((category) => (
//           <div
//             key={category}
//             className={`sidebar-item ${selectedCategory === category ? 'active' : ''}`}
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category}
//           </div>
//         ))}
//       </div>
//       <div className="content">
//         <div className="card-grid">
//           {displayedItems.map((item, index) => (
//             <div className="card" key={index}>
//               <img src={item.img} alt={item.name} className="card-img" />
//               <div className="card-text">{item.name}</div>
//             </div>
//           ))}
//         </div>
//         <div className="pagination">
//           <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
//           <span>Page {page} of {totalPages}</span>
//           <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
