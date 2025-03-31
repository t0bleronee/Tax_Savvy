const mongoose = require('mongoose');
const {comDB}= require("../config/db");
const { Schema, model } = mongoose;

const regimeSchema = new Schema({
  totalIncome: { type: Number ,default: 0},
  exemptAllowances: { type: Number ,default: 0},
  standardDeductions: { type: Number,default: 0 },
  chapterVIA: { type: Number ,default: 0},
  taxableIncome: { type: Number ,default: 0},
  taxPayable: { type: Number ,default: 0},
  incomeTax: { type: Number ,default: 0},
  surcharge: { type: Number ,default: 0},
  cess: { type: Number,default: 0 },
  netIncomeAfterTax: { type: Number ,default: 0},
  effectiveTaxRate: { type: String ,default: "0%"}
}, { _id: false });  // Prevents creating an unnecessary ID for subschema
const taxSchema = new Schema({
    email: { type: String },
    age: { type: Number ,default: 59}, 
    salary: { type: Number, default: 0 }, 
    interestIncome: { type: Number, default: 0 }, 
    rentalIncome: { type: Number, default: 0 },
    digitalAssetsIncome: { type: Number, default: 0 }, 
    exemptAllowances: { type: Number, default: 0 },
    homeLoanInterestSelf: { type: Number, default: 0 }, 
    homeLoanInterestLetOut: { type: Number, default: 0 }, 
    otherIncome: { type: Number, default: 0 },
    deductions80C: { type: Number, default: 0 }, 
    medicalInsurance80D: { type: Number, default: 0 }, 
    homeLoanInterest80EEA: { type: Number, default: 0 }, 
    npsEmployer80CCD2: { type: Number, default: 0 }, 
    interestFromDeposits80TTA: { type: Number, default: 0 },
    donations80G: { type: Number, default: 0 }, 
    npsEmployee80CCD: { type: Number, default: 0 }, 
    otherDeductions: { type: Number, default: 0 }, 
    oldRegime: { type: regimeSchema }, // Not required
    newRegime: { type: regimeSchema }, // Not required
    createdAt: { type: Date, default: Date.now },
  }, { timestamps: true });

  const taxData = comDB.model('taxData', taxSchema);

  module.exports = taxData;