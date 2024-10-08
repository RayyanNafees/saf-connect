import IconInput from "../../components/IconInput";
import DashboardLayout from "../../layouts/DashboardLayout";

const DOBiconPath = (
	<path
		fill="currentColor"
		d="M9 10v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm0 16V8H5v11zM9 14v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z"
	/>
);
const GenderIconPath = (
	<path
		fill="currentColor"
		d="M17.58 4H14V2h7v7h-2V5.41l-3.83 3.83A5 5 0 0 1 12 16.9V19h2v2h-2v2h-2v-2H8v-2h2v-2.1A5 5 0 0 1 6 12a5 5 0 0 1 5-5c1 0 1.96.3 2.75.83zM11 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
	/>
);
const PhoneIconPath = (
	<path
		fill="currentColor"
		d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm-4-7h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7"
	/>
);
const EmailIconPath = (
	<path
		fill="currentColor"
		d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
	/>
);
const AllergyIconPath = (
	<path
		fill="currentColor"
		d="M17 3h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-3.25l-.75-.9zm4 4v2h-2c0-.69-.1-1.37-.29-2zM7 3v2H3V3zm0 4v2H3V7zm0 4v1.1l-.75.9H3v-2zm-4 4h2.29c-.19.63-.29 1.31-.29 2H3zm12-2V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1m-3-9c.55 0 1 .45 1 1v3h-2V5c0-.55.45-1 1-1"
	/>
);
const SurgeryIconPath = (
	<path
		fill="currentColor"
		d="M19 8c.56 0 1 .43 1 1a1 1 0 0 1-1 1c-.57 0-1-.45-1-1c0-.57.43-1 1-1M2 2v9c0 2.96 2.19 5.5 5.14 5.91c.62 3.01 3.28 5.09 6.36 5.09a6.5 6.5 0 0 0 6.5-6.5v-3.69c1.16-.42 2-1.52 2-2.81a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 1.29.84 2.4 2 2.81v3.6c0 2.5-2 4.5-4.5 4.5c-2 0-3.68-1.21-4.28-3.01C12 16.3 14 13.8 14 11V2h-4v3h2v6a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5h2V2z"
	/>
);

const Settings = () => {
	return (
		<DashboardLayout>
			<main class="px-4 pb-16 space-y-16">
				<h2 class="pt-6 pb-1 text-xs font-bold uppercase text-neutral-500">
					Settings
				</h2>
				<IconInput name="name" placeholder="Joe Shmoe" label="Full name" />
				<IconInput
					name="dob"
					type="date"
					placeholder="8/10/2002"
					label="Date of Birth"
					iconPath={DOBiconPath}
				/>
				<IconInput
					name="gender"
					placeholder="Male/Female"
					label="Gender"
					iconPath={GenderIconPath}
				/>
				<IconInput
					name="phone"
					type="tel"
					placeholder="555-555-5555"
					label="Phone"
					iconPath={PhoneIconPath}
				/>
				<IconInput
					name="email"
					type="email"
					placeholder="joe@shmoe.com"
					label="Email"
					iconPath={EmailIconPath}
				/>
				<IconInput
					name="allergies"
					placeholder="Allergy with peanuts"
					label="Known alergies"
					textarea
					iconPath={AllergyIconPath}
				/>
				<div class="mt-6"/>
				<IconInput
					name="surgeries"
					placeholder="Root canal operation"
					label="Past alergies"
					textarea
					iconPath={SurgeryIconPath}
				/>
			</main>
		</DashboardLayout>
	);
};

export default Settings;
