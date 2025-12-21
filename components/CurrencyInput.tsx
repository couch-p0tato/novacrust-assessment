"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CurrencyInputProps } from "@/types"


export default function CurrencyInput({ label, amount, currency, options, onAmountChange, onCurrencyChange}: CurrencyInputProps) {
  
  const [open, setOpen] = useState(false)
  const selectedCurrency = options.find((c) => c.value === currency) || options[0]

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 hover:border-gray-300">
      
      <span className="text-sm font-medium text-[#828282]">
        {label}
      </span>

      <div className="flex items-center justify-between gap-4">
        <Input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className="border-none shadow-none font-bold p-0 focus-visible:ring-0 h-auto w-full placeholder:text-gray-300"
          placeholder="0.00"
          style={{ fontSize: '22px' }}
          required
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="rounded-full bg-gray-100 border-none px-2 py-4 text-xs hover:bg-gray-200 flex items-center gap-1.5"
            >
              <span className="font-normal text-base">{selectedCurrency?.icon}</span>
              <span className="font-normal text-sm">{selectedCurrency?.label}</span>
              <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          
          <PopoverContent className="w-fit rounded-xl py-1 px-1.5" align="end">
            <Command>
              <CommandInput placeholder="Search..." />
              <CommandList>
                <CommandEmpty>No token found.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        onCurrencyChange(currentValue)
                        setOpen(false)
                      }}
                      className="cursor-pointer text-xs py-2.5 space-y-2.5"
                    >
                      {/* <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          currency === option.value ? "opacity-100" : "opacity-0"
                        )}
                      /> */}

                      {/* Currency Icon */}
                      <span>{option.icon}</span>
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}