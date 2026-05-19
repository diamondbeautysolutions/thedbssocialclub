import { CalendarDays, MapPin, TicketCheck } from "lucide-react";

const events = [
  {
    title: "The Social Edit",
    date: "Coming Soon",
    location: "Atlanta, GA",
    description:
      "A curated DBS Social Club experience centered around beauty, culture, conversation, and community."
  },
  {
    title: "Hollywood in Atlanta",
    date: "Summer 2027 Concept",
    location: "Atlanta, GA",
    description:
      "A larger community event celebrating local creatives, leaders, beauty professionals, and culture shifters."
  }
];

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          DBS Social
        </p>

        <h1 className="mt-2 text-3xl font-semibold">Events</h1>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <article
            key={event.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <CalendarDays className="h-6 w-6 text-[#d7b56d]" />
            </div>

            <h2 className="text-xl font-semibold">{event.title}</h2>

            <div className="mt-4 space-y-2 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <TicketCheck className="h-4 w-4" />
                {event.date}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location}
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/65">
              {event.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
