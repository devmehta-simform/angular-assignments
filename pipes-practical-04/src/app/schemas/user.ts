import { z } from 'zod';
import { AddressSchema } from './address';
import { CompanySchema } from './company';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: AddressSchema,
  phone: z.string(),
  website: z.string(),
  company: CompanySchema,
});
