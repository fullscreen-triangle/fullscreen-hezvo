import {
  ArrowSmallLeftIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CameraIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ProfileLayout from "@/layout/ProfileLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { profiles } from "@/data/profiles";
import { motion } from "framer-motion";

const ProfileDetail = () => {
  const router = useRouter();
  const { photoId } = router.query;
  const [photo, setPhoto] = useState();

  useEffect(() => {
    photoId && setPhoto(photos[photoId]);
  }, [photoId]);

  if (!photo) {
    return null;
  }

  return (
    <ProfileLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] min-h-screen">
        <div className="p-10">
          <div className="sticky top-10">
            <motion.div
              className="flex justify-between mb-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
            >
              <Link href="/">
                <a className="inline-flex items-center rounded-md border border-gray-300 bg-white pl-3 pr-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:border-purple-200 focus:outline-0 focus:ring-2 focus:ring-purple-300 group">
                  <ArrowSmallLeftIcon className="w-5 h-5 mr-2 text-gray-300 group-hover:text-purple-200" />
                  Back
                </a>
              </Link>
              <a
                href={photo.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-purple-600 text-sm tracking-tight font-medium focus:outline-0 focus:ring-2 focus:ring-purple-400 group"
              >
                View Source
                <ArrowUpRightIcon className="w-4 h-4 text-gray-400 ml-2 group-hover:text-purple-400" />
              </a>
            </motion.div>
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
              }}
              className="text-4xl font-bold tracking-tight"
            >
              {profiles.title}
            </motion.h2>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="mt-5 text-sm text-gray-600 space-y-2"
            >
              <p className="flex items-center">
                <CameraIcon className="w-4 h-4 mr-2 text-purple-500" />
                {profiles.author}
              </p>
              <p className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2 text-purple-500" />
                {profiles.location}
              </p>
              <p className="flex items-center">
                <CalendarDaysIcon className="w-4 h-4 mr-2 text-purple-500" />
                {profiles.date}
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
              className="mt-5 text-sm text-gray-500 space-y-5"
            >
              {profiles.text}
            </motion.div>
          </div>
        </div>
        <div className="overflow-hidden flex">
          <Image
            src={profiles.src}
            alt={profiles.title}
            placeholder="blur"
            blurDataURL={profiles.placeholder}
            width={profiles.width}
            height={profiles.height}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </ProfileLayout>
  );
};
export default ProfileDetail;
