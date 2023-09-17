import { Button } from "@/components/ui/button"
const defaultTheme = require('tailwindcss/defaultTheme')

export default function Home() {
  console.log("defaultTheme", defaultTheme)
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>hello</div>
      <div className="p-24">
        <Button>Click me</Button>
      </div>
      <div className="bg-green">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-green">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-green-500">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-blue-500">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-black-500 font-normal">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-black-500 font-bold">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-xxxs">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-xxs">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-xs">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-s">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-m">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-l">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-xl">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-xxl">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-xxxl">こちらはgreenカラーの背景を持ったdiv要素です</div>
      <div className="text-xxxxl">こちらは Hamburger カラーの背景を持ったdiv要素です</div>
    </main>
  )
}
