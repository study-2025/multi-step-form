import { z } from 'zod';

export const formSchema = z.object({
  name: z.string(),
  gender: z.enum(['남자', '여자']),
  job: z.string(),
  hobby: z.array(z.string()).max(3),
  selfIntroduction: z.string(),
});
