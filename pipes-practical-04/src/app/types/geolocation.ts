import { z } from 'zod';
import { GeolocationSchema } from '../schemas/geolocation';

export type Geolocation = z.infer<typeof GeolocationSchema>;
