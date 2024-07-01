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
    <section className="text-center mb-10 px-14 items-center justify-center">
      <h2 className="font-rosarivo-italic text-center text-redText text-4xl mb-3 md:text-5xl md:mb-10">
        Client Highlights
      </h2>
      <h3 className=" text-neutral-950 text-xl font-medium mb-6">
        Don't Believe Us? Let Our Clients Do The Convincing
      </h3>
      <Carousel className="max-w-xl mx-auto px-2">
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="pl-4">
              <div className="bg-primary p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                <div className="text-redText mb-2 text-3xl">
                  {renderStars(review.rating)}
                </div>
                <p className="text-neutral-950 text-xl overflow-wrap: break-words">{review.review}</p>
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
