'use server';
import { getExistingEmailAdress } from '@workspace/data-access';

export async function emailLoginExists(email: string): Promise<boolean> {
  const existingEmail = await getExistingEmailAdress(email);

  return !!existingEmail;
}
