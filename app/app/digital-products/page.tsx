import { Crown, Download, FileText, Lock, ShoppingBag } from "lucide-react";

const products = [
  {
    title: "DBS Branding Guide",
    type: "Digital PDF",
    description: "A downloadable guide for building a polished, luxury beauty brand presence.",
    vip: false
  },
  {
    title: "The Social Edit Class",
    type: "Video Course",
    description: "A digital class experience for content, community, beauty, and brand storytelling.",
    vip: true
  },
  {
    title: "Luxury Content Templates",
    type: "Download Pack",
    description: "Canva-style content planning resources, captions, launch prompts, and brand assets.",
    vip: false
  }
];

export default function DigitalProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-[#d7b56d]">
          Digital Access
        </p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#f5efe3]">
          Products & Classes
        </h1>

        <p className="mt-4 text-sm leading-7 text-white/65">
          Shop and access DBS Social Club classes, downloadable files, templates,
          member resources, and VIP-only digital drops.
        </p>
      </div>

      <section className="rounded-[2.5rem] border border-white/10 bg-[#f5efe3] p-6 text-[#07172f] shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07172f] text-[#f5efe3]">
            <ShoppingBag className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8f1d2c]">
              Coming Soon
            </p>
            <h2 className="text-xl font-semibold">Digital Shop</h2>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-[#07172f]/70">
          This area is built for future paid classes, file downloads, beauty
          business resources, and exclusive materials for VIP members.
        </p>
      </section>

      <div className="space-y-4">
        {products.map((product) => (
          <article
            key={product.title}
            className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5efe3] text-[#07172f]">
                <ShoppingBag className="h-6 w-6" />
              </div>

              {product.vip && (
                <div className="flex items-center gap-2 rounded-full bg-[#d7b56d] px-3 py-1 text-xs font-semibold text-[#07172f]">
                  <Crown className="h-3 w-3" />
                  VIP
                </div>
              )}
            </div>

            <h2 className="mt-5 text-xl font-semibold text-[#f5efe3]">
              {product.title}
            </h2>

            <p className="mt-2 text-sm text-[#d7b56d]">{product.type}</p>

            <p className="mt-3 text-sm leading-6 text-white/60">
              {product.description}
            </p>

            <div className="mt-5 flex gap-3">
              <button className="flex items-center gap-2 rounded-full bg-[#f5efe3] px-4 py-3 text-sm font-semibold text-[#07172f]">
                <Download className="h-4 w-4" />
                Access
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-[#f5efe3]">
                <FileText className="h-4 w-4" />
                Details
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-[2rem] border border-[#8f1d2c]/20 bg-[#8f1d2c]/20 p-6">
        <div className="flex items-center gap-3">
          <Lock className="h-5 w-5 text-[#f5efe3]" />

          <p className="text-xs uppercase tracking-[0.35em] text-[#f5efe3]/70">
            VIP Access
          </p>
        </div>

        <h2 className="mt-4 text-2xl font-semibold text-[#f5efe3]">
          Member-only digital experiences.
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#f5efe3]/80">
          VIP members can unlock premium classes, behind-the-scenes content,
          downloadable resources, and exclusive DBS Social Club materials.
        </p>
      </section>
    </div>
  );
}
