import { useState } from "react";
import ciscoCert from "../assets/cisco_cert.png";
import ciscoCert2 from "../assets/cisco_Cert2.png";
import awsCert from "../assets/cloud.png";
import awsbadge from "../assets/cloud_badge.png"

const certificates = [
  {
    id: 1,
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "January 2026",
    image: ciscoCert,
    badge: ciscoCert2,
    description:
      "Successfully completed the Cisco Networking Academy Data Analytics Essentials program, gaining practical knowledge of data analysis, visualization, data preparation, and business insights through hands-on analytical exercises.",
    skills: [
      "Data Analytics",
      "Python",
      "Excel",
      "Visualization",
    ],
    link: "https://www.credly.com/badges/0e9c19a6-c050-4410-810c-f3854123f670/public_url",
  },
    {
    id: 2,
    title: "AWS Academy Graduate",
    issuer: "AWS Academy",
    date: "March 2026",
    image: awsCert,
    badge: awsbadge,
    description:
      "Completed the AWS Academy Cloud Developing course, gaining practical knowledge of cloud computing, application development, AWS services, and cloud deployment concepts through 40 hours of hands-on learning.",
    skills: ["AWS",
    "Cloud",
    "EC2",
    "S3",],
    link: "https://www.credly.com/badges/4a02d17b-e2bb-4b7d-ae4d-f7f4e7a2b093/public_url",
  },
];

export const Certifications = () => {
        const [selectedCertificate, setSelectedCertificate] =
        useState(certificates[0]);
  return (
    <section
      id="certifications"
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-primary/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <p className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4">
            Continuous Learning
          </p>

          <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold leading-tight">
            Certifications that{" "}
            <span className="text-primary glow-text font-serif italic">
              validate
            </span>{" "}
            my skills.
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-8">
            Every certification represents a step forward in strengthening my
            expertise in data analytics, visualization, and modern data
            technologies through continuous learning and hands-on practice.
          </p>
        </div>

        {/* Featured Certificate */}

       <div
  key={selectedCertificate.id}
    className="glass rounded-[32px] p-8 lg:p-10 border border-white/5 overflow-hidden animate-fade-in">

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">

            {/* Certificate Image */}

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl scale-90"></div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10">

                <img
                  src={selectedCertificate.image}
                  alt="Certificate"
                  className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105"
                />

              </div>

            </div>

            {/* Details */}

            <div className="flex flex-col justify-center">

              <span className="text-primary uppercase tracking-[0.35em] text-xs font-semibold mb-4">
                Featured Certification
              </span>

              <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                {selectedCertificate.title}
              </h3>

              <p className="text-primary text-lg mt-3">
               {selectedCertificate.issuer}
              </p>

              {/* Certificate Information */}

<div className="grid grid-cols-2 gap-5 mt-8">

  <div className="glass rounded-2xl p-5">

    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
      Issued By
    </p>

    <div className="flex items-center gap-3">

      <img
        src={selectedCertificate.badge}
        alt="Cisco Badge"
        className="w-10 h-10 object-contain"
      />

      <span className="font-semibold">
        {selectedCertificate.issuer}
      </span>

    </div>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
      Completed
    </p>

    <p className="font-semibold text-lg">
      {selectedCertificate.date}
    </p>

  </div>

</div>

{/* Description */}

<div className="mt-8">

  <h4 className="font-semibold text-lg mb-3">
    Overview
  </h4>

  <p className="text-muted-foreground leading-8">
   {selectedCertificate.description}
    
  </p>

</div>

           {/* Skills */}

<div className="flex flex-wrap gap-3 mt-8">

  {selectedCertificate.skills.map((skill) => (
    <span
      key={skill}
      className="glass px-5 py-2 rounded-full text-sm font-medium hover:border-primary transition"
    >
      {skill}
    </span>
  ))}

</div>

              {/* Button */}

              <div className="mt-10">

  <a
    href={selectedCertificate.link}
    target="_blank"
    rel="noopener noreferrer"
  >

    <button
      className="
      group
      inline-flex
      items-center
      justify-center
      gap-2
      px-8
      py-3
      rounded-full
      bg-primary
      text-black
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_40px_rgba(32,178,166,.35)]
      "
    >
      View Credential

      <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>

    </button>

  </a>

</div>

            </div>

          </div>

        </div>
        {/* Other Certifications */}

<div className="mt-20">

  <div className="flex items-center justify-between mb-8">

    <div>
      <p className="text-primary uppercase tracking-[0.25em] text-sm font-medium">
        More Credentials
      </p>

      <h3 className="text-3xl font-bold mt-2">
        Other Certifications
      </h3>
    </div>

    <p className="text-muted-foreground hidden md:block">
      Click a certificate to explore it.
    </p>

  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


{certificates.map((certificate) => (
  <div
    key={certificate.id}
    onClick={() => setSelectedCertificate(certificate)}
    className={`
      glass
      rounded-2xl
      overflow-hidden
      cursor-pointer
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-[0_0_35px_rgba(32,178,166,.35)]
      group
      ${
        selectedCertificate.id === certificate.id
          ? "border-2 border-primary shadow-[0_0_25px_rgba(32,178,166,.25)]"
          : "border border-white/10"
      }
    `}
  >
    <div className="relative overflow-hidden">
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-36 object-cover"
      />

      <div className="absolute top-3 left-3 glass rounded-xl p-2">
        <img
          src={certificate.badge}
          alt=""
          className="w-8 h-8 object-contain"
        />
      </div>
    </div>

    <div className="p-5">

      <h4 className="font-semibold text-lg">
        {certificate.title}
      </h4>

      <p className="text-primary text-sm mt-2">
        {certificate.issuer}
      </p>

      <div className="flex justify-between mt-5">

        <span className="text-xs text-muted-foreground">
          {certificate.date}
        </span>

        <span className="text-primary">
          Explore →
        </span>

      </div>

    </div>

  </div>
))}



    {/* Placeholder Card */}

    {/* Upcoming Certificate */}

<div
  className="
    glass
    rounded-2xl
    p-6
    flex
    flex-col
    items-center
    justify-center
    text-center
    min-h-[300px]
    border
    border-dashed
    border-white/10
    transition-all
    duration-300
    hover:border-primary/40
    hover:-translate-y-2
    hover:shadow-[0_0_35px_rgba(32,178,166,.18)]
    group
  "
>

  <div
    className="
      w-20
      h-20
      rounded-full
      glass
      flex
      items-center
      justify-center
      mb-6
      group-hover:scale-110
      transition
    "
  >
    <span className="text-5xl text-primary font-light">+</span>
  </div>

  <h4 className="text-xl font-semibold mb-3">
    Coming Soon
Continuously Learning
  </h4>

  <p className="text-muted-foreground leading-7 text-sm">
    I'm continuously learning and expanding my expertise.
    My next certification will be showcased here.
  </p>

</div>

    {/* Placeholder Card */}

    {/* Upcoming Certificate */}

<div
  className="
    glass
    rounded-2xl
    p-6
    flex
    flex-col
    items-center
    justify-center
    text-center
    min-h-[300px]
    border
    border-dashed
    border-white/10
    transition-all
    duration-300
    hover:border-primary/40
    hover:-translate-y-2
    hover:shadow-[0_0_35px_rgba(32,178,166,.18)]
    group
  "
>

  <div
    className="
      w-20
      h-20
      rounded-full
      glass
      flex
      items-center
      justify-center
      mb-6
      group-hover:scale-110
      transition
    "
  >
    <span className="text-5xl text-primary font-light">+</span>
  </div>

  <h4 className="text-xl font-semibold mb-3">
    Coming Soon
Continuously Learning
  </h4>

  <p className="text-muted-foreground leading-7 text-sm">
    I'm continuously learning and expanding my expertise.
    My next certification will be showcased here.
  </p>

</div>

  </div>

</div>

      </div>
    </section>
  );
};