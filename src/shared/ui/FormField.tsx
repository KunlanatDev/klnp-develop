import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import TextField, { type OutlinedTextFieldProps } from '@mui/material/TextField';

type Props<T extends FieldValues> = Omit<OutlinedTextFieldProps, 'name' | 'defaultValue' | 'error' | 'ref' | 'variant'> & {
  name: Path<T>;
  control: Control<T>;
};

// Reusable form input bound to react-hook-form. Pass `select` + <MenuItem> children for dropdowns.
export function FormField<T extends FieldValues>({ name, control, ...rest }: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => (
        <TextField
          {...rest}
          {...field}
          inputRef={ref}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
