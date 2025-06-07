"use client"
import { useState, useEffect } from "react";
import RegularButton from "../button";

interface GeneralFormProps {
  formConfig: FormField[];
}

export default function GeneralForm({ formConfig }: GeneralFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const formSubmitKey = process.env.NEXT_PUBLIC_FORMSUBMIT_KEY;
  const formSubmitSuccessUrl = process.env.NEXT_PUBLIC_FORMSUBMIT_URL + "?success=true";

  useEffect(() => {
    const initialFormData = formConfig.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {} as Record<string, string>);
    setFormData(initialFormData);
  }, [formConfig]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-a font-bold">General Inquiry</h2>
        <p className="text-md sm:text-lg my-4">Have a question or need assistance? We&apos;re here to help! Feel free to reach out to us with any inquiries!</p>
      </div>
      <form action={`https://formsubmit.co/${formSubmitKey}`} method="POST" className="w-full">
        <input type="hidden" name="_next" value={formSubmitSuccessUrl}></input>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {formConfig.map((field) => (
            <div key={field.id} className="col-span-2">
              <label htmlFor={field.id} className="text-md sm:text-lg">{field.label}</label>
              {field.type === "select" ? (
                <select
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required={field.required}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-b sm:text-sm sm:leading-6 focus:outline-none"
                >
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required={field.required}
                  className="resize-none block w-full rounded-md h-40 border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-b focus:outline-none"
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required={field.required}
                  className="block w-full rounded-md border-0 px-2 sm:px-3.5 py-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-b sm:text-sm sm:leading-6 focus:outline-none"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <RegularButton size="small" variant="orange" text="Send Email" />
        </div>
      </form>
    </div>
  )
}
