"use client";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";

export default function Home() {
  const [step, setStep] = useState(2);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    birthday: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    birthday: "",
    image: "",
  });

  const steps = [FirstStep, SecondStep, ThirdStep];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const StepForm = steps[step];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm errors={errors} setErrors={setErrors} form={form} setForm={setForm} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
    </div>
  );
}
