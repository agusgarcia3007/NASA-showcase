import { http } from "@/config/http";
import { MarsPhoto } from "@/types";

type RoverPhotosParams = {
  sol: number;
  page?: number;
  camera?: string;
};

async function getRoverPhotos({
  sol,
  page = 1,
  camera,
}: RoverPhotosParams): Promise<MarsPhoto[]> {
  let url = `/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}`;

  if (camera) {
    url += `&camera=${camera}`;
  }

  const { data } = await http.get(url);
  return data.photos;
}

export const marsApi = {
  getRoverPhotos,
};
