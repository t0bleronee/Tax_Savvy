import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import LoginPage from './Screens/LoginPage';
import FinancialTipsPage from './Screens/fintips/FinancialTipsPage';
import MultiStepForm from "./Screens/TaxCalculator/MultiStepForm";  // Import Tax Calculator
import ComparisonTool from "./Screens/TaxCalculator/ComparisonTool";
import BudgetReport from "./Screens/BudgetInsights/BudgetReport";
import Chatbot from "./Screens/AIchatbot/Chatbot"; // Import Dashboard
import BudgetFeaturesApp from './Screens/BudgetFeatures/BudgetFeaturesApp';
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap for styling 
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/financial-tipse" element={<FinancialTipsPage />} /> 
          <Route path="/tax-calculator" element={<MultiStepForm />} /> 
          <Route path="/comparison" element={<ComparisonTool />} /> 
          <Route path="/budget-report" element={<BudgetReport />} /> 
          <Route path="/ai-chatbot" element={<Chatbot />} /> 
          <Route path="/budget-features" element={<BudgetFeaturesApp />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
