"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/Calendar";
import { cn } from "@/lib/utils";

import { fetchBranches, Branch, Service } from "@/app/actions/branchActions";
import { submitReservation } from "@/app/actions/reservation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { Button } from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";

function generateTimeSlots(startTime: number, endTime: number) {
  const slots = [];
  for (let hour = startTime; hour < endTime; hour++) {
    const slot = `${hour}:00 - ${hour + 1}:00`;
    slots.push(slot);
  }
  return slots;
}

const ReservationForm = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [today, setToday] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = React.useState<Date>();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const branchesData = await fetchBranches();
        setBranches(branchesData);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchData();

    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset();
    const localDate = new Date(currentDate.getTime() - offset * 60000);
    setToday(localDate.toISOString().split("T")[0]);
  }, []);

  const handlePhoneChange = (e: any) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await submitReservation(formData);

    if (result.success) {
      router.push("/reservation/confirmed");
    } else {
      console.error("Error submitting reservation:", result.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md mx-auto mb-20 px-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-1 text-neutral-950"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-redText text-neutral-950"
          required
        />
      </div>
      <div>
        <label
          htmlFor="branch"
          className="block text-sm font-medium mb-1 text-neutral-950"
        >
          Branch
        </label>
        <Select
          value={selectedBranch?.id?.toString() || ""}
          onValueChange={(value) => {
            const branch =
              branches.find((branch) => branch.id.toString() === value) ?? null;
            setSelectedBranch(branch);
            setService("");
            setTime("");
          }}
          name="branch"
        >
          <SelectTrigger id="branch" name="branch" className="w-full">
            <SelectValue placeholder="Select a branch" />
          </SelectTrigger>
          <SelectContent>
            {branches.map((branch) => (
              <SelectItem key={branch.id} value={branch.id.toString()}>
                {branch.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-1 text-neutral-950"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          placeholder="Your Phone Number"
          onChange={handlePhoneChange}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-redText text-neutral-950"
          required
        />
      </div>
      {selectedBranch && (
        <>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium mb-1 text-neutral-950"
            >
              Type of Service
            </label>
            <Select value={service} onValueChange={setService} name="service">
              <SelectTrigger id="service" name="service" className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {selectedBranch.services &&
                selectedBranch.services.length > 0 ? (
                  selectedBranch.services
                    .flatMap((branchService) => branchService.service)
                    .map((service) => (
                      <SelectItem
                        key={service.id}
                        value={service.name}
                      >
                        {service.name}
                      </SelectItem>
                    ))
                ) : (
                  <p className="text-sm text-neutral-700">
                    No services available
                  </p>
                )}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium mb-1 text-neutral-950"
            >
              Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  name="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-redText text-neutral-950",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-neutral-950" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span className="text-neutral-950 text-base">
                      Pick a date
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date(today)}
                />
              </PopoverContent>
            </Popover>
            <input
              type="hidden"
              id="date"
              name="date"
              value={date ? date.toISOString().split("T")[0] : ""}
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium mb-1 text-neutral-950"
            >
              Time
            </label>
            <Select value={time} onValueChange={setTime} name="time">
              <SelectTrigger
                id="time"
                name="time"
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-redText text-neutral-950"
              >
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {generateTimeSlots(
                  parseInt(selectedBranch.openingTime.split(":")[0]),
                  parseInt(selectedBranch.closingTime.split(":")[0])
                ).map((slot) => (
                  <SelectItem key={slot} value={slot.toString()}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      )}
      <button
        type="submit"
        className="w-full bg-neutral-950 text-white px-4 py-2 rounded-md hover-effect flex justify-center items-center"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : "Make Reservation"}
      </button>
    </form>
  );
};

export default ReservationForm;
