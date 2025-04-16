import { z } from 'zod';
import { CompanySchema } from '../schemas/company';

export type Company = z.infer<typeof CompanySchema>;
