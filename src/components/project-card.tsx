"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  images?: readonly string[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  images,
  video,
  links,
  className,
}: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const hasMultipleImages = images && images.length > 1;
  const AUTO_SLIDE_INTERVAL = 5000;

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });
  }, [api]);

  useEffect(() => {
    if (!hasMultipleImages || !api) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (AUTO_SLIDE_INTERVAL / 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [hasMultipleImages, api, current]);

  return (
    <Card className="group flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <div className="relative">
        {video && !images?.length && (
          <Link
            href={href || "#"}
            className={cn("block cursor-pointer", className)}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          </Link>
        )}

        {images && images.length > 0 && !video && (
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: AUTO_SLIDE_INTERVAL,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Link
                    href={href || "#"}
                    className={cn("block cursor-pointer", className)}
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {hasMultipleImages && (
              <>
                <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none text-white hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none text-white hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Indicateurs de slide */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        index === current
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/50 hover:bg-white/75",
                      )}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Barre de progression */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20">
                  <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </>
            )}
          </Carousel>
        )}
      </div>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
