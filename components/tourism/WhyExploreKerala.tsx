import {
    Mountain,
    Palmtree,
    Waves,
    ShieldCheck,
} from "lucide-react";

const reasons = [
    {
        icon: Mountain,
        title: "Diverse Landscapes",
        description:
            "From mist-covered hill stations to pristine beaches and lush forests, Kerala offers breathtaking scenery for every traveller.",
    },
    {
        icon: Waves,
        title: "Unique Backwaters",
        description:
            "Cruise through tranquil backwaters, experience village life and enjoy one of Kerala's most iconic attractions.",
    },
    {
        icon: Palmtree,
        title: "Rich Culture",
        description:
            "Discover centuries-old traditions, festivals, cuisine, Ayurveda and unforgettable hospitality throughout the state.",
    },
    {
        icon: ShieldCheck,
        title: "Travel with Confidence",
        description:
            "Ezora Tours helps you discover Kerala with carefully curated destinations, reliable transport and local expertise.",
    },
];

export default function WhyExploreKerala() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-sea" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                            Why Kerala?
                        </p>

                        <span className="h-px w-10 bg-sea" />
                    </div>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                        Every journey begins
                        <span className="block text-dark-grey-blue/55">
                            with an unforgettable destination.
                        </span>
                    </h2>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {reasons.map((reason) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={reason.title}
                                className="rounded-[30px] border border-border bg-background p-8 transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10 text-sea">
                                    <Icon size={26} />
                                </div>

                                <h3 className="mt-8 text-2xl font-semibold text-dark-cerulean">
                                    {reason.title}
                                </h3>

                                <p className="mt-4 leading-8 text-muted">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}