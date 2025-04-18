import { z } from 'zod';
import { AddressSchema } from '../schemas/address';

export type Address = z.infer<typeof AddressSchema>;
