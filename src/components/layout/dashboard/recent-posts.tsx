"use client";
import { useState, useEffect } from "react";
import Spinner from "@/components/ui/spinner";
import { useRecentPostQuery } from "@/lib/features/posts-endpoints";
import Slider from "react-slick";
import PostCard from "./post-card";
import SectionHeader from "./section-header";

const RecentPosts = () => {
  const { data, isLoading } = useRecentPostQuery(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLargeTablet, setIsLargeTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
      setIsTablet(window.innerWidth < 840);
      setIsLargeTablet(window.innerWidth < 1080);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [window]);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 14000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const settingsForLT = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 12000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <>
      <SectionHeader name="Recent Posts" />
      {isLoading ? (
        <Spinner />
      ) : isMobile ? (
        <div className="w-full grid grid-cols-1 gap-4">
          {data?.results.slice(0, 3).map((post, index) => (
            <PostCard key={index} data={post} className="mb-4 w-full" />
          ))}
        </div>
      ) : isTablet ? (
        <div className="w-full grid grid-cols-2">
          {data?.results.slice(0, 4).map((post, index) => (
            <PostCard key={index} data={post} className="mb-4" />
          ))}
        </div>
      ) : isLargeTablet ? (
        <Slider {...settingsForLT} className="center w-full ">
          {data?.results.slice(0, 6).map((post, index) => (
            <PostCard key={index} data={post} className="mx-2" />
          ))}
        </Slider>
      ) : (
        <Slider {...settings} className="center w-full ">
          {data?.results.slice(0, 6).map((post, index) => (
            <PostCard key={index} data={post} className="mx-2" />
          ))}
        </Slider>
      )}
    </>
  );
};

export default RecentPosts;
