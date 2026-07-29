import Image from "next/image";
import {
    MapPinned,
    Mountain,
    Palmtree,
    Camera,
} from "lucide-react";

export default function TourismIntro() {
    const stats = [
        {
            icon: MapPinned,
            value: "14",
            label: "Districts",
        },
        {
            icon: Mountain,
            value: "100+",
            label: "Destinations",
        },
        {
            icon: Palmtree,
            value: "365",
            label: "Days to Explore",
        },
        {
            icon: Camera,
            value: "∞",
            label: "Memories",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-12 lg:px-8">

                <div className="lg:col-span-5">

                    <div className="sticky top-28">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-sea" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-greenish-blue">
                                Discover Kerala
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
                            Every destination
                            <span className="block text-dark-grey-blue/55">
                                tells a story.
                            </span>
                        </h2>

                        <p className="mt-8 leading-8 text-muted">
                            Kerala offers an incredible blend of mist-covered
                            mountains, tranquil backwaters, pristine beaches,
                            waterfalls, wildlife sanctuaries and vibrant
                            cultural heritage. Whether you're planning a
                            honeymoon, family holiday or adventure trip,
                            discover destinations carefully curated by the
                            Ezora Tours team.
                        </p>

                    </div>

                </div>

                <div className="space-y-8 lg:col-span-7">

                    <div className="overflow-hidden rounded-[36px]">

                        <Image
                            src="/images/home/blog-3.jpg"
                            alt="Kerala Tourism"
                            width={1200}
                            height={800}
                            className="h-[460px] w-full object-cover"
                        />

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">

                        {stats.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.label}
                                    className="rounded-[28px] border border-border bg-background p-6"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sea/10 text-sea">
                                        <Icon size={22} />
                                    </div>

                                    <p className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-dark-cerulean">
                                        {item.value}
                                    </p>

                                    <p className="mt-2 text-muted">
                                        {item.label}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}