import { ReactNode } from "react"

// Define the shape of a currency option
export type CurrencyOption = {
  value: string
  label: string
  icon: string | ReactNode 
}

// This is the shape of the Props for the input component
// (You can keep this here if you want it globally reusable, 
// or keep it in the component file if it's private. 
// moving it here is fine too!)
export interface CurrencyInputProps {
  label: string            // "You pay" or "You receive"
  amount: string           // The number value (e.g., "1.00")
  currency: string         // The selected currency value (e.g., "eth")
  options: CurrencyOption[] // The list of available currencies
  onAmountChange: (value: string) => void
  onCurrencyChange: (value: string) => void
}

export interface PaymentProps {
  label: string
  value: string
  options: CurrencyOption[]
  onChange: (value: string) => void
  placeholder?: string
}