import { TextInput, TextInputProps } from "@mantine/core";
import { useEffect, useState, useCallback } from "react";

type MeasurementInputProps = Omit<TextInputProps, "onChange"> & {
  onChange?: (value: string) => void;
  maxValue?: number;
  minValue?: number;
  decimalPlaces?: number;
  allowNegative?: boolean;
  unit?: string;
};

export function MeasurementInput({
  onChange,
  maxValue = 999.99,
  minValue = 0,
  decimalPlaces = 2,
  allowNegative = false,
  value: initialValue = "",
  unit,
  rightSection,
  ...props
}: MeasurementInputProps) {
  const [value, setValue] = useState(String(initialValue));
  const [error, setError] = useState<string | null>(null);

  const validateValue = useCallback(
    (val: string) => {
      if (!val) {
        setError(null);
        return true;
      }

      const numValue = parseFloat(val);
      const errorMessages = {
        nan: "Please enter a valid number",
        negative: "Negative values are not allowed",
        max: `Value must be less than ${maxValue}`,
        min: `Value must be greater than ${minValue}`,
      };

      const validations = [
        { condition: isNaN(numValue), message: errorMessages.nan },
        {
          condition: !allowNegative && numValue < 0,
          message: errorMessages.negative,
        },
        { condition: numValue > maxValue, message: errorMessages.max },
        { condition: numValue < minValue, message: errorMessages.min },
      ];

      const failed = validations.find(({ condition }) => condition);
      setError(failed ? failed.message : null);
      return !failed;
    },
    [allowNegative, maxValue, minValue]
  );

  const formatValue = (val: string) => {
    const sanitized = val.replace(/[^\d.-]/g, "");
    const [integer, ...decimals] = sanitized.split(".");

    return decimals.length
      ? `${integer}.${decimals.join("").slice(0, decimalPlaces)}`
      : integer;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = formatValue(event.target.value);
    setValue(newValue);
    if (validateValue(newValue)) {
      onChange?.(newValue);
    }
  };

  useEffect(() => {
    const newValue = String(initialValue);
    if (newValue !== value) {
      setValue(newValue);
      validateValue(newValue);
    }
  }, [initialValue, validateValue, value]);

  const unitSection = unit ? (
    <span style={{ color: "#666", fontSize: "0.9em" }}>{unit}</span>
  ) : (
    rightSection
  );

  return (
    <TextInput
      {...props}
      value={value}
      onChange={handleChange}
      error={error}
      rightSection={unitSection}
    />
  );
}
