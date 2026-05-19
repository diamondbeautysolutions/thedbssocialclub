import { Gift, Sparkles, Star, TicketCheck } from "lucide-react";

const perks = [
  {
    title: "Event Access",
    description: "Access to private DBS Social Club events and experiences.",
    icon: TicketCheck
  },
  {
    title: "Exclusive Drops",
    description: "Early access to DBS Social Club merchandise and releases.",
    icon: Gift
  },
  {
    title: "Community Moments",
    description: "Curated conversations, features, and member-only updates.",
    icon: Sparkles
  },
  {
    title: "Priority Invites",
    description: "Get first notice for select DBS events and activations.",
    icon: Star
  }
];

export default function PerksPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Member Access
        </p>

        <h1 className="mt-2 text-3xl font-semibold">Perks</h1>
      </div>

      <div className="space-y-4">
        {perks.map((perk) => {
          const Icon = perk.icon;

          return (
            <article
              key={perk.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
            >
              <Icon className="h-7 w-7 text-[#d7b56d]" />
              <h2 className="mt-4 font-semibold">{perk.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {perk.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
