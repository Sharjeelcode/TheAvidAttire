// src/pages/AdminPanel.jsx
import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUsers from "../pages/AdminUsers";
import AdminProducts from "../pages/AdminProducts";
import AdminOrders from "../pages/AdminOrders";
import AdminAddProduct from "../pages/AdminAddProduct";

function AdminPanel() {
  return (
    <div>
      <nav className="sticky top-0">
        <ul className="flex gap-1 px-2 flex-col lg:flex-row  justify-center py-4 lg:gap-4 shadow-lg ">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `${isActive ? "text-[#F96A00] underline" : ""} font-semibold`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `${isActive ? "text-[#F96A00] underline" : ""} font-semibold`
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `${isActive ? "text-[#F96A00] underline" : ""} font-semibold`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/addproduct"
              className={({ isActive }) =>
                `${isActive ? "text-[#F96A00] underline" : ""} font-semibold`
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                `${isActive ? "text-[#F96A00] underline" : ""} font-semibold`
              }
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="addproduct" element={<AdminAddProduct />} />
      </Routes>
    </div>
  );
}

export default AdminPanel;
