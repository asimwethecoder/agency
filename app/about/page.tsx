import { Metadata } from 'next';
import Image from 'next/image';

import { Border } from '@/components/Border';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { GridList, GridListItem } from '@/components/GridList';
import { PageIntro } from '@/components/PageIntro';
import { PageLinks } from '@/components/PageLinks';
import { SectionIntro } from '@/components/SectionIntro';
import { StatList, StatListItem } from '@/components/StatList';
import imageAngelaFisher from '@/images/team/angela-fisher.jpg';
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg';
import imageBlakeReid from '@/images/team/blake-reid.jpg';
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg';
import imageDriesVincent from '@/images/team/dries-vincent.jpg';
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg';
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg';
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg';
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg';
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg';
import imageMichaelFoster from '@/images/team/michael-foster.jpg';
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg';

export const metadata: Metadata = {
  title: 'Next.js Development Experts | Scalable Web Solutions',
  description:
    'Discover expert Next.js development services for high-performance, scalable web applications. Based in Johannesburg, we tailor solutions to meet your unique needs.',
};

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Collaborative spirit and cutting-edge solutions."
        invert
      >
        <p>
          At our agency, we pride ourselves on combining innovation and
          expertise to craft Next.js applications that transform businesses.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Next.js Expertise" invert>
            We specialize in Next.js development, ensuring unmatched
            performance, scalability, and user experience for every project.
          </GridListItem>
          <GridListItem title="Collaboration" invert>
            Our team works as an extension of yours, focusing on understanding
            your unique goals and delivering tailored solutions.
          </GridListItem>
          <GridListItem title="Performance Optimization" invert>
            With a strong focus on Core Web Vitals, we ensure your applications
            load faster and rank higher.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

function OurProcess() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our process and why"
        title="Simplifying excellence through expertise and collaboration."
        invert
      >
        <p>
          From understanding your goals to delivering outstanding results, we
          follow a proven process that ensures success in every Next.js project
          we undertake.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Understanding Your Needs" invert>
            We start by gaining a deep understanding of your business goals and
            project requirements, ensuring every solution is tailored to you.
          </GridListItem>
          <GridListItem title="Agile Development" invert>
            Using Agile methodologies, we work in iterative sprints to deliver
            results quickly and efficiently while maintaining flexibility.
          </GridListItem>
          <GridListItem title="Seamless Deployment" invert>
            Leveraging CI/CD pipelines powered by GitHub Actions, we ensure
            smooth, error-free deployments for all your Next.js applications.
          </GridListItem>
          <GridListItem title="Ongoing Support" invert>
            After launch, we provide proactive support and maintenance to keep
            your applications robust, secure, and scalable.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="mt-24 rounded-4xl bg-white py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <Container>
        <SectionIntro
          eyebrow="Why choose us"
          title="Delivering proven performance and tailored solutions."
          invert={false} // Ensures text adapts to light background
        >
          <p>
            With unmatched expertise and a collaborative spirit, we help you
            unlock the full potential of Next.js.
          </p>
        </SectionIntro>
        <GridList className="mt-16">
          <GridListItem title="Specialized Expertise">
            Our deep understanding of React and Next.js ensures advanced
            solutions that seamlessly combine frontend brilliance and backend
            efficiency.
          </GridListItem>
          <GridListItem title="Proven Performance">
            We optimize your applications for speed, reliability, and search
            engine performance, delivering superior user experiences.
          </GridListItem>
          <GridListItem title="Transparent Collaboration">
            From fair billing to clear communication, we ensure transparency at
            every stage of your project.
          </GridListItem>
          <GridListItem title="A Partnership for Success">
            We see ourselves as an extension of your team, working towards your
            success every step of the way.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

function WhyNextJS() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <Container>
        <SectionIntro
          eyebrow="Why Next.js"
          title="Harness the power of Next.js for modern web development."
          invert
        >
          <p>
            Next.js stands at the forefront of web development, offering
            full-stack capabilities, scalability, and performance optimization.
          </p>
        </SectionIntro>
        <GridList className="mt-16">
          <GridListItem title="Full-Stack Capabilities" invert>
            Combine frontend and backend seamlessly for robust application
            architectures with Next.js.
          </GridListItem>
          <GridListItem title="Scalability" invert>
            Perfect for projects that grow with your business, whether it's a
            single-page app or a multi-market platform.
          </GridListItem>
          <GridListItem title="SEO Optimization" invert>
            Leverage server-side rendering (SSR) and static site generation
            (SSG) for improved search engine rankings and user experiences.
          </GridListItem>
          <GridListItem title="Advanced Integrations" invert>
            Easily integrate AI tools, headless CMS, and third-party APIs to
            future-proof your solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}


const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
];

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt={person.name}
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About Us" title="Next.js Development Experts">
        <p>
          Based in Johannesburg, South Africa, we specialize in crafting scalable,
          high-performance web applications using Next.js. Our team of developers
          combines cutting-edge technology with a deep commitment to your business
          goals.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Whether you need team augmentation, replatforming, or full product
            development, our expert Next.js services are tailored to meet your
            unique needs. From startups to enterprises, we build solutions that
            prioritize performance, scalability, and user experience.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Years of Experience" />
          <StatListItem value="100+" label="Projects Delivered" />
          <StatListItem value="100%" label="Client Satisfaction" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <OurProcess />

      <WhyChooseUs />

      <WhyNextJS />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Explore Our Blog"
        intro="Discover insights on Next.js, web performance optimization, and modern app development."
        pages={[]} // Placeholder for blog articles
      />

      <ContactSection />
    </>
  );
}
