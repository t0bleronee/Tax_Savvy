import React from "react";
import CardComponent from "./CardComp";
import "../css/TaxFeatures.css";


// Import the CSS file for styling
const features = [
  {
    header: "Tax Calculator",
    emoji: "🔢",
    items: [
      "Estimate your tax instantly",
      "Compare Old vs. New regime"
    ],
    buttonText: "Calculate Now",
    buttonLink: "/tax-calculator",
  },
  {
    header: "Budget Insights",
    emoji: "📊",
    items: [
"Tax & budget at a glance ",
"Key financial insights, simplified!"
    ],
    buttonText: "View Insights",
    buttonLink: "/budget-report",
  },
  {
    header: "Budget Features",
    emoji: "🏛️",
    items: [
      "Explore new budget policies",
      "See what impacts you"
    ],
    buttonText: "Discover Schemes",
    buttonLink: "/budget-features",
  },
  {
    header: "Tax Comparison Insights",
    emoji: "📈",
    items: [
      "Compare Old vs. New Regime",
      "Insights based on the latest tax calculation"
    ],
    buttonText: "Compare Now",
    buttonLink: "/comparison",
},
  {
    header: "AI Tax Assistant",
    emoji: "🤖",
    items: [
      "Get instant tax answers",
      "Personalized 24/7 support"
    ],
    buttonText: "Ask Now",
    buttonLink: "/ai-chatbot",
  },
  {
    header: "Tax Saving Tips",
    emoji: "💰",
    items: [
      "Maximize savings smartly",
      "Strategies based on the latest tax calculation"
    ],
    buttonText: "Explore Strategies",
    buttonLink: "/financial-tipse",
  },
];

export default function TaxFeatures() {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        {features.map((feature, index) => (
          <CardComponent key={index} {...feature} buttonClass="button-green" />
        ))}
      </div>
    </div>
  );
}