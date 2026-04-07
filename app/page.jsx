"use client";
import { useEffect, useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";

export default function Home() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState(null);

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    birthday: "",
    image: "",
  });

  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm(storedForm);
      } else {
        setForm({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          birthday: "",
          image: "",
        });
      }
    }
  }, [form]);

  const steps = [FirstStep, SecondStep, ThirdStep];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const StepForm = steps[step];

  if (!form) return null;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm errors={errors} setErrors={setErrors} form={form} setForm={setForm} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
    </div>
  );
}
