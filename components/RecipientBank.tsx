"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Payment from "@/components/Payment"
import { CurrencyOption } from "@/types"

const bankOptions: CurrencyOption[] = [
  { 
    value: "access", 
    label: "Access Bank", 
    icon: ""
  },
  { 
    value: "gtb", 
    label: "GTBank", 
    icon: "" 
  },
  { 
    value: "zenith", 
    label: "Zenith Bank", 
    icon: ""
  },
  { 
    value: "uda", 
    label: "UBA", 
    icon: ""
  },
  { 
    value: "firstbank", 
    label: "First Bank", 
    icon: ""
  },
]

interface RecipientBankProps {
  onBack: () => void
  onNext: () => void
}

export default function RecipientBank({
  onBack,
  onNext,
}: RecipientBankProps) {
  const [bank, setBank] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  
  const accountName = "ODUTUGA GBEKE"

  return (
    <div className="w-[95%] md:w-[60%] lg:w-[55%] xl:w-[40%] flex items-center flex-col space-y-6 py-8 px-5 bg-white rounded-3xl shadow-sm">
      <div className="relative flex items-center justify-center w-[90%] xl:w-[80%] mb-8">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 w-fit cursor-pointer hover:bg-transparent"
          onClick={onBack}
        >
          <ArrowLeft className="h-6 w-6 text-[#013941] " />
        </Button>

        <h2 className="text-xl font-bold text-[#013941]">Recipient details</h2>
      </div>

      <div className="space-y-6 w-[90%] xl:w-[80%]">
        <div className="space-y-2">
          <Payment
            label="Bank"
            value={bank}
            onChange={setBank}
            options={bankOptions}
            placeholder="Select a bank"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="account-number"
            className="text-sm font-medium text-[#013941]"
          >
            Account number
          </Label>
          <Input
            id="account-number"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full rounded-full border-gray-200 bg-white px-4 py-6 text-base font-normal placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-[#013941] transition-colors shadow-none"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-[#013941]">
            Account name
          </Label>
          <div className="w-full rounded-full bg-gray-100 px-4 py-4 text-base font-medium text-[#013941]">
            {accountName}
          </div>
        </div>
      </div>

      <Button
        className="w-[90%] xl:w-[80%] rounded-full py-6 cursor-pointer bg-[#013941] hover:bg-[#012a2e] mt-10"
        onClick={onBack}
      >
        Next
      </Button>
    </div>
  )
}