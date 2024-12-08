"use client"; // use client добавлен 

import React from "react";
import { WhiteBlock } from "../white-block";
import { FormTextarea } from "../form";
import { AdressInput } from "../../shared/adress-input";
//import { AdressInput } from "../address-input";
 // ../../shared/components/ui/skeleton
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../error-text";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <div>
                {" "}
                <AdressInput onChange={field.onChange} />
              </div>

              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />

        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Комментарий к заказу"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
