import { Button } from "./Button";
import { ImageField } from "./ImageField";
import { Logo } from "./Logo";
import { TextField } from "./TextField";

export const ThirdStep = ({ handleNextStep, handlePrevStep, form, setForm }) => {
  return (
    <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        <Logo />
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">Please provide all current information accurately.</p>

        <TextField
          type="date"
          value={form.birthday}
          onChange={(e) => {
            setForm({ ...form, birthday: e.target.value });
          }}
          required={true}
          label="Birthday"
          placeholder="2024/01/01..."
        />
        <ImageField
          value={form.image}
          onChange={(e) => {
            const imageValue = URL.createObjectURL(e.target.files[0]);
            setForm({ ...form, image: imageValue });
          }}
          onCancel={() => {
            setForm({ ...form, image: "" });
          }}
          required={true}
          label="Profile Image"
        />
      </div>

      <div className="flex gap-4 my-10">
        <Button onClick={handlePrevStep}>Prev</Button>
        <Button onClick={handleNextStep}>Next</Button>
      </div>
    </div>
  );
};
