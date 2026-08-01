"use client";

import Window from "../ui/Window";
import ContactForm from "../contacts/ContactForm";

type Props = {
  onClose: () => void;
};

export default function ContactWindow({
  onClose,
}: Props) {
  return (
    <Window
    name="contact"
    title="📧 Contact"
    onClose={onClose}
>
      <div className="grid h-full lg:grid-cols-[320px_1fr]">

  {/* Left Panel */}

  <aside className="border-r border-slate-700 bg-[#111827] p-8">

    <h2 className="text-3xl font-bold">
      Contact
    </h2>

    <p className="mt-4 text-slate-400 leading-7">

      Interested in working together?

      Send me a message and I`ll get back to you as soon as possible.

    </p>

    <div className="mt-10 space-y-6">

      <div>

        <h4 className="text-violet-400">
          Email
        </h4>

        <p className="text-slate-300">
          jyotiranjansahoo@gmail.com
        </p>

      </div>

      <div>

        <h4 className="text-violet-400">
          Location
        </h4>

        <p className="text-slate-300">
          Odisha, India
        </p>

      </div>

      <div>

        <h4 className="text-violet-400">
          Status
        </h4>

        <p className="text-green-400">
          🟢 Available
        </p>

      </div>

    </div>

  </aside>

  {/* Right Panel */}

  <div className="overflow-y-auto p-10">

    <ContactForm />

  </div>

</div>
    </Window>
  );
}