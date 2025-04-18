import { z } from 'zod';
import { GeolocationSchema } from './geolocation';

export const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: GeolocationSchema,
});
