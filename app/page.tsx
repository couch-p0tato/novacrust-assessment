"use client"

import { useState } from "react"
import InitiateSwap from "@/components/InitiateSwap"
import RecipientBank from "@/components/RecipientBank"

export default function CryptoExchangeFlow() {

  // To track current step
  const [currentStep, setCurrentStep] = useState(1);

  // Next step
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }

  // Previous step
  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1)
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center py-4 bg-[#F5F5F5]">
      {currentStep === 1 && (
        <InitiateSwap
          onNext={handleNext} 
        />
      )}

      {currentStep === 2 && (
        <RecipientBank 
          onBack={handleBack} 
          onNext={handleNext} 
        />
      )}
    </main>
  )
}