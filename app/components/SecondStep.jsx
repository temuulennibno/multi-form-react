import { Button } from "./Button";
import { Logo } from "./Logo";
import { TextField } from "./TextField";

export const SecondStep = ({ handleNextStep, handlePrevStep, form, setForm }) => {
  const isEmailValid = () => {
    if (form.email === "") return "Email cannot be empty...";
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email)) return "Email is not valid.";
  };

  const isHavingError = () => {
    return isEmailValid();
  };
  return (
    <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        <Logo />
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">Please provide all current information accurately.</p>

        <TextField
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          error={isEmailValid()}
          required={true}
          label="Email"
          placeholder="john@doe.com..."
        />
      </div>
      <div className="flex gap-4 my-10">
        <Button onClick={handlePrevStep}>Prev</Button>
        <Button onClick={handleNextStep} disabled={isHavingError()}>
          Next
        </Button>
      </div>
    </div>
  );
};
