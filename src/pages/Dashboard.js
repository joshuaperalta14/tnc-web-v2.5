import React from 'react';
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard-content">
            <Sidebar />
            <div className="horizontal-box-container">
                <div className="box item-box">
                    <h2 className="dashboard-label">Items</h2>
                </div>

                <div className="box suppliers-box">
                    <h2 className="dashboard-label">Suppliers</h2>
                </div>

                <div className="box expenses-box">
                    <h2 className="dashboard-label">Expenses</h2>
                </div>
            </div>

            <div className="dashboard-box">
                <h2 className="dashboard-label">Inventory Tracking</h2>
                <p className="dashboard-text">Create a dedicated section within the dashboard to monitor inventory levels, product categories, and stock movements.</p>
            </div>

            <div className="dashboard-box">
                <h2 className="dashboard-label">Expense Tracking</h2>
                <p className="dashboard-text">Establish a separate section for tracking expenses related to inventory management, procurement, and operational costs.</p>
            </div>

            <div className="dashboard-box">
                <h2 className="dashboard-label">Suppliers Tracking</h2>
                <p className="dashboard-text">Develop a specific section for tracking suppliers, supplier performance metrics, and transaction history.</p>
            </div>

            <div className="dashboard-box">
                <h2 className="dashboard-label">Integration and Automation</h2>
                <p className="dashboard-text">Integrate the dashboard with other business systems and software applications.</p>
            </div>

            <div className="dashboard-box">
                <h2 className="dashboard-label">Customization and Personalization</h2>
                <p className="dashboard-text">Offer customization options for users to personalise their dashboard experience.</p>
            </div>

            <div className="dashboard-box">
                <h2 className="dashboard-label">Responsive Design and Accessibility</h2>
                <p className="dashboard-text">Ensure the dashboard design is responsive and accessible across different devices, screen sizes, and web browsers.</p>
            </div>
        </div>
    );
}

export default Dashboard;