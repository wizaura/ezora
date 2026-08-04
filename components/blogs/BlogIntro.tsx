export default function BlogIntro() {
    return (
        <section className="bg-white pt-16">
            <div className="mx-auto max-w-[900px] px-5 text-center lg:px-8">

                <div className="mb-5 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-sea" />

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                        Ezora Travel Journal
                    </p>

                    <span className="h-px w-10 bg-sea" />
                </div>

                <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                    Inspiration for
                    <span className="block text-dark-grey-blue/60">
                        every traveller.
                    </span>
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
                    Whether you're visiting Kerala for the first time or
                    returning to discover hidden gems, our travel blog
                    brings together destination guides, local experiences,
                    travel tips and itinerary ideas to help you make the
                    most of your journey.
                </p>

            </div>
        </section>
    );
}