import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { useAppDispatch } from '@/app/hooks';
import { showToast } from '@/features/ui/uiSlice';
import { AppButton, FormField } from '@/shared/ui';
import { contactSchema, type ContactInput } from './schema';
import { useSendContactMutation } from './contactApi';

export function ContactForm() {
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();
  const t = params.get('type');
  const [send, { isLoading }] = useSendContactMutation();
  const { control, handleSubmit, register, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: t === 'job' || t === 'other' ? t : 'freelance', name: '', email: '', message: '', website: '' },
  });

  const onSubmit = async (values: ContactInput) => {
    try {
      await send(values).unwrap();
      reset();
      dispatch(showToast({ message: "Message sent. I'll reply within 1–2 business days.", severity: 'success' }));
    } catch {
      /* already reported by the central error middleware */
    }
  };

  return (
    <Stack component="form" spacing={2.5} onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField control={control} name="type" label="What is this about?" select>
        <MenuItem value="freelance">Hire me for a project</MenuItem>
        <MenuItem value="job">Job opportunity</MenuItem>
        <MenuItem value="other">Something else</MenuItem>
      </FormField>
      <FormField control={control} name="name" label="Name" autoComplete="name" />
      <FormField control={control} name="email" label="Email" type="email" autoComplete="email" />
      <FormField control={control} name="message" label="Message" multiline minRows={5} />
      <input {...register('website')} tabIndex={-1} autoComplete="off" aria-hidden style={{ position: 'absolute', left: -9999 }} />
      <AppButton type="submit" variant="gradient" loading={isLoading}>Send message</AppButton>
    </Stack>
  );
}
