"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { getReviews } from "@/app/actions/getReviews";

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getReviews();
      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="text-center mb-10 px-3">
      <h2 className="font-rosarivo-italic text-redText text-5xl font-bold mb-3">
        Client Highlights
      </h2>
      <h3 className=" text-neutral-950 text-xl font-medium mb-6">
        Don't Believe Us? Let Our Clients Do The Convincing
      </h3>
      <Carousel className="max-w-xl mx-auto">
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="pl-4">
              <div className="bg-primary p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                <div className="text-redText mb-2 text-3xl">
                  {renderStars(review.rating)}
                </div>
                <p className="text-neutral-950 text-xl">{review.review}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-redText" />
        <CarouselNext className="bg-redText"/>
      </Carousel>
    </section>
  );
};

export default Reviews;
