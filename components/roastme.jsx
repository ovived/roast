/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/OIkOLEjhq76
 */
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function roastme() {
  return (
    (<div
      key="1"
      className="w-full h-full flex flex-col items-center justify-center gap-10 p-4">
      <h1 className="text-4xl font-bold">Roast Me</h1>
      <div className="w-full max-w-[500px] flex flex-col gap-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a Roaster" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="roaster1">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage alt="Roaster 1" src="/placeholder.svg?height=24&width=24" />
                    <AvatarFallback>R1</AvatarFallback>
                  </Avatar>
                  Roaster 1
                </div>
              </SelectItem>
              <SelectItem value="roaster2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage alt="Roaster 2" src="/placeholder.svg?height=24&width=24" />
                    <AvatarFallback>R2</AvatarFallback>
                  </Avatar>
                  Roaster 2
                </div>
              </SelectItem>
              <SelectItem value="roaster3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage alt="Roaster 3" src="/placeholder.svg?height=24&width=24" />
                    <AvatarFallback>R3</AvatarFallback>
                  </Avatar>
                  Roaster 3
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div
          className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center text-center opacity-50">
          <svg
            className=" w-6 h-6 mr-2"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <svg
            className=" w-6 h-6 mr-2"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
          Connect Camera or Upload Image
        </div>
        <Button className="w-full">Roast Me!</Button>
      </div>
      <div className="w-full max-w-[500px] flex flex-col gap-6">
        <audio className="w-full" controls>
          <source src="/placeholder.mp3" type="audio/mpeg" />
        </audio>
        <div className="bg-zinc-100 p-4 rounded-lg dark:bg-zinc-800">
          <h2 className="font-semibold text-lg">Transcript</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-200">Stand-up bit transcript...</p>
        </div>
      </div>
    </div>)
  );
}
