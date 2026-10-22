import createImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: string) {
  return imageBuilder.image(source);
}
