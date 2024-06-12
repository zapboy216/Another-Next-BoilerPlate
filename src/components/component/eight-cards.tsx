import React from 'react';

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

export default function EightCards() {
  return (
    <div className="container mx-0 px-4 py-12 md:px-6 lg:px-2">
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <CodeIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">JavaScript</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Proficient in modern JavaScript, including ES6+ features and best
              practices.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <CodepenIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">React.js</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Experienced in building complex, scalable, and performant React
              applications.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <NetworkIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Node.js</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Experienced in building scalable and efficient server-side
              applications using Node.js.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <WindIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Tailwind CSS</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Proficient in using Tailwind CSS to create responsive and visually
              appealing user interfaces.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Soft Skills</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <UsersIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Teamwork</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Excellent team player, able to collaborate effectively with
              cross-functional teams.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <LightbulbIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Problem-Solving</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Adept at breaking down complex problems and finding creative
              solutions.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <MessageCircleIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Communication</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Excellent communication skills, able to explain technical concepts
              to both technical and non-technical stakeholders.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <GaugeIcon className="mb-4 size-12 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Adaptability</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Quickly adapts to new technologies, methodologies, and
              environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
