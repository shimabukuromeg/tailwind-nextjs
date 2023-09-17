import { Button } from "@/components/ui/button"
const defaultTheme = require('tailwindcss/defaultTheme')

export default function Home() {
  console.log("defaultTheme", defaultTheme)
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>hello</div>
      <div className="pt-24">
        <Button>Click me</Button>
      </div>
    </main>
  )
}
