import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="grid grid-cols-4 sm:grid-cols-12 grid-rows-layout sm:grid-rows-sm-layout h-screen gap-1">
    <div class="bg-green-400 col-span-3 sm:order-3">USER</div>
    <nav class="bg-red-400 sm:col-span-2 sm:row-span-2 sm:order-1">NAVIGATION</nav>
    <header class="bg-blue-500 col-span-full sm:col-span-7 sm:order-2">PAGE TITLE</header>
    <main class="bg-yellow-500 col-span-full sm:col-span-10 sm:order-4">MAIN CONTENT</main>
  </div>
`