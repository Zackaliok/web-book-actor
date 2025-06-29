'use client'

import FilePreview from '@/app/ui/dashboard/filePreview'
import { useState } from 'react'
import { CloudUpload } from 'lucide-react'

export default function Page() {
  const [files, setFiles] = useState<File[] | null>(null)
  return (
    <div className={'flex flex-col items-center w-full h-full'}>
      <h1 className={'self-start'}>Upload a new picture</h1>

      <div className="flex items-center justify-center w-1/2 my-32">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudUpload color={'oklch(70.7% .022 261.325)'} size={24} />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept={'image/png, image/jpeg'}
            multiple={true}
          />
        </label>
      </div>

      {files ? (
        <FilePreview file={files[0]} />
      ) : (
        <div className={'flex flex-row w-full justify-center gap-32'}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
