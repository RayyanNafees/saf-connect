import { Layout } from "../layouts/header";

const Home = () => {
	return (
		<Layout>
			<div class="divide-y divide-gray-300/50">
				<div class="space-y-6 py-8 text-base leading-7 text-gray-600">
					<p>A platform for connecting hospitals & patients:</p>
					<ul class="space-y-4">
						<li class="flex items-center">
							<svg
								aria-hidden="true"
								class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="11" />
								<path
									d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
									fill="none"
								/>
							</svg>
							<p class="ml-4">
								Manage
								<span class="text-sm font-semibold text-gray-900">
									ICU beds
								</span>
								with ease
							</p>
						</li>
						<li class="flex items-center">
							<svg
								aria-hidden="true"
								class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="11" />
								<path
									d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
									fill="none"
								/>
							</svg>
							<p class="ml-4">
								Handle
								<span class="text-sm font-semibold text-gray-900">
									Patients
								</span>
								effectively
							</p>
						</li>
						<li class="flex items-center">
							<svg
								aria-hidden="true"
								class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="11" />
								<path
									d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
									fill="none"
								/>
							</svg>
							<p class="ml-4">
								Know the best
								<span class="font-semibold text-gray-900">Hospitals</span> to
								treat you
							</p>
						</li>
					</ul>
					<p>
						Reducing the gap between hospitals & patients, know your hospital in
						an instant
					</p>
				</div>
				<div class="pt-8 text-base font-semibold leading-7">
					<h3 class="mb-10 text-xl text-gray-900">Let's get started</h3>
					<p>
						<a
							href="/login"
							class="rounded-md bg-sky-500 p-2 text-neutral-100"
						>
							Login
						</a>
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
