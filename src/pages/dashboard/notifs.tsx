import DashboardLayout from '../../layouts/DashboardLayout'

const Notifs = () => {
  return (
    <DashboardLayout>
      <ul class="space-y-2 px-5">
    <li>
      <a href="/notifs" class="block rounded-md border bg-sky-50 border-sky-500 p-2 text-neutral-600 shadow-md transition-shadow hover:shadow-lg">
        <div class="flex items-center justify-between">
          <div class="block font-bold uppercase text-xs">Lab test</div>
          <div class="block text-xs font-medium">1 hr ago</div>
        </div>
        <span class="italic"> Your urine test results are ready!</span>
      </a>
    </li>
    <li>
      <a href="/notifs" class="block rounded-md border bg-sky-50 border-sky-500 p-2 text-neutral-600 shadow-md transition-shadow hover:shadow-lg">
        <div class="flex items-center justify-between">
          <div class="block font-bold uppercase text-xs">Lab test</div>
          <div class="block text-xs font-medium">1 hr ago</div>
        </div>
        <span class="italic"> Your urine test results are ready!</span>
      </a>
    </li>
    <li>
      <a href="/notifs" class="block rounded-md border bg-sky-50 border-sky-500 p-2 text-neutral-600 shadow-md transition-shadow hover:shadow-lg">
        <div class="flex items-center justify-between">
          <div class="block font-bold uppercase text-xs">Lab test</div>
          <div class="block text-xs font-medium">1 hr ago</div>
        </div>
        <span class="italic"> Your urine test results are ready!</span>
      </a>
    </li>
  </ul>
    </DashboardLayout>
  )
}

export default Notifs