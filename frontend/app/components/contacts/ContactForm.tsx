"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { sendContactMessage } from "@/app/services/contactService";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const inputClass = `
w-full
rounded-xl
border
border-slate-700
bg-slate-900
px-5
py-4
outline-none
transition
focus:border-violet-500
focus:ring-2
focus:ring-violet-500/30
`;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  async function onSubmit(data: ContactFormValues) {
    try {
      setLoading(true);

      await sendContactMessage(data);

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7"
    >
      <div>
        <label className="mb-2 block">
          Name
        </label>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          className={inputClass}
          placeholder="John Doe"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block">
          Email
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className={inputClass}
          placeholder="john@gmail.com"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block">
          Subject
        </label>

        <input
          {...register("subject", {
            required: "Subject is required",
          })}
          className={inputClass}
          placeholder="Freelance Project"
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block">
          Message
        </label>

        <textarea
          rows={8}
          {...register("message", {
            required: "Message is required",
          })}
          className={`${inputClass} resize-none`}
          placeholder="Write your message..."
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-violet-600
          px-8
          py-4
          font-semibold
          transition
          hover:bg-violet-700
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        <FiSend />

        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}