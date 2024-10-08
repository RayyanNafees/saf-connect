import Switch from "../components/Switch";
import DashboardLayout from "../layouts/DashboardLayout";
import { Layout } from "../layouts/header";

const Beds = () => (
	<DashboardLayout>
		<div class="divide-y divide-gray-300/50">
			<div
				action="https://tailwindcss.com/docs"
				method="post"
				class="py-8 space-y-8 text-base leading-7 text-gray-600"
			>
				<div class="container flex justify-between">
					<p class="flex text-xl font-light">
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2 text-sky-500 size-8"
							viewBox="0 0 256 256"
						>
							<g fill="currentColor">
								<path
									d="M248 112v56H112V80h104a32 32 0 0 1 32 32"
									opacity=".2"
								/>
								<path d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Zm88 72V88h96a24 24 0 0 1 24 24v48Z" />
							</g>
						</svg>
						Manage Beds
					</p>
					<button
						type="button"
						class="container flex items-center px-2 py-1 max-w-max bg-sky-500 rounded-md border-2 text-neutral-100"
					>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							class="pt-1 size-6"
							viewBox="0 0 24 24"
						>
							<path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
						</svg>
						Add more beds
					</button>
				</div>
				<label>
					<Switch id="one" type="checkbox" class="peer" checked />
					<span>Ward 14</span>

					<div class="hidden mt-2 space-y-2 peer-checked:block">
						<div class="inline-flex max-w-fit">
							<div class="px-2 mx-1 text-white bg-sky-300 rounded containertext-nowrap first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									class="text-sky-700 size-8"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
						</div>
						<div class="inline-flex max-w-fit">
							<div class="px-2 mx-1 text-white bg-sky-300 rounded containertext-nowrap first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									class="text-sky-700 size-8"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
						</div>
					</div>
				</label>
				<label>
					<Switch id="one" type="checkbox" class="peer" checked />
					<span>Ward 43</span>

					<div class="hidden mt-2 space-y-2 peer-checked:block">
						<div class="inline-flex max-w-fit">
							<div class="px-2 mx-1 text-white bg-sky-300 rounded containertext-nowrap first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									class="text-sky-700 size-8"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
						</div>
						<div class="inline-flex max-w-fit">
							<div class="px-2 mx-1 text-white bg-sky-300 rounded containertext-nowrap first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									class="text-sky-700 size-8"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
						</div>
					</div>
				</label>
				<label>
					<Switch id="one" type="checkbox" class="peer" checked />
					<span>Ward 4</span>

					<div class="hidden mt-2 space-y-2 peer-checked:block">
						<div class="inline-flex max-w-fit">
							<div class="px-2 mx-1 text-white bg-sky-300 rounded containertext-nowrap first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									class="text-sky-700 size-8"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
						</div>
						<div class="inline-flex max-w-fit">
							<div class="px-2 mx-1 text-white bg-sky-300 rounded containertext-nowrap first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									class="text-sky-700 size-8"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3s1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2Z"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
							<div class="px-2 mx-1 max-w-max rounded containertext-nowrap max-h-min bg-neutral-200 text-neutral-500 first:ml-0 hover:bg-sky-100">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"
									/>
								</svg>
								<span>B-45</span>
							</div>
						</div>
					</div>
				</label>
			</div>
		</div>
	</DashboardLayout>
);

export default Beds;
