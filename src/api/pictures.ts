import { http } from "@/config/http";
import type { POD } from "@/types";

async function getPod(): Promise<POD> {
  const { data } = await http.get("/planetary/apod");
  return data;
}

export const picturesApi = {
  getPod,
};
