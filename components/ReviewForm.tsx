"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { submitReview } from "@/app/actions/reviews";
import { SubmitButton } from "./submit-button";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("rating", rating.toString());
    const result = await submitReview(formData);

    if (result.success) {
      router.push("/review/submitted");
    } else {
      console.error("Error submitting review:", result.error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary p-16 flex text-neutral-950">
      <div className="w-1/2 pr-12 mr-8">
        <h1 className="leading-snug text-3xl md:text-5xl font-serif mb-4 text-redText">
          We'd love to get your feedback
        </h1>
        <p className="text-neutral-950 text-lg md:text-xl">
          Tell us about your experience so we can improve on your future visits.
        </p>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6 p-1">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-redText"
            >
              What's your name?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-neutral-950 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="review"
              className="block text-sm font-medium mb-1 text-redText"
            >
              Share your thoughts
            </label>
            <textarea
              id="review"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full bg-transparent border-b border-neutral-950 focus:outline-none"
              rows={2}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-redText">
              Your rating
            </label>
            <div className="flex pr-6">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={`bg-transparent border-none outline-none cursor-pointer ${
                      index <= (hover || rating)
                        ? "text-redText"
                        : "text-gray-400"
                    }`}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="text-4xl">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </div>
          <input type="hidden" name="rating" value={rating} />
          <SubmitButton
            formAction="submit"
            className="bg-neutral-950 text-primary px-6 py-2 rounded hover:bg-redText hover:-translate-y-1 hover:shadow-lg hover:shadow-redText/50 active:scale-90 duration-150"
          >
            Submit
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
