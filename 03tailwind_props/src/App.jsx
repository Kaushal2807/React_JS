import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Testing</h1>
     <div class="flex font-sans bg-pink-300  mt-8">
  <div class="flex-none w-48 relative">
    <img src="data:image/jpeg;base64,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" loading="lazy" />
  </div>  
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-blue-900">
        Utility Jacket
      </h1>
      <div class="text-lg font-semibold text-blue-900">
        $110.00
      </div>
      <div class="w-full flex-none text-sm font-medium text-blue-900 mt-2">
        In stock
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-blue-900">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-blue-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-blue-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-blue-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-blue-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-blue-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      {/* <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-black-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}
    </div>
    <p class="text-sm text-black">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>

    </>
  )
}

export default App
