import { z } from 'zod';

export const GeolocationSchema = z.object({
  lat: z.string(),
  lng: z.string(),
});
