import { useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { TextField } from "./TextField";

export const FirstStep = ({ handleNextStep, form, setForm, errors, setErrors }) => {
  const isFirstNameValid = (value) => {
    if (value === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value)) return "First name cannot contain special characters or numbers.";
  };
  const isLastnameValid = () => {
    if (form.lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(form.lastname)) return "Last name cannot contain special characters or numbers.";
  };
  const isUsernameValid = () => {
    if (form.username === "") return "Username name cannot be empty...";
    if (!/^[a-z0-9-_.]+$/.test(form.username)) return "Username can only contain lowercase letters and digits only";
  };

  const isHavingError = () => {
    return isFirstNameValid(form.firstname) || isLastnameValid() || isUsernameValid();
  };
  return (
    <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        <Logo />
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">Please provide all current information accurately.</p>

        <TextField
          value={form.firstname}
          onChange={(e) => {
            setErrors({ ...errors, firstname: isFirstNameValid(e.target.value) });
            setForm({ ...form, firstname: e.target.value });
          }}
          error={errors.firstname}
          required={true}
          label="First name"
          placeholder="John..."
        />
        <TextField
          value={form.lastname}
          onChange={(e) => {
            setForm({ ...form, lastname: e.target.value });
          }}
          error={isLastnameValid()}
          required={true}
          label="Last name"
          placeholder="Doe..."
        />
        <TextField
          value={form.username}
          onChange={(e) => {
            setForm({ ...form, username: e.target.value });
          }}
          error={isUsernameValid()}
          required={true}
          label="Username"
          placeholder="boldoo247..."
        />
      </div>
      <div className="flex gap-4 my-10">
        <Button onClick={handleNextStep} disabled={isHavingError()}>
          Next
        </Button>
      </div>
    </div>
  );
};
