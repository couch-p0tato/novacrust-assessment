"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { PaymentProps } from "@/types"


export default function Payment({ label, value, options, onChange, placeholder = "Select an option" }: PaymentProps) {
  
  const [open, setOpen] = useState(false)
  
  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-sm font-medium text-[#013941]">
        {label}
      </span>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded-full border-gray-200 bg-white px-4 py-6 text-base font-normal hover:bg-gray-50 hover:text-black"
          >
            {selectedOption ? (
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center">
                   {selectedOption.icon}
                </div>
                <span className="font-medium text-[#013941]">{selectedOption.label}</span>
              </div>
            ) : (
              <span className="text-[#013941] text-sm ml-1.5">{placeholder}</span>
            )}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-[#013941] mr-1.5" />
          </Button>
        </PopoverTrigger>
        
        <PopoverContent className="p-0" align="center" style={{ width: 'var(--radix-popover-trigger-width)' }}>
          <Command>
            <CommandList>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      onChange(option.value)
                      setOpen(false)
                    }}
                    className="cursor-pointer py-3"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="mr-3 flex h-6 w-6 items-center justify-center">
                        {option.icon}
                    </div>
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}