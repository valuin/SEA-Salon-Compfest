"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { submitReservation } from "@/app/actions/reservation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [today, setToday] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset();
    const localDate = new Date(currentDate.getTime() - offset * 60000);
    setToday(localDate.toISOString().split("T")[0]);
  }, []);

  const handlePhoneChange = (e: any) => {
    const value = e.target.value;
    // Allow only digits
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
      // Handle error (e.g., show error message to user)
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 21; i++) {
      slots.push(`${i.toString().padStart(2, "0")}:00`);
    }
    return slots;
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
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium mb-1 text-neutral-950"
        >
          Type of Service
        </label>
        <Select
          value={service}
          onValueChange={setService}
          name="service"
        >
          <SelectTrigger
            id="service"
            name="service"
            className="w-full"
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Haircuts and Styling">
              Haircuts and Styling
            </SelectItem>
            <SelectItem value="Manicure and Pedicure">
              Manicure and Pedicure
            </SelectItem>
            <SelectItem value="Facial Treatments">Facial Treatments</SelectItem>
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
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          min={today}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-redText text-neutral-950"
          required
        />
      </div>
      <div>
        <label
          htmlFor="time"
          className="block text-sm font-medium mb-1 text-neutral-950"
        >
          Time
        </label>
        <select
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-redText text-neutral-950"
          required
        >
          <option value="">Select a time</option>
          {generateTimeSlots().map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
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
