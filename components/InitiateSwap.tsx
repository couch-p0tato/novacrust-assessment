"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import CurrencyInput from "@/components/CurrencyInput"
import { CurrencyOption } from "@/types"
import { Wallet, Building2, Globe, CreditCard } from "lucide-react"
import Payment from "@/components/Payment"

const cryptoOptions: CurrencyOption[] = [
  { value: "eth", label: "ETH", icon: "⟠" },
  { value: "usdt", label: "USDT - CELO", icon: "₮" },
  { value: "btc", label: "USDT - BNB", icon: "₿" },
]

const fiatOptions: CurrencyOption[] = [
  { value: "ngn", label: "NGN", icon: "₦" },
  { value: "usd", label: "USD", icon: "$" },
  { value: "gbp", label: "GBP", icon: "£" },
]

const walletOptions: CurrencyOption[] = [
  { 
    value: "metamask", 
    label: "Metamask",
    icon: <Wallet className="text-orange-500" /> 
  },
  { 
    value: "rainbow", 
    label: "Rainbow", 
    icon: <div className="h-4 w-4 rounded-full bg-linear-to-r from-blue-400 to-purple-500" /> 
  },
  { 
    value: "walletconnect", 
    label: "WalletConnect", 
    icon: <div className="h-4 w-4 rounded-full bg-blue-500" /> 
  },
]

const bankOptions: CurrencyOption[] = [
  { 
    value: "bank-transfer", 
    label: "Bank Transfer", 
    icon: <Building2 className="text-gray-600" /> 
  },
  { 
    value: "wire", 
    label: "Wire Transfer", 
    icon: <Globe className="text-blue-600" /> 
  },
  { 
    value: "card", 
    label: "Debit Card Deposit", 
    icon: <CreditCard className="text-purple-600" /> 
  },
]

interface InitiateSwapProps {
  onNext: () => void
}

export default function InitiateSwap({ onNext }: InitiateSwapProps) {

  const [payAmount, setPayAmount] = useState("1.00")
  const [payCurrency, setPayCurrency] = useState("eth")

  const [receiveAmount, setReceiveAmount] = useState("1.00")
  const [receiveCurrency, setReceiveCurrency] = useState("ngn")

  const [payFromMethod, setPayFromMethod] = useState("")
  const [payToMethod, setPayToMethod] = useState("")

  return (
      <div className="w-[95%] md:w-[60%] lg:w-[55%] xl:w-[40%] flex items-center flex-col py-8 lg:py-12 xl:py-6 px-10 bg-white rounded-3xl shadow-lg border-2 border-white">
        <Tabs defaultValue="cash" className="w-full flex flex-col items-center">
          <TabsList className="bg-[#F2F2F2] rounded-full p-0 w-fit md:w-fit">
            <TabsTrigger value="cash" className="data-[state=active]:bg-[#013c41] py-0.5 data-[state=active]:text-white h-full w-full rounded-full cursor-pointer text-xs">Crypto to cash</TabsTrigger>
            <TabsTrigger value="crypto" className="data-[state=active]:bg-[#013c41] py-0.5 data-[state=active]:text-white h-full w-full rounded-full cursor-pointer text-xs">Cash to crypto</TabsTrigger>
            <TabsTrigger value="fiat" className="data-[state=active]:bg-[#013c41] py-0.5 data-[state=active]:text-white h-full w-full rounded-full cursor-pointer text-xs">Crypto to fiat loan</TabsTrigger>
          </TabsList>

          <TabsContent value="cash" className="w-full mt-5 flex flex-col items-center">
            <div className="space-y-4 w-[95%] md:w-[90%] xl:w-[85%]">
              <div className="space-y-4">
                {/* Cyrpto "You Pay" */}
                <CurrencyInput 
                  label="You pay"
                  amount={payAmount}
                  currency={payCurrency}
                  options={cryptoOptions}
                  onAmountChange={setPayAmount}
                  onCurrencyChange={setPayCurrency}
                />

                {/* Fiat "You receive" */}
                <CurrencyInput 
                  label="You receive"
                  amount={receiveAmount}
                  currency={receiveCurrency}
                  options={fiatOptions}
                  onAmountChange={setReceiveAmount}
                  onCurrencyChange={setReceiveCurrency}
                />
              </div>

              <div className="space-y-4">
                  <Payment 
                      label="Pay from"
                      value={payFromMethod}
                      options={walletOptions}
                      onChange={setPayFromMethod}
                      placeholder="Select an option"
                    />
                  
                  <Payment
                      label="Pay to"
                      value={payToMethod}
                      options={bankOptions}
                      onChange={setPayToMethod}
                      placeholder="Select an option"
                    />
              </div>

              <Button onClick={onNext} variant="outline" className="w-full rounded-full py-6 cursor-pointer bg-[#013941] hover:bg-[#012a2e] hover:text-white text-white mt-4">Convert now</Button>
            </div>
          </TabsContent>

          <TabsContent value="crypto">Change your password here.</TabsContent>

          <TabsContent value="fiat">Change your password here.</TabsContent>
        </Tabs>
      </div>
  );
}
