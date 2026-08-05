"use client";

import { useState } from "react";
import Button from "./Button";

const FIELD_CLASSES =
  "mt-1.5 w-full border border-ink bg-white px-3 py-2.5 text-base focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border-l-4 border-success bg-panel p-6">
        <p className="font-bold text-ink">Votre message a été enregistré.</p>
        <p className="mt-1 text-sm text-muted">
          Nos services vous répondront dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <p className="text-sm text-muted">
        Les champs marqués d&apos;un astérisque (*) sont obligatoires.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-ink">
            Nom complet *
          </label>
          <input id="name" name="name" type="text" required className={FIELD_CLASSES} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-ink">
            Adresse e-mail *
          </label>
          <input id="email" name="email" type="email" required className={FIELD_CLASSES} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-bold text-ink">
          Objet de la demande *
        </label>
        <input id="subject" name="subject" type="text" required className={FIELD_CLASSES} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-ink">
          Message *
        </label>
        <textarea id="message" name="message" rows={6} required className={FIELD_CLASSES} />
      </div>

      <Button type="submit">Envoyer la demande</Button>
    </form>
  );
}
