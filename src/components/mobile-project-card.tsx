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
import { useTheme } from "next-themes";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  images?: readonly string[];
  darkImages?: readonly string[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  mobileStyles?: {
    gradientFrom?: string;
    gradientVia?: string;
    gradientTo?: string;
  };
}

export function MobileProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  images,
  darkImages,
  video,
  links,
  className,
  mobileStyles,
}: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const gradientFrom = mobileStyles?.gradientFrom || "#115E59";
  const gradientVia = mobileStyles?.gradientVia || "#0d4542";
  const gradientTo = mobileStyles?.gradientTo || "#115E59";
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeImages =
    mounted && resolvedTheme === "dark" && darkImages && darkImages.length > 0
      ? darkImages
      : images;

  const hasMultipleImages = themeImages && themeImages.length > 1;
  const AUTO_SLIDE_INTERVAL = 5000;

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || !themeImages?.length) return;
    setCurrent(0);
    api.scrollTo(0);
  }, [api, themeImages?.length, mounted, resolvedTheme]);

  return (
    <Card className="group flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      {/* Background animé avec gradient + image mobile centrée */}
      <div className="relative h-60 overflow-hidden">
        {/* Gradient animé en arrière-plan */}
        <div
          className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%]"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
          }}
        />

        {/* Carrousel d'images mobiles */}
        {themeImages && themeImages.length > 0 && (
          <div className="relative h-full flex items-center justify-center px-4">
            <Carousel
              setApi={setApi}
              className="w-full max-w-xs"
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: AUTO_SLIDE_INTERVAL,
                }),
              ]}
            >
              <CarouselContent>
                {themeImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center items-center">
                      <div className="relative top-10 w-32 h-auto shadow-2xl shadow-black/50 rounded-xl overflow-hidden hover:scale-105 transition-transform">
                        <Image
                          src={image}
                          alt={`${title} - Screenshot ${index + 1}`}
                          width={300}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {hasMultipleImages && (
                <>
                  <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/30 border-none text-white hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CarouselNext className="right-2 bg-white/20 hover:bg-white/30 border-none text-white hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {themeImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                          "h-2 rounded-full transition-all",
                          index === current
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/75",
                        )}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
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
