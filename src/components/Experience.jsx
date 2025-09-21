import React from 'react';

const experiences = [
	{
		role: 'Senior Software Engineer | Hughes Systique Corporation (HSC), Gurgaon',
		period: 'Oct 2021 – Present',
		details: [
			'Designed multi-state ticket management system generating $75M annual revenue.',
			'Built React + TypeScript front-ends with performance optimizations.',
			'Engineered API latency improvements from 6.2s → 0.5s; scaled to 1M+ records.',
			'Optimized PostgreSQL queries with indexing & partitioning.',
			'Mentored juniors; improved quality and reduced bugs by 15%.',
		],
	},
	{
		role: 'Software Engineer | Svayam Infoware Pvt. Ltd',
		period: 'Jan 2020 – Oct 2021',
		details: [
			'Built full-stack ERP with Angular, Node.js, and SQL Server.',
			'Designed efficient REST APIs with caching.',
			'Improved MySQL query performance by 40%.',
			'Reduced operational costs by 18% via CI-driven testing.',
		],
	},
];

const achievements = [
	{
		title: 'Stripe Payment Gateway Integration',
		details: [
			'Integrated Stripe payment gateway seamlessly across frontend and backend workflows.',
			'Implemented subscription-based billing supporting multiple models: per-user pricing, per-center pricing, storage-based limits, and feature-based plan tiers.',
			'Enabled both single payments and recurring subscriptions with secure checkout flows.',
			'Designed scalable payment architecture for easy plan upgrades, downgrades, and cancellations.',
		],
	},
	{
		title: 'Role-Based Access Control (RBAC)',
		details: [
			'Designed and implemented a role-based access control system tied directly to subscription plans.',
			'Ensured users only access features allowed in their plan — from basic roles to advanced enterprise permissions.',
			'Improved security and customer experience by dynamically restricting UI and API routes based on RBAC policies.',
		],
	},
	{
		title: 'Application Performance Optimization',
		details: [
			'Optimized complex PostgreSQL queries with advanced indexing and partitioning, reducing query execution times significantly.',
			'Improved backend efficiency, scaling the system to handle large datasets with minimal latency.',
			'Enhanced frontend performance using lazy loading, memoization, and code-splitting to reduce initial load times.',
			'Achieved a more responsive and efficient user experience by combining database-level tuning with UI optimizations.',
		],
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Experience</h2>

				{/* Work Experience */}
				<div className="space-y-8 mb-16">
					{experiences.map((exp, i) => (
						<div
							key={i}
							className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-semibold text-xl text-gray-900 dark:text-white">{exp.role}</h3>
								<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
							</div>
							<ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
								{exp.details.map((detail, index) => (
									<li key={index} className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
										<span className="text-base">{detail}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Key Achievements */}
				<h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
					Key Achievements
				</h3>
				<div className="space-y-8">
					{achievements.map((achievement, i) => (
						<div
							key={i}
							className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
						>
							<h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
								{achievement.title}
							</h4>
							<ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
								{achievement.details.map((detail, index) => (
									<li key={index} className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
										<span className="text-base">{detail}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
